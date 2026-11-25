"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./ClientQuoteOrbitSection.module.css";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  isPlaceholder: boolean;
  project?: string;
  result?: string;
  link?: string;
}

const TESTIMONIALS: Testimonial[] = [
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
    // PLACEHOLDER: replace with approved client info
    project: "Project type pending",
    result: "Result pending",
  },
  {
    id: "placeholder-03",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 03",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
    // PLACEHOLDER: replace with approved client info
    project: "Project type pending",
    result: "Result pending",
  },
  {
    id: "placeholder-04",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 04",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
    // PLACEHOLDER: replace with approved client info
    project: "Project type pending",
    result: "Result pending",
  },
  {
    id: "placeholder-05",
    quote: "Placeholder: Replace with an approved client quote.",
    name: "Placeholder client 05",
    role: "Role pending",
    company: "Placeholder",
    avatar: "",
    isPlaceholder: true,
    // PLACEHOLDER: replace with approved client info
    project: "Project type pending",
    result: "Result pending",
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
  const quotePanelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const avatarRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pausedRef = useRef(false);
  const hoveredCardRef = useRef(false);
  const focusedCardRef = useRef(false);
  const touchPointerRef = useRef(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const [expandedQuoteId, setExpandedQuoteId] = useState<string | null>(null);
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

  useLayoutEffect(() => {
    const syncCardHeights = () => {
      quoteRefs.current.forEach((card, index) => {
        const panel = quotePanelRefs.current[index];
        if (!card || !panel) return;

        if (window.innerWidth < 640) {
          card.style.removeProperty("height");
          return;
        }

        const details = panel.querySelector<HTMLElement>("[data-quote-details]");
        card.style.height = `${panel.offsetHeight - (details?.offsetHeight ?? 0)}px`;
      });
    };

    syncCardHeights();
    window.addEventListener("resize", syncCardHeights);
    document.fonts.ready.then(syncCardHeights);

    return () => window.removeEventListener("resize", syncCardHeights);
  }, []);

  useEffect(() => {
    if (
      !expandedQuoteId ||
      !window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    const closeOnOutsideTap = (event: PointerEvent) => {
      const index = TESTIMONIALS.findIndex(
        (testimonial) => testimonial.id === expandedQuoteId
      );
      const expandedCard = quoteRefs.current[index];
      if (expandedCard && !expandedCard.contains(event.target as Node)) {
        setExpandedQuoteId(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideTap);
    return () => document.removeEventListener("pointerdown", closeOnOutsideTap);
  }, [expandedQuoteId]);

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

        node.dataset.anchorX =
          x < -bounds.width * 0.12
            ? "left"
            : x > bounds.width * 0.12
              ? "right"
              : "center";
        node.dataset.anchorY = y > 0 ? "bottom" : "top";
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
    focusedCardRef.current = true;
    pausedRef.current = true;
  };

  const updateRestingCardHeight = (index: number) => {
    const card = quoteRefs.current[index];
    const panel = quotePanelRefs.current[index];
    if (!card || !panel || window.innerWidth < 640) return;

    const details = panel.querySelector<HTMLElement>("[data-quote-details]");
    card.style.height = `${panel.offsetHeight - (details?.offsetHeight ?? 0)}px`;
  };

  const resumeOrbitIfUnfocused = (
    event: React.FocusEvent<HTMLUListElement>
  ) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      focusedCardRef.current = false;
    }
    pausedRef.current = hoveredCardRef.current || focusedCardRef.current;
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
      <div className={`intent-container ${styles.container}`}>
        <h2 id="client-voices-title" className={`type-h2 ${styles.heading}`}>
          Don’t just take{" "}
          <span className="font-editorial font-normal">our word</span> for it.
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
            <p className={styles.centerTitle}>
              Trusted by{" "}
              <span className="font-editorial font-normal">proof.</span>
            </p>
            <p className={styles.caption}>
              Real work shipped. Real founders backing it.
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
            {TESTIMONIALS.map((testimonial, index) => {
              const hasExtraInfo = Boolean(
                testimonial.project || testimonial.result || testimonial.link
              );
              const isActive = expandedQuoteId === testimonial.id;
              const isExpanded = hasExtraInfo && isActive;

              return (
                <li
                  key={testimonial.id}
                  ref={(node) => {
                    quoteRefs.current[index] = node;
                  }}
                  data-quote-card
                  data-active={isActive}
                  data-expanded={isExpanded}
                  aria-expanded={isExpanded}
                  aria-controls={
                    hasExtraInfo
                      ? `testimonial-details-${testimonial.id}`
                      : undefined
                  }
                  className={`${styles.quoteCard} ${testimonial.isPlaceholder ? styles.placeholderCard : ""}`}
                  tabIndex={0}
                  onPointerDown={(event) => {
                    touchPointerRef.current = event.pointerType === "touch";
                  }}
                  onPointerCancel={() => {
                    touchPointerRef.current = false;
                  }}
                  onFocus={() => {
                    focusedCardRef.current = true;
                    pausedRef.current = true;
                    if (!touchPointerRef.current) {
                      setExpandedQuoteId(testimonial.id);
                    }
                  }}
                  onBlur={(event) => {
                    if (
                      !event.currentTarget.contains(
                        event.relatedTarget as Node | null
                      ) &&
                      !event.currentTarget.matches(":hover")
                    ) {
                      setExpandedQuoteId((current) =>
                        current === testimonial.id ? null : current
                      );
                    }
                  }}
                  onPointerEnter={() => {
                    hoveredCardRef.current = true;
                    pausedRef.current = true;
                    if (window.matchMedia("(hover: hover)").matches) {
                      setExpandedQuoteId(testimonial.id);
                    }
                  }}
                  onPointerLeave={(event) => {
                    const focused = event.currentTarget.contains(
                      document.activeElement
                    );
                    hoveredCardRef.current = false;
                    pausedRef.current = focused || focusedCardRef.current;
                    if (!focused) {
                      setExpandedQuoteId((current) =>
                        current === testimonial.id ? null : current
                      );
                    }
                  }}
                  onClick={(event) => {
                    if (
                      window.matchMedia("(hover: none)").matches &&
                      hasExtraInfo &&
                      !(
                        event.target instanceof Element &&
                        event.target.closest("a")
                      )
                    ) {
                      setExpandedQuoteId((current) =>
                        current === testimonial.id ? null : testimonial.id
                      );
                    }
                    touchPointerRef.current = false;
                  }}
                  onKeyDown={(event) => {
                    if (event.key !== "Escape") return;
                    setExpandedQuoteId(null);
                    const activeElement = event.currentTarget.ownerDocument
                      .activeElement;
                    if (
                      activeElement instanceof HTMLElement &&
                      event.currentTarget.contains(activeElement)
                    ) {
                      activeElement.blur();
                    }
                  }}
                >
                  <div
                    ref={(node) => {
                      quotePanelRefs.current[index] = node;
                    }}
                    className={styles.quotePanel}
                  >
                    {testimonial.isPlaceholder && (
                      <span className={styles.placeholderLabel}>
                        Placeholder
                      </span>
                    )}
                    <figure className={styles.quoteFigure}>
                      <blockquote className={styles.quoteText}>
                        “{testimonial.quote}”
                      </blockquote>
                      <figcaption className={styles.quoteAuthor}>
                        <span
                          className={styles.authorAvatar}
                          aria-hidden="true"
                        >
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
                    {hasExtraInfo && (
                      <div
                        data-quote-details
                        id={`testimonial-details-${testimonial.id}`}
                        className={styles.quoteDetails}
                        onTransitionEnd={(event) => {
                          if (
                            event.propertyName === "max-height" &&
                            !isExpanded
                          ) {
                            updateRestingCardHeight(index);
                          }
                        }}
                      >
                        <div className={styles.quoteDetailsInner}>
                          <div
                            className={styles.quoteDivider}
                            aria-hidden="true"
                          />
                          {testimonial.project && (
                            <p className={styles.projectTag}>
                              {testimonial.project}
                            </p>
                          )}
                          {testimonial.result && (
                            <p className={styles.projectResult}>
                              {testimonial.result}
                            </p>
                          )}
                          {testimonial.link && (
                            <a
                              className={styles.projectLink}
                              href={testimonial.link}
                              tabIndex={isExpanded ? 0 : -1}
                              onClick={(event) => {
                                touchPointerRef.current = false;
                                event.stopPropagation();
                              }}
                            >
                              View project
                              <ArrowUpRight aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
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
