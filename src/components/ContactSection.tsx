import ContactForm from "./ContactForm";

const CHANNELS = [
  { label: "Email", value: "skzaidi313@gmail.com", href: "mailto:skzaidi313@gmail.com" },
  { label: "Phone", value: "+92 324 2744563", href: "tel:+923242744563" },
  { label: "LinkedIn", value: "linkedin.com/in/s-kamran-a-zaidi", href: "https://linkedin.com/in/s-kamran-a-zaidi" },
  { label: "GitHub", value: "github.com/skamranzaidi110", href: "https://github.com/skamranzaidi110" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink-line bg-ink-surface/40 py-24">
      <div className="section-shell grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-mono text-xs text-amber">Contact</span>
          <h2 className="mt-3 font-display text-display-md font-semibold text-paper">
            Have a dataset that should be telling you more?
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-muted">
            Whether it's a Power BI build, an Oracle ERP issue, or a report that's
            stopped being trustworthy — tell me what you're seeing and I'll tell
            you what I think is happening.
          </p>

          <dl className="mt-9 space-y-4 border-t border-ink-line pt-6">
            {CHANNELS.map((c) => (
              <div key={c.label} className="flex items-baseline justify-between gap-4">
                <dt className="font-mono text-xs text-paper-faint">{c.label}</dt>
                <dd>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="font-body text-sm text-paper transition-colors hover:text-amber"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-mono text-xs text-paper-faint">Location</dt>
              <dd className="font-body text-sm text-paper">Karachi, Pakistan</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-ink-line bg-ink p-7 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
