import React, { useState } from "react";

export const CarHoverRotate = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside container
    const y = e.clientY - rect.top;  // mouse Y inside container

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degrees (max 15 deg for example)
    const rotateY = ((x - centerX) / centerX) * 15; // rotate around Y axis (left-right)
    const rotateX = ((centerY - y) / centerY) * 15; // rotate around X axis (up-down)

    setRotation({ x: rotateX, y: rotateY });
  }

  function handleMouseLeave() {
    // Reset rotation on mouse leave
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,  // Important for 3D effect
        width: 400,
        height: 250,
        margin: "auto",
      }}
    >
      <img
        src="/your-car-image.jpg"
        alt="Car"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          userSelect: "none",
          pointerEvents: "none", // so mouse events go to container
        }}
      />
    </div>
  );
}
