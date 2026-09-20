import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work", hash: "#work" },
  { label: "About", hash: "#about" },
  { label: "Skills", hash: "#skills" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (hash: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + hash);
      return;
    }
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="section-shell">
        <nav
          className={cn(
            "flex items-center justify-between rounded-xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "border-ink-line/80 bg-ink-surface/70 shadow-[0_1px_0_0_rgba(230,233,239,0.06)]"
              : "border-transparent bg-ink-surface/20"
          )}
        >
          <Link
            to="/"
            className="font-display text-sm font-semibold tracking-tight text-paper"
            onClick={() => setOpen(false)}
          >
            Syed Kamran <span className="text-amber">Zaidi</span>
            <span className="ml-2 hidden text-xs font-normal text-paper-muted sm:inline">
              Power BI &amp; Data
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.hash}
                onClick={() => goToSection(link.hash)}
                className="rounded-md px-3 py-1.5 font-body text-sm text-paper-muted transition-colors hover:text-paper"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:skzaidi313@gmail.com"
              className="ml-2 rounded-md border border-amber/40 bg-amber/10 px-3.5 py-1.5 font-body text-sm font-medium text-amber transition-colors hover:bg-amber/20"
            >
              Get in touch
            </a>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-line text-paper md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-4 bg-paper transition-transform",
                  open && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-4 bg-paper transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-px w-4 bg-paper transition-transform",
                  open && "-translate-y-1.5 -rotate-45"
                )}
              />
            </span>
          </button>
        </nav>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-xl border border-ink-line bg-ink-surface/95 p-3 backdrop-blur-xl md:hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link.hash}
                onClick={() => goToSection(link.hash)}
                className="rounded-md px-3 py-2 text-left font-body text-sm text-paper-muted transition-colors hover:bg-ink-raised hover:text-paper"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
