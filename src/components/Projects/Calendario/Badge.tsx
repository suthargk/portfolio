import React from "react";
import { styled } from "../../../../stitches.config";

const BadgeStyle = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
  padding: "7px 16px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 600,
  color: "rgba(255,255,255,0.85)",
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  whiteSpace: "nowrap",
});

interface BadgeProps {
  icon?: string;
  children: React.ReactNode;
}

const Badge = ({ icon, children }: BadgeProps) => {
  return (
    <BadgeStyle>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </BadgeStyle>
  );
};

export default Badge;
