import React from "react";
import { styled } from "../../../stitches.config";

const common = {
  content: "",
  display: "block",
  boxSizing: "border-box",
  position: "absolute",
  width: "24px",
  height: "2px",
  borderRight: "4px solid",
  borderLeft: "4px solid",
  left: "-6px",
  top: "5px",
};

const StyledSun = styled("i", {
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  transform: "scale(var(--ggs, 1))",
  width: "24px",
  height: "24px",
  background:
    "linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px -6px/2px 6px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px 14px/2px 6px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px 2px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px 5px/6px 2px",
  borderRadius: "100px",
  boxShadow: "inset 0 0 0 2px",
  border: "6px solid transparent",
  color: "$gray400",

  "&::after": {
    ...common,
    transform: "rotate(45deg)",
  },
  "&::before": {
    ...common,
    transform: "rotate(-45deg)",
  },
});

export const Sun = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSun {...props} ref={ref} icon-role="sun" />
    </>
  );
});
