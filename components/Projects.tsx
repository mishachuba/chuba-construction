import Image from "next/image";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-warm-100 py-16 sm:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-heading"
          title={siteConfig.projects.heading}
          subtitle={siteConfig.projects.subheading}
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {siteConfig.projects.items.map((project) => (
            <figure
              key={project.title}
              className="group overflow-hidden rounded-lg border border-warm-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-3 py-2 text-center text-xs font-medium text-warm-700 sm:text-sm">
                {project.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
