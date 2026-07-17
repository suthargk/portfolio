"use client";

import { motion } from "motion/react";
import { SparkleIcon } from "./icons";

const sparkles = [
  { top: "-6px", left: "-4px", size: 7, duration: 1.8, delay: 0 },
  { top: "-2px", right: "6px", size: 5, duration: 2.2, delay: 0.6 },
  { bottom: "-5px", left: "40%", size: 6, duration: 2, delay: 1.1 },
];

export function NewBadge() {
  return (
    <span className="relative inline-flex">
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute z-10 text-accent-400 dark:text-accent-300"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4], rotate: [0, 45] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        >
          <SparkleIcon style={{ width: s.size, height: s.size }} />
        </motion.span>
      ))}

      <span className="relative inline-flex items-center gap-1 overflow-hidden rounded-full bg-accent-500 px-2 py-0.5 text-xs font-medium text-white">
        <span className="relative z-10">New</span>
        <motion.span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/60 blur-[1px]"
          animate={{ x: ["-150%", "350%"] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      </span>
    </span>
  );
}
