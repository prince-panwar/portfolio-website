"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorSpotlight() {
  const [hasHover, setHasHover] = useState(false);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    // Only show on devices with hover capability
    const canHover = window.matchMedia("(hover: hover)").matches;
    setHasHover(canHover);
    if (!canHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!hasHover) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed z-[1] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)]"
    />
  );
}
