import React from "react";
import "./templateName.css";

interface TemplateNameProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}

export const TemplateName = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: TemplateNameProps) => {
  const mode = primary
    ? "styles-too-templateName--primary"
    : "styles-too-templateName--secondary";

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

export default TemplateName;
