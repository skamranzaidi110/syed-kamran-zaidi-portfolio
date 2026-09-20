import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryItem = {
  id: string;
  caption: string;
  render: () => JSX.Element;
};

export default function Lightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group overflow-hidden rounded-lg border border-ink-line bg-ink-raised text-left transition-colors hover:border-amber/40"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">{item.render()}</div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="font-body text-xs text-paper-muted">{item.caption}</span>
              <span className="font-mono text-[11px] text-paper-faint transition-transform group-hover:translate-x-0.5">
                Enlarge →
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-ink-line bg-ink-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] w-full">{items[activeIndex].render()}</div>
              <div className="flex items-center justify-between border-t border-ink-line px-5 py-4">
                <span className="font-body text-sm text-paper">{items[activeIndex].caption}</span>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="rounded-md border border-ink-line px-2.5 py-1 font-mono text-xs text-paper-muted hover:text-paper"
                  aria-label="Close"
                >
                  Esc
                </button>
              </div>

              <button
                onClick={() => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length))}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-ink-line bg-ink/70 p-2 text-paper hover:bg-ink"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={() => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length))}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-ink-line bg-ink/70 p-2 text-paper hover:bg-ink"
                aria-label="Next image"
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
