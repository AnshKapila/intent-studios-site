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
      width="24"
      height="24"
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
        <path d="M5 19C5 10.5 10.5 5 19 5C19 13.5 13.5 19 5 19Z" fill={color} />
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
      {mark === "peak" && <path d="M3 19L12 5L21 19H3Z" fill={color} />}
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
      {mark === "prism" && <polygon points="12,3 21,12 12,21 3,12" fill={color} />}
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

/**
 * Exact Taffy ticker item:
 * - Zero card/box/border/background around the logo (bare on #FFFFFF)
 * - 44px top padding reserved for floating glossy dark tooltip pill ABOVE the logo
 * - Logo plate: 200px × 72px transparent hit zone with 160px × 32px logo inside
 * - Rest: grayscale + opacity 0.45 -> Hover: full brand color + opacity 1 + glossy pill above
 */
function BareLogoItem({ item }: { item: ClientLogoItem }) {
  return (
    <li
      tabIndex={0}
      className="group/logo relative flex w-[200px] shrink-0 flex-col items-center pt-[44px] cursor-default select-none focus-visible:outline-2 focus-visible:outline-[#F24E1E] rounded-[12px]"
    >
      {/* Floating Tooltip Anchor — positioned directly ABOVE the logo (Taffy exact geometry) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[-60px] right-[-60px] z-20 flex h-[32px] items-center justify-center overflow-visible"
      >
        <div
          className={cn(
            "inline-flex h-[32px] items-center gap-[7px] rounded-full border border-[#0A0A0A] pl-[4px] pr-[12px]",
            "opacity-0 translate-y-[14px] scale-[0.96]",
            "transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover/logo:opacity-100 group-hover/logo:translate-y-[8px] group-hover/logo:scale-100",
            "group-focus-visible/logo:opacity-100 group-focus-visible/logo:translate-y-[8px] group-focus-visible/logo:scale-100"
          )}
          style={{
            background: "linear-gradient(rgb(44, 44, 44) 0%, rgb(21, 21, 21) 100%)",
            boxShadow:
              "rgba(255, 255, 255, 0.16) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(0, 0, 0, 0.4) 0px 8px 16px -8px",
          }}
        >
          {/* 24×24 circular indicator chip */}
          <span
            className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(#FF7043 0%, #F24E1E 100%)",
              boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px 0px inset",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1.5L9 8.5H1L5 1.5Z" fill="#FFFFFF" />
            </svg>
          </span>
          <span className="whitespace-nowrap text-[13px] font-medium leading-none tracking-[-0.01em] text-white">
            {item.servicePill}
          </span>
        </div>
      </div>

      {/* Bare transparent hit plate (200px × 72px, zero border/background) */}
      <div className="flex h-[72px] w-[200px] items-center justify-center px-[20px]">
        <div
          className={cn(
            "flex h-[32px] w-[160px] items-center justify-center gap-2.5",
            "grayscale opacity-[0.45]",
            "transition-[filter,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover/logo:grayscale-0 group-hover/logo:opacity-100",
            "group-focus-visible/logo:grayscale-0 group-focus-visible/logo:opacity-100"
          )}
        >
          {item.logoSrc ? (
            <img
              src={item.logoSrc}
              alt={item.name}
              width={160}
              height={32}
              loading="lazy"
              decoding="async"
              className="h-[32px] w-auto max-w-[160px] object-contain"
            />
          ) : (
            <>
              <BrandMarkSvg mark={item.mark} color={item.accentColor} />
              <span className="text-[17px] font-semibold tracking-[-0.025em] text-[#111111] dark:text-[#F5F5F5] whitespace-nowrap">
                {item.name}
              </span>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: ClientLogoItem[];
  direction: "left" | "right";
}) {
  const loopItems = [...items, ...items];

  return (
    <div
      className="group/row relative flex h-[116px] w-full overflow-x-clip"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)",
      }}
    >
      <ul
        className={cn(
          "m-0 flex w-max list-none items-end gap-[16px] p-0 will-change-transform",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          "group-hover/row:[animation-play-state:paused]"
        )}
      >
        {loopItems.map((item, idx) => (
          <BareLogoItem key={`${item.id}-${idx}`} item={item} />
        ))}
      </ul>
    </div>
  );
}

export function LogoMarqueeSection() {
  return (
    <section
      aria-label="Brands we partner with"
      className="relative overflow-x-clip bg-white dark:bg-[#111111] px-6 pt-12 pb-20 sm:px-8 lg:px-12 lg:pb-24 transition-colors duration-200"
    >
      <div className="mx-auto flex w-full max-w-[1520px] flex-col items-center gap-0">
        <MarqueeRow items={LOGO_ROW_ONE} direction="left" />
        <MarqueeRow items={LOGO_ROW_TWO} direction="right" />
      </div>
    </section>
  );
}
