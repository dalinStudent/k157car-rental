"use client";

import Image from "next/image";
import { useState } from "react";

const carOrder = [
  "front",
  "fullRight",
  "right",
  "back",
  "left",
  "fullLeft",
] as const;

type Direction = (typeof carOrder)[number];

const carImages: Record<Direction, string> = {
  front: "/images/side/front-car.png",
  back: "/images/side/back-car.png",
  left: "/images/side/left-car.png",
  right: "/images/side/right-car.png",
  fullLeft: "/images/side/full-left.png",
  fullRight: "/images/side/full-right.png",
};

export default function CarViewer() {
  const [direction, setDirection] = useState<Direction>("front");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
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

  // const [direction, setDirection] = useState<Direction>("front");

  const rotateLeft = () => {
    const currentIndex = carOrder.indexOf(direction);
    if (currentIndex === -1) return; // safety check
    const nextIndex = (currentIndex - 1 + carOrder.length) % carOrder.length;
    setDirection(carOrder[nextIndex]!);
  };

  const rotateRight = () => {
    const currentIndex = carOrder.indexOf(direction);
    if (currentIndex === -1) return; // safety check
    const nextIndex = (currentIndex + 1) % carOrder.length;
    setDirection(carOrder[nextIndex]!);
  };

  return (
    <div
      className="relative mb-4 w-full max-w-sm aspect-square"
      // onMouseMove={handleMouseMove}
      onMouseLeave={() => setDirection("front")}
    >
      <Image
        src={carImages[direction]}
        alt={`${direction} view`}
        fill
        className="object-contain transition-all duration-300"
      />
      <div className="flex gap-4">
        <button onClick={rotateLeft} aria-label="Rotate car view to the left">
          ⟵ View Left
        </button>
        <button onClick={rotateRight} aria-label="Rotate car view to the right">
          View Right ⟶
        </button>
      </div>
    </div>
  );
}
