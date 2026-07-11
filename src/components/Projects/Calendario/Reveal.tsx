import React from "react";
import { styled } from "../../../../stitches.config";
import { useInView } from "./useInView";

const Box = styled("div", {
  opacity: 0,
  transform: "translateY(28px)",
  transition:
    "opacity 0.7s cubic-bezier(0.16,0.84,0.44,1), transform 0.7s cubic-bezier(0.16,0.84,0.44,1)",
  willChange: "opacity, transform",

  "&[data-visible='true']": {
    opacity: 1,
    transform: "translateY(0)",
  },

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    opacity: 1,
    transform: "none",
  },
});

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const { ref, inView } = useInView();

  return (
    <Box
      ref={ref}
      data-visible={inView}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Box>
  );
};

export default Reveal;
