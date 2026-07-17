import React from "react";
import { styled } from "../../../../stitches.config";
import ChromeIcon from "../../../assets/icons/ChromeIcon";
import { EXTENSION_URL } from "./constants";

const ButtonStyle = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "15px 26px",
  color: "#fff",
  background: "linear-gradient(135deg, #7C5CFC 0%, #5B3DF5 100%)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "50px",
  fontWeight: 600,
  fontSize: "16px",
  textDecoration: "none",
  boxShadow: "0 10px 28px -10px rgba(91,61,245,0.7)",
  transition: "transform .2s ease, box-shadow .2s ease, background .2s ease",
  whiteSpace: "nowrap",

  "@xs": {
    width: "100%",
  },

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 16px 36px -10px rgba(91,61,245,0.9)",
    background: "linear-gradient(135deg, #8A6BFF 0%, #6947FF 100%)",
  },

  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0 8px 20px -10px rgba(91,61,245,0.7)",
  },

  variants: {
    size: {
      md: {
        padding: "12px 22px",
        fontSize: "14px",
      },
      lg: {
        padding: "15px 26px",
        fontSize: "16px",
      },
    },
  },

  defaultVariants: {
    size: "lg",
  },
});

const Free = styled("span", {
  opacity: 0.75,
  fontWeight: 500,
});

interface ExtensionButtonProps {
  size?: "md" | "lg";
}

const ExtensionButton = ({ size = "lg" }: ExtensionButtonProps) => {
  return (
    <ButtonStyle href={EXTENSION_URL} target="_blank" rel="noreferrer" size={size}>
      <ChromeIcon size={size === "lg" ? 20 : 17} />
      <span>
        Add to Chrome<Free> — It's free</Free>
      </span>
    </ButtonStyle>
  );
};

export default ExtensionButton;
