import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Power BI & Business Intelligence",
    accent: "amber",
    skills: ["Power BI Desktop & Service", "DAX", "Power Query (M)", "Data Modeling", "KPI Scorecards", "Report Automation", "Tableau"],
  },
  {
    title: "Advanced Excel & Automation",
    accent: "teal",
    skills: ["VLOOKUP / INDEX-MATCH", "SUMIFS", "Pivot Tables", "VBA Macros", "Data Validation", "Executive Dashboards"],
  },
  {
    title: "Data Analysis",
    accent: "amber",
    skills: ["Data Cleaning", "EDA", "Trend & Variance Analysis", "Statistical Analysis", "SQL"],
  },
  {
    title: "Oracle ERP & Database",
    accent: "teal",
    skills: ["Oracle 9i / 10g / 11g", "L1 / L2 Support", "Financials · SCM · MFG", "Performance Tuning", "Patch & Upgrade Deployment", "Master Data Management"],
  },
  {
    title: "Data Science & AI-Augmented Dev",
    accent: "amber",
    skills: ["Python (Pandas, NumPy, Scikit-Learn)", "Predictive Modeling", "Claude", "GitHub Copilot", "ChatGPT"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-ink-line bg-ink py-24">
      <div className="section-shell">
        <span className="font-mono text-xs text-amber">Capabilities</span>
        <h2 className="mt-3 max-w-xl font-display text-display-md font-semibold text-paper">
          Five areas, one habit: validate before it ships.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => (
            <div key={group.title}>
              <h3 className="font-display text-sm font-semibold text-paper">{group.title}</h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: gi * 0.03 + i * 0.025 }}
                    className={
                      group.accent === "amber"
                        ? "rounded-md border border-amber/25 bg-amber/[0.06] px-3 py-1.5 font-body text-sm text-paper/90"
                        : "rounded-md border border-teal/30 bg-teal/[0.08] px-3 py-1.5 font-body text-sm text-paper/90"
                    }
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
