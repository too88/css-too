import React, { useState } from "react";
import "./hamburgerIcon.css";

interface HamburgerIconProps {
  type?: number;
}

export const HamburgerIcon = ({ type = 1 }: HamburgerIconProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      onClick={handleClick}
      className={["hamburger", `${isActive ? "is-active" : ""}`].join(" ")}
      id={`${"hamburger-" + type}`}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default HamburgerIcon;
