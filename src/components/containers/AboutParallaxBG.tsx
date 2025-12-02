"use client";

import { useEffect, useState } from "react";

/**
 * AboutParallaxBG
 * ----------------
 * ✅ Appears ONLY after banner
 * ✅ No black background clash
 * ✅ Scroll-synced with Agency section
 * ✅ No clip-path jump
 */
const AboutParallaxBG = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const trigger = document.querySelector(".about-trigger") as HTMLElement | null;
    if (!trigger) return;

    const onScroll = () => {
      const rect = trigger.getBoundingClientRect();
      const vh = window.innerHeight;

      // ✅ activate ONLY when Agency enters viewport
      setActive(rect.top <= vh && rect.bottom >= 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",

        // ✅ this is the magic fix
        opacity: active ? 1 : 0,
        transition: "opacity 0.4s ease",

        background: `
          radial-gradient(circle at 30% 30%, #2a2a2a 0%, #000 60%),
          radial-gradient(circle at 70% 70%, #1a1a1a 0%, #000 55%),
          linear-gradient(to bottom, #0b0b0b, #000)
        `,
      }}
    />
  );
};

export default AboutParallaxBG;
