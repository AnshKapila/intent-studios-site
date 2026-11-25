"use client";

import Link from "next/link";
import { Newsreader } from "next/font/google";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  MapPin,
  MessagesSquare,
  Users,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/data/site";
import { INTENT_CIRCLE } from "@/data/intent-circle";
import styles from "./FounderCircleBentoSection.module.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  display: "swap",
});

const PLACEHOLDER_COMMUNITY_CONTENT = {
  // Placeholder event dates and titles; replace them with a confirmed schedule.
  events: [
    { date: "2026-12-14", city: "Delhi", title: "Placeholder event" },
    { date: "2026-12-22", city: "Bangalore", title: "Placeholder event" },
    { date: "2027-01-08", city: "Delhi", title: "Placeholder event" },
    { date: "2027-01-20", city: "Bangalore", title: "Placeholder event" },
    { date: "2027-02-11", city: "Delhi", title: "Placeholder event" },
  ],
  resources: [
    { label: "Playbooks", placement: "playbooksChip", size: "large" },
    { label: "Event updates", placement: "eventUpdatesChip", size: "large" },
    { label: "City references", placement: "cityReferencesChip", size: "medium" },
    { label: "Templates", placement: "templatesChip", size: "medium" },
    { label: "Teardowns", placement: "teardownsChip", size: "small" },
    { label: "AI workflows", placement: "aiWorkflowsChip", size: "small" },
    { label: "Members", placement: "membersChip", size: "featured" },
  ],
  steps: [
    { number: "01", name: "Join", icon: Users },
    { number: "02", name: "Attend", icon: CalendarDays },
    { number: "03", name: "Learn", icon: BookOpen },
    { number: "04", name: "Connect", icon: MessagesSquare },
  ],
} as const;

const CALENDAR_MONTHS = [
  { year: 2026, month: 11 },
  { year: 2027, month: 0 },
  { year: 2027, month: 1 },
] as const;

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCalendarDays(year: number, month: number) {
  const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const firstVisibleDate = new Date(year, month, 1 - firstDayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstVisibleDate);
    date.setDate(firstVisibleDate.getDate() + index);
    return date;
  });
}

