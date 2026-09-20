import { motion } from "framer-motion";

const TIMELINE = [
  {
    period: "2002 – 2006",
    role: "System Engineer, Loom Data Monitoring",
    org: "Yunus Textile Mills",
    note: "Where the reporting instinct started — watching loom-floor data long before it reached a dashboard.",
  },
  {
    period: "2006 – 2011",
    role: "System Engineer & Jr. Oracle Developer",
    org: "INZ Technological Services",
    note: "First pass at Oracle development, building the database habits everything later relied on.",
  },
  {
    period: "2011 – 2019",
    role: "Team Lead / IT Officer",
    org: "M.M. Associates · Zaman Textile Mills",
    note: "HR systems, data-center administration, and ERP support across two very different operations.",
  },
  {
    period: "2019 – Present",
    role: "Data Analyst · Power BI Developer · Oracle Support Engineer",
    org: "INZ Technological Services",
    note: "The current role — dashboards and DAX by day, Oracle 11g and ERP support the rest of the time.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-ink-line bg-ink-surface/40 py-24">
      <div className="section-shell grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="font-mono text-xs text-amber">About</span>
          <h2 className="mt-3 font-display text-display-md font-semibold text-paper">
            I came up through the systems most dashboards sit on top of.
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-paper-muted">
            <p>
              I started on the loom floor of a textile mill, monitoring production
              data before it ever became a report. That's shaped how I think about
              analytics ever since: a dashboard is only as trustworthy as the
              database underneath it, and I've spent most of my career keeping
              that connection honest.
            </p>
            <p>
              Today, most of my week splits between two things that sound
              unrelated but rarely are — designing Power BI dashboards and DAX
              models for business teams, and keeping the Oracle ERP systems those
              numbers come from actually running: troubleshooting, patching,
              backups, master data.
            </p>
            <p>
              I've also folded AI tools like Claude, GitHub Copilot, and ChatGPT
              into that workflow — not to skip the thinking, but to move faster
              through DAX, SQL, and VBA drafts that I still review and validate
              line by line before anything ships.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-line pt-6 font-mono text-xs text-paper-faint">
            <span>B.Com — University of Karachi</span>
            <span>OCA, Developer Track — 2009</span>
            <span>Based in Karachi, Pakistan</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[9px] top-2 w-px bg-ink-line" aria-hidden />
          <ol className="space-y-10">
            {TIMELINE.map((step, i) => (
              <motion.li
                key={step.period}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 h-[19px] w-[19px] rounded-full border-2 border-ink-surface bg-teal ring-2 ring-teal/30" />
                <span className="font-mono text-xs text-paper-faint">{step.period}</span>
                <h3 className="mt-1 font-display text-base font-semibold text-paper">{step.role}</h3>
                <p className="text-sm text-amber/90">{step.org}</p>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-paper-muted">{step.note}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
