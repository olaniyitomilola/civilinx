// useCarousel.js
import { useState, useEffect, useCallback } from "react";

export default function useCarousel(length, options = {}) {
  const {
    autoplay = false,
    delay = 8000, // ms
    enableKeyboard = true
  } = options;

  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (indexOrUpdater) => {
      setActiveIndex((prev) => {
        if (!length) return 0;

        let next =
          typeof indexOrUpdater === "function"
            ? indexOrUpdater(prev)
            : indexOrUpdater;

        if (next < 0) next = length - 1;
        if (next >= length) next = 0;

        return next;
      });
    },
    [length]
  );

  const goNext = useCallback(() => goTo((i) => i + 1), [goTo]);
  const goPrev = useCallback(() => goTo((i) => i - 1), [goTo]);

  // Keyboard controls
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [enableKeyboard, goNext, goPrev]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;

    const id = setInterval(() => {
      goNext();
    }, delay);

    return () => clearInterval(id);
  }, [autoplay, delay, goNext]);

  return { activeIndex, goTo, goNext, goPrev };
}
