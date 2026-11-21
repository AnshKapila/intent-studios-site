import type { ProjectCaseStudy } from "@/data/projects";
import { getProjectPhoto } from "@/data/media";
import { cn } from "@/lib/utils";

interface ProjectVisualFrameProps {
  project: ProjectCaseStudy;
  aspect?: "wide" | "square" | "tall";
  priority?: boolean;
  className?: string;
}

/**
 * Full-bleed photographic project frame using locally optimized WebP assets.
 * No captions, no skeleton wireframes, no visible placeholder labels.
 */
export function ProjectVisualFrame({
  project,
  aspect = "wide",
  priority = false,
  className,
}: ProjectVisualFrameProps) {
  const photo = getProjectPhoto(project.slug);

  const aspectClass =
    aspect === "square"
      ? "aspect-[4/3]"
      : aspect === "tall"
        ? "aspect-[4/5]"
        : "aspect-[16/10]";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[12px] bg-[#0A0A0A]",
        aspectClass,
        className
      )}
    >
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={aspect === "wide" ? "(max-width: 1023px) 100vw, 80vw" : "(max-width: 767px) 100vw, 45vw"}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        data-source={photo.source}
        data-subject={photo.subject}
        style={{ objectPosition: photo.objectPosition || "50% 50%" }}
        className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]"
      />
    </div>
  );
}
