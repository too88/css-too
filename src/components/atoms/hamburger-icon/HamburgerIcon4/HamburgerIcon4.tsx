import React, { useState } from "react";
import "./hamburgerIcon4.css";

interface HamburgerIcon4Props {
  spanAmount: number;
  type?: number;
}

export const HamburgerIcon4 = ({
  spanAmount,
  type = 1,
}: HamburgerIcon4Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      onClick={handleClick}
      className={["icon", `${isActive ? "is-active" : ""}`, `${"hamburger-icon4-" + type}`].join(" ")}
    >
      {(() => {
        let span = [];
        for (let i = 1; i <= spanAmount; i++) {
          span.push(<span key={i}></span>);
        }
        return span;
      })()}
    </div>
  );
};

export default HamburgerIcon4;
