"use client";

import { Newsreader } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import styles from "./ClientQuoteOrbitSection.module.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const TESTIMONIALS = [
  {
    id: "intent-studios",
    quote:
      "There's a new problem in digital media. If design, engineering, and AI can solve it, we'll find the way.",
    name: "Intent Studios",
    role: "",
    company: "Intent Studios",
    avatar: "",
    isPlaceholder: false,
  },
  {
    id: "placeholder-02",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 02",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
  },
  {
    id: "placeholder-03",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 03",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
  },
  {
    id: "placeholder-04",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 04",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
  },
  {
    id: "placeholder-05",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 05",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
  },
] as const;

const EXTRA_AVATARS = [
  { id: "placeholder-founder", name: "Placeholder founder", avatar: "" },
  { id: "placeholder-builder", name: "Placeholder builder", avatar: "" },
  { id: "placeholder-partner", name: "Placeholder partner", avatar: "" },
] as const;

const AVATAR_PROFILES = [
  ...TESTIMONIALS.map(({ id, name, avatar }) => ({ id, name, avatar })),
  ...EXTRA_AVATARS,
];

function getInitials(name: string) {
  const placeholderNumber = name.match(/(\d+)$/);
  if (name.toLowerCase().includes("placeholder")) {
    return placeholderNumber ? `P${Number(placeholderNumber[1])}` : "PH";
  }

  return name
    .split(/\s+/)
    .filter((part) => part && part.toLowerCase() !== "placeholder")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "IS";
}

