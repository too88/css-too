import React, { useState } from "react";
import "./hamburgerIcon2.css";

interface HamburgerIcon2Props {
  type: number;
  dTop?: string;
  dMiddle?: string;
  dBottom?: string;
  isRotate?: boolean;
}

export const HamburgerIcon2 = ({
  isRotate = false,
  type,
  dTop,
  dMiddle,
  dBottom,
}: HamburgerIcon2Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <svg
      className={[
        "ham",
        `${"ham" + type}`,
        `${isRotate ? "hamRotate" : ""}`,
        `${isActive ? "is-active" : ""}`,
      ].join(" ")}
      viewBox="0 0 100 100"
      width="80"
      onClick={handleClick}
    >
      <path className="line top" d={dTop} />
      <path className="line middle" d={dMiddle} />
      <path className="line bottom" d={dBottom} />
    </svg>
  );
};

export default HamburgerIcon2;
