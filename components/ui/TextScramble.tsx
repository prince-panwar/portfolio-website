"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}[]<>/=+";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextScramble({ text, className, delay = 1200 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let resolved = 0;
    const length = text.length;

    // Start fully scrambled
    setDisplayed(
      text
        .split("")
        .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join("")
    );

    const interval = setInterval(() => {
      resolved++;

      if (resolved > length) {
        clearInterval(interval);
        setDisplayed(text);
        return;
      }

      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
    }, 50);

    return () => clearInterval(interval);
  }, [started, text]);

  return <span className={className}>{displayed}</span>;
}
