import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";

const links = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-neon-2 shadow-[0_0_30px_-6px_var(--neon)]">
            <GiWeightLiftingUp className="text-xl text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            IRON<span className="text-primary">PULSE</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative story-link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#pricing" className="btn-neon btn-neon-hover text-sm">
            Join Now
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg glass"
          onClick={() => setOpen(true)}
        >
          <FiMenu className="text-xl" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-card border-l border-white/10 p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold">Menu</span>
                <button
                  aria-label="Close menu"
                  className="grid place-items-center h-10 w-10 rounded-lg glass"
                  onClick={() => setOpen(false)}
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-3 rounded-lg hover:bg-white/5 text-base"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="btn-neon btn-neon-hover w-full mt-6"
              >
                Join Now
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
