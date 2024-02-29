import React, { useState } from "react";
import "./hamburgerIcon3.css";

interface HamburgerIcon3Props {
  spanAmount: number;
  type?: number;
}

export const HamburgerIcon3 = ({
  spanAmount,
  type = 1,
}: HamburgerIcon3Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      onClick={handleClick}
      className={[`${isActive ? "is-active" : ""}`].join(" ")}
      id={`${"hamburger-icon3-" + type}`}
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

export default HamburgerIcon3;
