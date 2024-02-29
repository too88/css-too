import React, { useState } from "react";
import "./loaderIcon2.css";

interface LoaderIcon2Props {}

export const LoaderIcon2 = () => {
  return (
    <div className="loader-inner">
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default LoaderIcon2;