function formatEventDate(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function FounderCircleBentoSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasEntered = useInView(gridRef, { once: true, amount: 0.08 });
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;
  const today = new Date().toISOString().slice(0, 10);
  const upcomingEvents = PLACEHOLDER_COMMUNITY_CONTENT.events.filter(
    (event) => event.date >= today
  );
  const nextEventDate = upcomingEvents[0]?.date;
  const eventByDate = new Map<string, (typeof PLACEHOLDER_COMMUNITY_CONTENT.events)[number]>(
    upcomingEvents.map((event) => [event.date, event])
  );
  const eventSummary = upcomingEvents
    .map((event) => `${formatEventDate(event.date)} ${event.city}`)
    .join(", ");

  const tileMotion = (index: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate:
      reduceMotion || hasEntered
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 16 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 0.45, delay: index * 0.06, ease: EASE_OUT },
  });

  return (
    <section className={styles.section} aria-labelledby="intent-circle-title">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 id="intent-circle-title" className={styles.sectionTitle}>
            Stay close to how{" "}
            <em className={`${styles.headlineAccent} ${newsreader.className}`}>
              builders
            </em>{" "}
            actually build.
          </h2>
          <p className={styles.sectionIntro}>
            Intent Circle is our community for founders and creative partners.
            Event updates, practical resources and city meetups, shared by
            people who ship.
          </p>
        </header>

        <div ref={gridRef} className={styles.grid}>
          <motion.article
            {...tileMotion(0)}
            className={`${styles.tileItem} ${styles.calendarItem}`}
          >
            <div className={`${styles.tile} ${styles.whiteTile} ${styles.calendarTile}`}>
              <header className={styles.tileHeader}>
                <h3 className={styles.tileHeading}>Event updates</h3>
                <p className={styles.tileSubheading}>
                  Dates, cities and RSVPs in one place
                </p>
              </header>

              <div
                className={styles.calendarData}
                role="group"
                aria-label={`Upcoming events: ${eventSummary || "No dates listed"}`}
              >
                <div className={styles.months} aria-hidden="true">
                  {CALENDAR_MONTHS.map(({ year, month }) => {
                    const monthDate = new Date(year, month, 1);
                    const days = getCalendarDays(year, month);

                    return (
                      <div
                        key={`${year}-${month}`}
                        className={styles.month}
                      >
                        <h4 className={styles.monthTitle}>
                          {new Intl.DateTimeFormat("en", {
                            month: "short",
                            year: "numeric",
                          }).format(monthDate)}
                        </h4>
                        <div className={styles.weekdays}>
                          {WEEKDAYS.map((weekday, index) => (
                            <span key={`${weekday}-${index}`}>{weekday}</span>
                          ))}
                        </div>
                        <div className={styles.days}>
                          {days.map((date) => {
                            const dateKey = toDateKey(date);
                            const event = eventByDate.get(dateKey);
                            const isInMonth = date.getMonth() === month;
                            const isNextEvent = dateKey === nextEventDate;
                            const cityClass =
                              event?.city === "Bangalore"
                                ? styles.bangaloreEvent
                                : styles.delhiEvent;

                            return (
                              <span
                                key={dateKey}
                                className={[
                                  styles.day,
                                  !isInMonth ? styles.outsideMonth : "",
                                  event ? `${styles.eventDay} ${cityClass}` : "",
                                  isNextEvent ? styles.nextEvent : "",
                                ]
                                  .filter(Boolean)
                                  .join(" ")}
                              >
                                {String(date.getDate()).padStart(2, "0")}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <ul className={styles.screenReaderOnly}>
                  {upcomingEvents.map((event) => (
                    <li key={event.date}>
                      {formatEventDate(event.date)} {event.city}: {event.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.calendarLegend}>
                <span className={styles.legendChip}>
                  <span className={`${styles.legendDot} ${styles.delhiDot}`} />
                  Delhi
                </span>
                <span className={styles.legendChip}>
                  <span className={`${styles.legendDot} ${styles.bangaloreDot}`} />
                  Bangalore
                </span>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion(1)}
            className={`${styles.tileItem} ${styles.stepsItem}`}
          >
            <div className={`${styles.tile} ${styles.orangeTile} ${styles.stepsTile}`}>
              <header className={styles.tileHeader}>
                <h3 className={styles.tileHeading}>How Intent Circle works</h3>
                <p className={styles.orangeSubheading}>
                  Four simple steps to join the room
                </p>
              </header>

              <ol className={styles.stepsGrid} aria-label="Four steps to join">
                {PLACEHOLDER_COMMUNITY_CONTENT.steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <li key={step.number} className={styles.stepItem}>
                      <motion.div
                        className={styles.stepCard}
                        initial={
                          reduceMotion ? false : { opacity: 0, scaleY: 0 }
                        }
                        animate={
                          reduceMotion || hasEntered
                            ? { opacity: 1, scaleY: 1 }
                            : { opacity: 0, scaleY: 0 }
                        }
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : {
                                duration: 0.42,
                                delay: 0.18 + index * 0.12,
                                ease: EASE_OUT,
                              }
                        }
                      >
                        <span className={styles.stepNumber}>{step.number}</span>
                        <StepIcon
                          className={styles.stepIcon}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        <span className={styles.stepName}>{step.name}</span>
                      </motion.div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion(2)}
            className={`${styles.tileItem} ${styles.numberItem}`}
          >
            <div className={`${styles.tile} ${styles.darkTile} ${styles.numberTile}`}>
              <h3 className={styles.cityNumber}>02</h3>
              <p className={styles.cityCaption}>
                Cities at launch. Delhi and Bangalore.
              </p>
              <div className={styles.cityChips}>
                <span className={styles.cityChip}>
                  <MapPin aria-hidden="true" />
                  Delhi
                </span>
                <span className={styles.cityChip}>
                  <MapPin aria-hidden="true" />
                  Bangalore
                </span>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion(3)}
            className={`${styles.tileItem} ${styles.resourcesItem}`}
          >
            <div className={`${styles.tile} ${styles.whiteTile} ${styles.resourcesTile}`}>
              <header className={styles.tileHeader}>
                <h3 className={styles.tileHeading}>What members get</h3>
                <p className={styles.tileSubheading}>
                  Resources, references and updates
                </p>
              </header>
              <div className={styles.tagCloud} aria-label="Community resources">
                {PLACEHOLDER_COMMUNITY_CONTENT.resources.map((resource) => (
                  <span
                    key={resource.label}
                    className={[
                      styles.resourceChip,
                      styles[resource.size],
                      styles[resource.placement],
                    ].join(" ")}
                  >
                    {resource.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion(4)}
            className={`${styles.tileItem} ${styles.hostItem}`}
          >
            <div className={`${styles.tile} ${styles.darkTile} ${styles.hostTile}`}>
              <p className={styles.tileSubheading}>Hosted by</p>
              <h3 className={styles.hostName}>{SITE.founder.name}</h3>
              <p className={styles.hostRole}>{SITE.founder.role}</p>
              <div className={styles.hostLinks}>
                <a
                  href={SITE.founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tileLink}
                >
                  <span>{SITE.founder.instagramHandle}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={SITE.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tileLink}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion(5)}
            className={`${styles.tileItem} ${styles.joinItem}`}
          >
            <div className={`${styles.tile} ${styles.whiteTile} ${styles.joinTile}`}>
              <div className={styles.joinCopy}>
                <h3 className={styles.joinTitle}>Join Intent Circle</h3>
                <p className={styles.joinDescription}>
                  Get event updates, resources and city meetups first.
                </p>
              </div>
              <div className={styles.joinActions}>
                <Link
                  href={INTENT_CIRCLE.href}
                  className={`${styles.joinPrimary} ${styles.joinLink}`}
                >
                  <span>Join Intent Circle</span>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
                <Link
                  href={SITE.primaryCta.href}
                  className={`${styles.joinSecondary} ${styles.joinLink}`}
                >
                  <span>Book a 15-minute discovery call</span>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
