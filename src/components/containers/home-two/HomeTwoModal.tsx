"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import grp from "public/images/para1.jpg";

const HomeTwoModal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const offerSection = document.querySelector(".offer-two");
    if (!offerSection) return;

    const handleScroll = () => {
      const rect = offerSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // ✅ Calculate progress: 0 when section bottom touches screen bottom, 1 when fully in view
      if (rect.bottom > windowHeight) {
        // Section hasn't entered yet
        setScrollProgress(0);
      } else if (rect.top > 0) {
        // Section is entering/in view
        const progress = (windowHeight - rect.top) / windowHeight;
        setScrollProgress(Math.min(progress, 1));
      } else {
        // Section is fully scrolled past
        setScrollProgress(1);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="services-parallax-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        clipPath: `inset(${100 - scrollProgress * 100}% 0 0 0)`, // ✅ Reveal from bottom
        transition: "clip-path 0.1s linear", // ✅ Smooth reveal tied to scroll
      }}
    >
      {/* ✅ IMAGE */}
      <Image
        src={grp}
        alt="services parallax background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          opacity: 0.45,
          filter: "brightness(0.6) contrast(0.9)",
        }}
        priority
      />

      {/* ✅ DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />
    </div>
  );
};

export default HomeTwoModal;