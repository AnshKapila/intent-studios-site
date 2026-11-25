import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";
import { INTENT_CIRCLE } from "@/data/intent-circle";
import { Button } from "@/components/ui/Button";
import styles from "./FounderCircleBentoSection.module.css";

export function FounderCircleBentoSection() {
  return (
    <section className={styles.section} aria-labelledby="founder-bento-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="founder-bento-title" className={styles.sectionTitle}>
            Built by a founder, for founders.
          </h2>
          <p className={styles.intro}>
            Direct creative leadership from Ansh Kapila — paired with Intent
            Circle, our curated space for builders who care how digital
            products actually work.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={`${styles.tile} ${styles.founderTile}`}>
            <p className={styles.tileLabel}>Founder’s note</p>
            <h3 className={styles.founderName}>{SITE.founder.name}</h3>
            <p className={styles.founderNote}>{SITE.founder.shortNote}</p>
            <Link href="/about/" className={`${styles.textLink} ${styles.interactive}`}>
              <span>Read the full story</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </article>

          <article className={`${styles.tile} ${styles.creativeTile}`}>
            <p className={styles.tileLabel}>Creative direction</p>
            <div className={styles.creativeIdentity}>
              <h3 className={styles.creativeName}>{SITE.founder.name}</h3>
              <p className={styles.creativeRole}>{SITE.founder.role}</p>
            </div>
            <div className={styles.socialLinks}>
              <a
                href={SITE.founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.interactive}`}
              >
                {SITE.founder.instagramHandle}
              </a>
              <a
                href={SITE.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.interactive}`}
              >
                LinkedIn
              </a>
            </div>
          </article>

          <article className={`${styles.tile} ${styles.circleTile}`}>
            <p className={styles.tileLabel}>Intent Circle</p>
            <h3 className={styles.circleTitle}>Stay close to how we build.</h3>
            <p className={styles.circleCopy}>{INTENT_CIRCLE.teaserSentence}</p>
            <Link
              href={INTENT_CIRCLE.href}
              className={`${styles.circleButton} ${styles.interactive}`}
            >
              <span>{INTENT_CIRCLE.teaserCta}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </article>

          <article className={`${styles.tile} ${styles.philosophyTile}`}>
            <p className={styles.tileLabel}>Design philosophy</p>
            <h3 className={styles.philosophyTitle}>Craft earns trust.</h3>
            <p className={styles.philosophyCopy}>
              Spacing rhythm, typographic contrast, micro-interactions, and
              load speed are not polish — they are why visitors trust you.
            </p>
          </article>

          <article className={`${styles.tile} ${styles.directTile}`}>
            <p className={styles.tileLabel}>Direct access</p>
            <h3 className={styles.directTitle}>No account managers.</h3>
            <p className={styles.directCopy}>
              You speak directly with the people designing your system and
              writing your production code.
            </p>
            <div className={styles.chipRow}>
              <span className={styles.chip}>Practical innovation</span>
              <span className={styles.chip}>Honest pushback</span>
            </div>
          </article>

          <article className={`${styles.tile} ${styles.nextTile}`}>
            <div className={styles.nextCopy}>
              <p className={styles.tileLabel}>Next step</p>
              <h3 className={styles.nextTitle}>Have a project in mind?</h3>
              <p className={styles.nextDescription}>
                Bring your current site, product idea, or launch goal to a
                15-minute discovery call.
              </p>
            </div>
            <Button
              href={SITE.primaryCta.href}
              variant="primary"
              size="md"
              showArrow
              className={styles.primaryButton}
            >
              {SITE.primaryCta.label}
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
