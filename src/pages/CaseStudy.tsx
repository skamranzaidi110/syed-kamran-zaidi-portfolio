import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug, projects } from "@/data/projects";
import Lightbox, { type GalleryItem } from "@/components/Lightbox";
import { BarMock, LineMock, KpiMock, TableMock, ScatterMock } from "@/components/ChartMocks";

const GALLERY_BY_CATEGORY: Record<string, GalleryItem[]> = {
  "Power BI": [
    { id: "kpi", caption: "KPI summary tiles", render: () => <KpiMock /> },
    { id: "line", caption: "Trend over time", render: () => <LineMock /> },
  ],
  "Data Analysis": [
    { id: "table", caption: "Cleaned output table", render: () => <TableMock /> },
    { id: "bar", caption: "Category comparison", render: () => <BarMock /> },
  ],
  "Machine Learning": [
    { id: "scatter", caption: "Predicted vs. actual", render: () => <ScatterMock /> },
    { id: "line2", caption: "Error across match phase", render: () => <LineMock accent="#E8A33D" /> },
  ],
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const gallery = GALLERY_BY_CATEGORY[project.category] ?? [];
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-ink pb-24 pt-28">
      <div className="section-shell">
        <Link to="/#work" className="inline-flex items-center gap-1.5 font-mono text-xs text-paper-muted hover:text-paper">
          ← Back to work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-teal-bright">
            <span>{project.category}</span>
            <span className="text-paper-faint">·</span>
            <span className="text-paper-faint">{project.year}</span>
          </div>
          <h1 className="mt-4 font-display text-display-lg font-semibold text-paper">{project.title}</h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-paper-muted">{project.summary}</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] text-paper-muted">
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 border-y border-ink-line py-8 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-2xl font-semibold text-paper">{m.value}</div>
              <div className="mt-1 font-mono text-[11px] text-paper-faint">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-lg font-semibold text-paper">Overview</h2>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-paper-muted">{project.overview}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-paper">Approach</h2>
              <ul className="mt-3 space-y-3">
                {project.approach.map((step, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-paper-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-paper">Outcome</h2>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-paper-muted">{project.outcome}</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-paper">Report views</h2>
            <p className="mt-2 text-sm text-paper-faint">
              Illustrative mockups of this project's output — swap for real exports when available.
            </p>
            <div className="mt-5">
              <Lightbox items={gallery} />
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-ink-line pt-8">
          <span className="font-mono text-xs text-paper-faint">Next case study</span>
          <Link
            to={`/work/${next.slug}`}
            className="group flex items-center gap-2 font-display text-lg font-semibold text-paper transition-colors hover:text-amber"
          >
            {next.title}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
