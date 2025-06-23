import React, { useState } from "react";
import Image from "next/image";

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
    className="relative w-[90%] sm:w-[500px] md:w-[600px] h-[200px] sm:h-[300px] mx-auto"
    style={{ perspective: 800 }}
  >
    <Image
      src="/images/mg-brand.png"
      alt="Car"
      fill
      priority
      className="object-contain pointer-events-none select-none"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
    />
  </div>
  
  );
};
