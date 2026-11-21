import type { Transition, Variants } from "framer-motion";

export const INTENT_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  fast: 0.18,
  base: 0.28,
  slow: 0.52,
  hero: 0.65,
} as const;

export const INTENT_TRANSITION: Transition = {
  duration: MOTION_DURATION.slow,
  ease: INTENT_EASE,
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.16,
} as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.slow,
      ease: INTENT_EASE,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const subtleScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION_DURATION.slow,
      ease: INTENT_EASE,
    },
  },
};
