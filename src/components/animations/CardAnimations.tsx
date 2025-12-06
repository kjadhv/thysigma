import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardAnimationsProps {
  children: React.ReactNode;
}

const CardAnimations: React.FC<CardAnimationsProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(
      wrapperRef.current?.querySelectorAll(".cine-card") || []
    );

    // ✅ SCROLL-DRIVEN ANIMATION (LIKE YOUR VIDEO)
    gsap.fromTo(
      cards,
      {
        xPercent: 120,
        rotation: 90,
        opacity: 0,
        scale: 0.96,
      },
      {
        xPercent: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        ease: "power4.out",
        duration: 1,
        stagger: {
          each: 0.15,
        },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.2, // ✅ THIS IS THE MAGIC
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="cards-animation-wrapper"
      style={{ perspective: "1400px" }}
    >
      {children}

      <style jsx global>{`
        .cine-card {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default CardAnimations;
