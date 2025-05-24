import React, { useState } from "react";

export const CarHoverRotate = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;

    setRotation({ x: rotateX, y: rotateY });
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
        width: 600,
        height: 300,
        margin: "auto",
      }}
    >
      <img
        src="/images/mg-brand.png"
        alt="Car"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
