"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { SunIcon, MoonIcon, SparkleIcon } from "./icons";

const emptySubscribe = () => () => {};

// Mirrors whether the component has hydrated on the client, without the
// cascading re-render that a `useState` + `useEffect` mount flag causes.
function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const stars: {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size: number;
  delay: number;
}[] = [
  { top: "7px", right: "6px", size: 5, delay: 0.35 },
  { bottom: "8px", left: "7px", size: 4, delay: 0.55 },
];

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
    >
      <AnimatePresence initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -100, scale: 0.3, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 100, scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute inline-flex items-center justify-center"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </motion.span>
        )}
      </AnimatePresence>

      {stars.map((star, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute text-accent-300 dark:text-accent-300"
          style={{ top: star.top, right: star.right, bottom: star.bottom, left: star.left }}
          initial={false}
          animate={
            isDark
              ? { opacity: [0, 1, 0], scale: [0.3, 1, 0.3] }
              : { opacity: 0, scale: 0.3 }
          }
          transition={
            isDark
              ? {
                  duration: 1.6,
                  delay: star.delay,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }
              : { duration: 0.2 }
          }
        >
          <SparkleIcon style={{ width: star.size, height: star.size }} />
        </motion.span>
      ))}
    </button>
  );
}
