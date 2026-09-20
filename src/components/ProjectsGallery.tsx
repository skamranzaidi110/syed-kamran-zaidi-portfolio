import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

const FILTERS: Array<"All" | Project["category"]> = [
  "All",
  "Power BI",
  "Data Analysis",
  "Machine Learning",
];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="scroll-mt-24 border-t border-ink-line bg-ink py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs text-amber">Selected work</span>
            <h2 className="mt-3 max-w-xl font-display text-display-md font-semibold text-paper">
              Analysis built to change a decision, not just describe one.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-body text-xs font-medium transition-colors",
                  filter === f
                    ? "border-amber/50 bg-amber/10 text-amber"
                    : "border-ink-line text-paper-muted hover:text-paper"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
