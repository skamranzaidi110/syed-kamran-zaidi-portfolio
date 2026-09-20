export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink py-10">
      <div className="section-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-paper-faint">
          © {new Date().getFullYear()} Syed Kamran Zaidi. Built with React, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex gap-5 font-mono text-xs text-paper-faint">
          <a href="mailto:skzaidi313@gmail.com" className="hover:text-paper">Email</a>
          <a href="https://linkedin.com/in/s-kamran-a-zaidi" target="_blank" rel="noreferrer" className="hover:text-paper">LinkedIn</a>
          <a href="https://github.com/skamranzaidi110" target="_blank" rel="noreferrer" className="hover:text-paper">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
