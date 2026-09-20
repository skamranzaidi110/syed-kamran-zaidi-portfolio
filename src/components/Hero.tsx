import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const STATS = [
  { value: "15+", label: "years in enterprise BI & Oracle ERP" },
  { value: "3", label: "certifications — Power BI, Excel, SQL" },
  { value: "Karachi", label: "Pakistan, working with global teams" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92svh] overflow-hidden bg-ink pt-28">
      <motion.div
        style={{ y: gridY }}
        className="grid-texture pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,black,transparent)]"
        aria-hidden
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-amber/10 blur-[110px]"
        aria-hidden
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-20 top-40 h-[22rem] w-[22rem] rounded-full bg-teal/20 blur-[120px]"
        aria-hidden
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell relative flex flex-col gap-10 pb-24 pt-10"
      >
        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-paper-muted sm:text-[13px]"
        >
          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
          <span>Data &amp; Business Intelligence Analyst</span>
          <span className="text-paper-faint">·</span>
          <span>Data Scientist</span>
          <span className="text-paper-faint">·</span>
          <span>Web &amp; Shopify Developer</span>
          <span className="text-paper-faint">·</span>
          <span>Oracle Developer &amp; Application Support Engineer</span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.h1 variants={item} className="font-display text-display-xl font-semibold text-paper">
            I turn scattered
            <br />
            enterprise data into
            <br />
            <span className="text-amber">decisions people trust.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-prose font-body text-lg leading-relaxed text-paper-muted">
            Syed Kamran Zaidi — fifteen years spanning Power BI dashboards, Oracle ERP
            support, and the database work most reports never mention. I build the
            pipeline underneath the dashboard, not just the dashboard.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-lg bg-amber px-5 py-3 font-body text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-ink-line px-5 py-3 font-body text-sm font-medium text-paper transition-colors hover:border-paper-muted"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>

        <motion.dl variants={item} className="mt-6 grid grid-cols-1 gap-6 border-t border-ink-line pt-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-semibold text-paper">{stat.value}</dt>
              <dd className="mt-1 max-w-[22ch] font-body text-sm text-paper-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
