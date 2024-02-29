import React, { useState } from "react";
import "./templateName.css";

interface TemplateNameProps {
  type?: number;
}

export const TemplateName = ({ type = 1 }: TemplateNameProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      onClick={handleClick}
      className={["container", `${isActive ? "is-active" : ""}`].join(" ")}
      id={`${"template-" + type}`}
    ></div>
  );
};

export default TemplateName;
