import React from "react";

export default function Card({
  width,
  height,
  additionalStyles,
  children,
  className,
}) {
  return (
    <div
      className={`card ${className ? className : ""}`}
      style={{ width: width, height: height, ...additionalStyles }}
    >
      {children}
    </div>
  );
}
