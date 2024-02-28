import React from "react";
import "./hamburgerIcon.css";

interface HamburgerIconProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}

export const HamburgerIcon = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: HamburgerIconProps) => {
  const mode = primary
    ? "styles-too-hamburgerIcon--primary"
    : "styles-too-hamburgerIcon--secondary";

  return (
    <button
      type="button"
      className={["styles-too-button", `styles-too-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default HamburgerIcon;
