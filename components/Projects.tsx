import { siteConfig } from "@/content/site";
import { ProjectGallery } from "@/components/ProjectGallery";
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
              className="overflow-hidden rounded-lg border border-warm-200 bg-white shadow-sm"
            >
              <ProjectGallery images={project.images} title={project.title} />
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
