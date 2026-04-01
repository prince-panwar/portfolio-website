import { useEffect, useRef } from "react";

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * maxTilt;
      const rotateY = (x - 0.5) * maxTilt;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };

    const handleMouseEnter = () => {
      el.style.transition = "transform 0.1s ease-out";
    };

    const handleMouseLeave = () => {
      el.style.transition = "transform 0.4s ease-out";
      el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return ref;
}
