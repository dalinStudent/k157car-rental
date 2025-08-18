"use client";

import Image from "next/image";
import { useState } from "react";

const carImages = {
  front: "/images/side/front-car.png",
  back: "/images/side/back-car.png",
  left: "/images/side/left-car.png",
  right: "/images/side/right-car.png",
  fullLeft: "/images/side/full-left.png",
  fullRight: "/images/side/full-right.png"
};

export default function CarViewer() {
  const [direction, setDirection] = useState<keyof typeof carImages>("front");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    if (Math.abs(dx) > Math.abs(dy)) {
      setDirection(dx > 0 ? "right" : "left");
    } else {
      setDirection(dy > 0 ? "back" : "front");
    }
  };

  return (
    <div
      className="w-[500px] h-[200px] relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setDirection("front")}
    >
      <Image
        src={carImages[direction]}
        alt={`${direction} view`}
        fill
        className="object-contain transition-all duration-300"
      />
    </div>
  );
}
