export interface ClientLogoItem {
  id: string;
  name: string;
  /** Short pill text shown on hover describing what Intent Studios built for this brand */
  servicePill: string;
  /** Brand color revealed on hover (colorless monochrome at rest) */
  accentColor: string;
  /** Optional path to real client logo in /public/images/logos/... (replaces hypothetical SVG mark automatically) */
  logoSrc?: string;
  mark: "bar" | "leaf" | "pulse" | "arch" | "spark" | "ring" | "grid" | "peak" | "wave" | "frame" | "prism" | "dot";
}

export const LOGO_ROW_ONE: ClientLogoItem[] = [
  {
    id: "ironform",
    name: "Ironform",
    servicePill: "Website & Booking UX",
    accentColor: "#F24E1E",
    mark: "bar",
  },
  {
    id: "kora",
    name: "Kora Botanicals",
    servicePill: "E-commerce & Visuals",
    accentColor: "#2E6F5E",
    mark: "leaf",
  },
  {
    id: "pulseflow",
    name: "Pulseflow",
    servicePill: "Product UI & System",
    accentColor: "#2563EB",
    mark: "pulse",
  },
  {
    id: "sola",
    name: "Sola Studio",
    servicePill: "Brand Identity",
    accentColor: "#B45309",
    mark: "ring",
  },
  {
    id: "meridian",
    name: "Meridian",
    servicePill: "AI Product Shoot",
    accentColor: "#DC2626",
    mark: "peak",
  },
  {
    id: "northline",
    name: "Northline",
    servicePill: "Business Website",
    accentColor: "#0F766E",
    mark: "arch",
  },
];

export const LOGO_ROW_TWO: ClientLogoItem[] = [
  {
    id: "velour",
    name: "Velour Roast",
    servicePill: "Brand & Packaging",
    accentColor: "#9A3412",
    mark: "wave",
  },
  {
    id: "apex",
    name: "Apex Lab",
    servicePill: "Mobile App UX",
    accentColor: "#0284C7",
    mark: "prism",
  },
  {
    id: "strata",
    name: "Strata Living",
    servicePill: "Editorial Web Build",
    accentColor: "#4D7C0F",
    mark: "frame",
  },
  {
    id: "vector",
    name: "Vector Ledger",
    servicePill: "Dashboard Redesign",
    accentColor: "#1D4ED8",
    mark: "grid",
  },
  {
    id: "monolith",
    name: "Monolith",
    servicePill: "Social Visual System",
    accentColor: "#EA580C",
    mark: "spark",
  },
  {
    id: "verve",
    name: "Verve Health",
    servicePill: "Conversion Website",
    accentColor: "#059669",
    mark: "dot",
  },
];
