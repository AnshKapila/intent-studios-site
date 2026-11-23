"use client";

import { LOGO_ROW_ONE, LOGO_ROW_TWO, type ClientLogoItem } from "@/data/logos";
import { cn } from "@/lib/utils";

function BrandMarkSvg({
  mark,
  color,
}: {
  mark: ClientLogoItem["mark"];
  color: string;
}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {mark === "bar" && (
        <>
          <rect x="3" y="4" width="5" height="16" rx="1.5" fill={color} />
          <rect x="11" y="9" width="10" height="11" rx="1.5" fill={color} fillOpacity="0.45" />
        </>
      )}
      {mark === "leaf" && (
        <path
          d="M5 19C5 10.5 10.5 5 19 5C19 13.5 13.5 19 5 19Z"
          fill={color}
        />
      )}
      {mark === "pulse" && (
        <path
          d="M3 12H7L10 5L14 19L17 12H21"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {mark === "ring" && (
        <>
          <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2.4" />
          <circle cx="12" cy="12" r="3" fill={color} />
        </>
      )}
      {mark === "peak" && (
        <path d="M3 19L12 5L21 19H3Z" fill={color} />
      )}
      {mark === "arch" && (
        <path
          d="M5 19V11C5 7.13 8.13 4 12 4C15.87 4 19 7.13 19 11V19H15V11C15 9.34 13.66 8 12 8C10.34 8 9 9.34 9 11V19H5Z"
          fill={color}
        />
      )}
      {mark === "wave" && (
        <path
          d="M3 14C5.5 9 8.5 9 11 14C13.5 19 16.5 19 21 10"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      )}
      {mark === "prism" && (
        <polygon points="12,3 21,12 12,21 3,12" fill={color} />
      )}
      {mark === "frame" && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" stroke={color} strokeWidth="2.2" />
          <rect x="9" y="9" width="6" height="6" rx="1" fill={color} />
        </>
      )}
      {mark === "grid" && (
        <>
          <rect x="4" y="4" width="7" height="7" rx="1.5" fill={color} />
          <rect x="13" y="4" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.4" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.4" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" fill={color} />
        </>
      )}
      {mark === "spark" && (
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill={color}
        />
      )}
      {mark === "dot" && (
        <>
          <circle cx="8" cy="12" r="4.5" fill={color} />
          <circle cx="16.5" cy="12" r="4.5" fill={color} fillOpacity="0.4" />
        </>
      )}
    </svg>
  );
}

function LogoPlate({ item }: { item: ClientLogoItem }) {
  return (
    <div
      tabIndex={0}
      className={cn(
        "group/plate relative flex h-[96px] w-[228px] shrink-0 flex-col items-center justify-center rounded-[18px]",
        "border border-[#111111]/[0.07] bg-[#FAF9F7] px-5 select-none",
        "transition-[background-color,border-color,box-shadow,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-[2px] hover:border-[#111111]/15 hover:bg-white hover:shadow-[0_14px_32px_rgba(17,17,17,0.07)]",
        "focus-visible:-translate-y-[2px] focus-visible:border-[#F24E1E] focus-visible:bg-white"
      )}
    >
      {/* Logo Mark + Wordmark: colorless monochrome at rest, full brand color on hover */}
      <div
        className={cn(
          "flex items-center gap-2.5 grayscale opacity-55",
          "transition-[filter,opacity,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover/plate:-translate-y-2.5 group-hover/plate:grayscale-0 group-hover/plate:opacity-100",
          "group-focus-visible/plate:-translate-y-2.5 group-focus-visible/plate:grayscale-0 group-focus-visible/plate:opacity-100"
        )}
      >
        {item.logoSrc ? (
          <img
            src={item.logoSrc}
            alt={item.name}
            width={132}
            height={32}
            loading="lazy"
            decoding="async"
            className="h-7 w-auto max-w-[140px] object-contain"
          />
        ) : (
          <>
            <BrandMarkSvg mark={item.mark} color={item.accentColor} />
            <span className="text-[16px] font-semibold tracking-[-0.025em] text-[#111111] whitespace-nowrap">
              {item.name}
            </span>
          </>
        )}
      </div>

      {/* Hover Pill showing what Intent Studios built for this brand */}
      <span
        className={cn(
          "pointer-events-none absolute bottom-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap",
          "border border-[#111111]/10 bg-[#F7F4F1] text-[#111111]",
          "opacity-0 translate-y-1.5 transition-[opacity,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover/plate:opacity-100 group-hover/plate:translate-y-0",
          "group-focus-visible/plate:opacity-100 group-focus-visible/plate:translate-y-0"
        )}
      >
        <span
          className="h-1.5 w-1.5 rounded-full shrink-0"
          style={{ backgroundColor: item.accentColor }}
          aria-hidden="true"
        />
        {item.servicePill}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: ClientLogoItem[];
  direction: "left" | "right";
}) {
  // Duplicate array twice so CSS translateX(-50%) loops seamlessly
  const loopItems = [...items, ...items];

  return (
    <div className="group/row flex overflow-hidden">
      <div
        className={cn(
          "flex w-max items-center gap-4 py-1 will-change-transform",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          "group-hover/row:[animation-play-state:paused]"
        )}
      >
        {loopItems.map((item, idx) => (
          <LogoPlate key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function LogoMarqueeSection() {
  return (
    <section
      aria-label="Brands we partner with"
      className="relative overflow-hidden bg-[#FFFFFF] py-14 sm:py-16"
    >
      <div className="intent-container mb-8 text-center">
        <p className="text-[13px] font-medium text-[#52504C]">
          Built for ambitious teams across web, product, brand &amp; content
        </p>
      </div>

      {/* Taffy-style dual-row marquee with soft horizontal edge fade mask */}
      <div
        className="mx-auto max-w-[1440px] space-y-4"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        }}
      >
        <MarqueeRow items={LOGO_ROW_ONE} direction="left" />
        <MarqueeRow items={LOGO_ROW_TWO} direction="right" />
      </div>
    </section>
  );
}
