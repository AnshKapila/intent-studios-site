import type { ServiceSlug } from "./services";

export interface LocalPhotoAsset {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
  source: "library-057" | "stand-in";
  subject: string;
}

export const PHOTOS: Record<string, LocalPhotoAsset> = {
  fitnessGym: {
    src: "/images/photo-f116285786.webp",
    srcSet: "/images/photo-f116285786-500.webp 500w, /images/photo-f116285786-960.webp 960w, /images/photo-f116285786.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Strength athlete preparing a barbell lift inside a performance training gym",
    objectPosition: "50% 35%",
    source: "stand-in",
    subject: "fitness-wellness",
  },
  cosmeticBottle: {
    src: "/images/photo-f64704361.webp",
    srcSet: "/images/photo-f64704361-500.webp 500w, /images/photo-f64704361-960.webp 960w, /images/photo-f64704361.webp 1280w",
    width: 1280,
    height: 962,
    alt: "Amber glass botanical oil bottle casting warm light reflections across a clean surface",
    objectPosition: "50% 50%",
    source: "stand-in",
    subject: "d2c-product",
  },
  darkLightTunnel: {
    src: "/images/photo-c734.webp",
    srcSet: "/images/photo-c734-500.webp 500w, /images/photo-c734-960.webp 960w, /images/photo-c734.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Receding architectural light rings receding through a dark geometric tunnel",
    objectPosition: "50% 50%",
    source: "library-057",
    subject: "digital-product",
  },
  studioNotebook: {
    src: "/images/photo-d183.webp",
    srcSet: "/images/photo-d183-500.webp 500w, /images/photo-d183-960.webp 960w, /images/photo-d183.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Open blank studio notebook and drafting pencil resting on a dark timber desk",
    objectPosition: "50% 50%",
    source: "library-057",
    subject: "website-strategy",
  },
  paperEdgesDark: {
    src: "/images/photo-c826.webp",
    srcSet: "/images/photo-c826-500.webp 500w, /images/photo-c826-960.webp 960w, /images/photo-c826.webp 1280w",
    width: 1280,
    height: 962,
    alt: "Sculptural curved paper edges rising out of deep shadow with crisp rim light",
    objectPosition: "50% 50%",
    source: "library-057",
    subject: "brand-identity",
  },
  coffeePourWarm: {
    src: "/images/photo-m61713103.webp",
    srcSet: "/images/photo-m61713103-500.webp 500w, /images/photo-m61713103-960.webp 960w, /images/photo-m61713103.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Pour-over coffee dripping into a glass carafe in warm low studio light",
    objectPosition: "58% 45%",
    source: "library-057",
    subject: "editorial-content",
  },
  sunlitLamp: {
    src: "/images/photo-d88.webp",
    srcSet: "/images/photo-d88-500.webp 500w, /images/photo-d88-960.webp 960w, /images/photo-d88.webp 1280w",
    width: 1280,
    height: 1753,
    alt: "Minimal ceramic studio lamp casting architectural afternoon shadows across a matte wall",
    objectPosition: "50% 45%",
    source: "library-057",
    subject: "studio-craft",
  },
  stackedBooks: {
    src: "/images/photo-c877.webp",
    srcSet: "/images/photo-c877-500.webp 500w, /images/photo-c877-960.webp 960w, /images/photo-c877.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Close-up of editorial design volumes stacked with crisp paper edges",
    objectPosition: "50% 50%",
    source: "library-057",
    subject: "editorial-systems",
  },
  scatteredCard: {
    src: "/images/photo-c823.webp",
    srcSet: "/images/photo-c823-500.webp 500w, /images/photo-c823-960.webp 960w, /images/photo-c823.webp 1280w",
    width: 1280,
    height: 1829,
    alt: "Layered architectural card stocks arranged with crisp geometric shadow lines",
    objectPosition: "50% 50%",
    source: "library-057",
    subject: "material-system",
  },
};

export const PROJECT_PHOTOS: Record<string, LocalPhotoAsset> = {
  "ironform-athletics": PHOTOS.fitnessGym,
  "kora-botanicals": PHOTOS.cosmeticBottle,
  "pulseflow-os": PHOTOS.darkLightTunnel,
  "sola-pilates-club": PHOTOS.sunlitLamp,
  "apex-recovery-lab": PHOTOS.studioNotebook,
  "meridian-gear": PHOTOS.coffeePourWarm,
  "velour-roast": PHOTOS.coffeePourWarm,
  "northline-advisory": PHOTOS.stackedBooks,
  "strata-realty": PHOTOS.scatteredCard,
  "vector-ledger": PHOTOS.darkLightTunnel,
  "atelier-monolith": PHOTOS.paperEdgesDark,
};

export const SERVICE_PHOTOS: Record<ServiceSlug, LocalPhotoAsset> = {
  "website-design": PHOTOS.studioNotebook,
  "product-design": PHOTOS.darkLightTunnel,
  "brand-identity": PHOTOS.paperEdgesDark,
  "content-social": PHOTOS.coffeePourWarm,
};

export function getProjectPhoto(slug: string): LocalPhotoAsset {
  return PROJECT_PHOTOS[slug] ?? PHOTOS.studioNotebook;
}
