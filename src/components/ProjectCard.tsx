import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-ink-line bg-ink-surface p-6 transition-colors duration-300 hover:border-amber/40"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x,50%) var(--y,0%), rgba(232,163,61,0.08), transparent 60%)",
          }}
        />

        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-teal-bright">{project.category}</span>
            <span className="font-mono text-xs text-paper-faint">{project.year}</span>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-paper transition-colors group-hover:text-amber">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-paper-muted">{project.summary}</p>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-ink-line px-2.5 py-1 font-mono text-[11px] text-paper-muted"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="relative mt-5 flex items-center text-sm font-medium text-paper">
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Read the case study
          </span>
          <svg
            className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