export function ClientQuoteOrbitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const quoteListRef = useRef<HTMLUListElement>(null);
  const quoteRefs = useRef<Array<HTMLLIElement | null>>([]);
  const avatarRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pausedRef = useRef(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit || !hasEntered) return;

    let frameId = 0;
    let elapsed = 0;
    let lastTimestamp: number | null = null;

    const positionNodes = (time: number) => {
      const bounds = orbit.getBoundingClientRect();
      const desktop = window.innerWidth >= 1024;
      const outerRadiusX = bounds.width * (desktop ? 0.46 : 0.4);
      const outerRadiusY = bounds.height * (desktop ? 0.4 : 0.36);
      const innerRadiusX = bounds.width * (desktop ? 0.33 : 0.29);
      const innerRadiusY = bounds.height * (desktop ? 0.27 : 0.24);

      const visibleQuotes = quoteRefs.current.filter(
        (node): node is HTMLLIElement =>
          Boolean(node && getComputedStyle(node).display !== "none")
      );

      visibleQuotes.forEach((node, visibleIndex) => {
        const angle =
          (visibleIndex / visibleQuotes.length) * Math.PI * 2 -
          Math.PI / 2 +
          (time / 90000) * Math.PI * 2;
        const cardBounds = node.getBoundingClientRect();
        const maxX = Math.max(0, bounds.width / 2 - cardBounds.width / 2 - 10);
        const maxY = Math.max(0, bounds.height / 2 - cardBounds.height / 2 - 8);
        const x = Math.max(
          -maxX,
          Math.min(maxX, outerRadiusX * Math.cos(angle))
        );
        const y = Math.max(
          -maxY,
          Math.min(maxY, outerRadiusY * Math.sin(angle))
        );

        node.style.transform = `translate3d(${bounds.width / 2 + x}px, ${bounds.height / 2 + y}px, 0) translate(-50%, -50%)`;
      });

      const visibleAvatars = avatarRefs.current.filter(
        (node): node is HTMLSpanElement =>
          Boolean(node && getComputedStyle(node).display !== "none")
      );

      visibleAvatars.forEach((node, visibleIndex) => {
        const angle =
          (visibleIndex / visibleAvatars.length) * Math.PI * 2 -
          Math.PI / 2 +
          (time / 60000) * Math.PI * 2;
        const x = innerRadiusX * Math.cos(angle);
        const y = innerRadiusY * Math.sin(angle);

        node.style.transform = `translate3d(${bounds.width / 2 + x}px, ${bounds.height / 2 + y}px, 0) translate(-50%, -50%)`;
      });
    };

    const animate = (timestamp: number) => {
      if (window.innerWidth < 640) {
        frameId = 0;
        lastTimestamp = null;
        return;
      }

      if (pausedRef.current) {
        lastTimestamp = null;
      } else {
        if (lastTimestamp !== null) elapsed += timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        positionNodes(elapsed);
      }

      frameId = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (prefersReducedMotion) {
        positionNodes(0);
      } else if (window.innerWidth < 640) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
        lastTimestamp = null;
      } else if (!frameId) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("resize", handleResize);
    if (prefersReducedMotion) {
      positionNodes(0);
    } else if (window.innerWidth >= 640) {
      frameId = window.requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(frameId);
    };
  }, [hasEntered, prefersReducedMotion]);

  const pauseOrbit = () => {
    pausedRef.current = true;
  };

  const resumeOrbitIfUnfocused = (
    event: React.FocusEvent<HTMLUListElement>
  ) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      pausedRef.current = false;
    }
  };

  const showQuote = (index: number) => {
    const list = quoteListRef.current;
    const quote = quoteRefs.current[index];
    if (list && quote) {
      const listBounds = list.getBoundingClientRect();
      const quoteBounds = quote.getBoundingClientRect();
      const targetLeft =
        list.scrollLeft +
        quoteBounds.left -
        listBounds.left -
        (list.clientWidth - quoteBounds.width) / 2;
      list.scrollTo({
        left: targetLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
    setActiveQuote(index);
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="client-voices-title"
    >
      <div className={styles.container}>
        <h2 id="client-voices-title" className={styles.heading}>
          Don't just take{" "}
          <em className={`${styles.headingAccent} ${newsreader.className}`}>
            our word
          </em>{" "}
          for it.
        </h2>

        <div
          ref={orbitRef}
          className={`${styles.orbit} ${hasEntered ? styles.entered : ""}`}
        >
          <svg
            className={styles.orbitLines}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse className={styles.outerEllipse} cx="50" cy="50" rx="46" ry="40" />
            <ellipse className={styles.innerEllipse} cx="50" cy="50" rx="33" ry="27" />
          </svg>

          <div className={styles.centerpiece}>
            <p className={`${styles.number} ${newsreader.className}`}>
              <span className={`${styles.numberHighlight} ${hasEntered ? styles.highlightEntered : ""}`}>
                11+
              </span>
            </p>
            <p className={styles.caption}>
              projects shipped for founders who wanted results, not decks
            </p>
          </div>

          <div className={styles.avatarOrbit} aria-hidden="true">
            {AVATAR_PROFILES.map((profile, index) => (
              <span
                key={profile.id}
                ref={(node) => {
                  avatarRefs.current[index] = node;
                }}
                className={styles.avatar}
                title={profile.name}
              >
                {profile.avatar ? (
                  // Client-supplied avatar path; the current set uses initials until photos are approved.
                  <img
                    src={profile.avatar}
                    alt=""
                    className={styles.avatarImage}
                  />
                ) : (
                  getInitials(profile.name)
                )}
              </span>
            ))}
          </div>

          <ul
            ref={quoteListRef}
            className={styles.quoteList}
            aria-label="Client testimonials"
            onFocusCapture={pauseOrbit}
            onBlurCapture={resumeOrbitIfUnfocused}
            onScroll={(event) => {
              const list = event.currentTarget;
              if (window.innerWidth >= 640) return;
              const center = list.getBoundingClientRect().left + list.clientWidth / 2;
              let nearestIndex = 0;
              let nearestDistance = Number.POSITIVE_INFINITY;
              quoteRefs.current.forEach((quote, index) => {
                if (!quote || getComputedStyle(quote).display === "none") return;
                const bounds = quote.getBoundingClientRect();
                const distance = Math.abs(bounds.left + bounds.width / 2 - center);
                if (distance < nearestDistance) {
                  nearestIndex = index;
                  nearestDistance = distance;
                }
              });
              setActiveQuote(nearestIndex);
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <li
                key={testimonial.id}
                ref={(node) => {
                  quoteRefs.current[index] = node;
                }}
                className={`${styles.quoteCard} ${testimonial.isPlaceholder ? styles.placeholderCard : ""}`}
                tabIndex={0}
                onFocus={() => {
                  pausedRef.current = true;
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) {
                    pausedRef.current = false;
                  }
                }}
                onPointerEnter={pauseOrbit}
                onPointerLeave={() => {
                  pausedRef.current = Boolean(
                    quoteListRef.current?.contains(document.activeElement)
                  );
                }}
              >
                {testimonial.isPlaceholder && (
                  <span className={styles.placeholderLabel}>Placeholder</span>
                )}
                <figure className={styles.quoteFigure}>
                  <blockquote className={`${styles.quoteText} ${newsreader.className}`}>
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className={styles.quoteAuthor}>
                    <span className={styles.authorAvatar} aria-hidden="true">
                      {getInitials(testimonial.name)}
                    </span>
                    <cite
                      aria-label={[
                        testimonial.name,
                        testimonial.role,
                        testimonial.company === testimonial.name
                          ? ""
                          : testimonial.company,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    >
                      {testimonial.role
                        ? `${testimonial.name} · ${testimonial.role}`
                        : testimonial.name}
                    </cite>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className={styles.carouselDots} aria-label="Choose a testimonial">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                className={`${styles.carouselDot} ${activeQuote === index ? styles.activeDot : ""}`}
                aria-label={`Show testimonial ${index + 1} of ${TESTIMONIALS.length}`}
                aria-current={activeQuote === index ? "true" : undefined}
                onClick={() => showQuote(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
