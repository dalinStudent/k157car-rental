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
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[90%] sm:w-[500px] md:w-[600px] h-[200px] sm:h-[300px] mx-auto"
      style={{
        perspective: 800,
      }}
      // style={{
      //   perspective: 800,
      //   width: 600,
      //   height: 300,
      //   margin: "auto",
      // }}
    >
      <img
        src="/images/mg-brand.png"
        alt="Car"
        className="w-full h-full object-contain pointer-events-none select-none"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   objectFit: "contain",
        //   transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        //   transition: "transform 0.1s ease-out",
        //   transformStyle: "preserve-3d",
        //   userSelect: "none",
        //   pointerEvents: "none",
        // }}
      />
    </div>
  );
};
