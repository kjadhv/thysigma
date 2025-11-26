import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import grp from "public/images/paraimg.jpeg";

gsap.registerPlugin(ScrollTrigger);

const HomeTwoModal = () => {
  useEffect(() => {
    if (window.innerWidth <= 576) return;

    // Start hidden and invisible
    gsap.set(".process-bg-layer", {
      visibility: "hidden",
    });

    gsap.set(".process-shared-img", {
      opacity: 0,
    });

    // Show/hide image based on swiper sections visibility
    ScrollTrigger.create({
      trigger: ".offer-two",
      start: "top bottom",
      endTrigger: ".portfolio__text-slider-w",
      end: "bottom top",
      onEnter: () => {
        gsap.set(".process-bg-layer", { visibility: "visible" });
        gsap.to(".process-shared-img", { opacity: 0.25, duration: 0.3 });
      },
      onEnterBack: () => {
        gsap.set(".process-bg-layer", { visibility: "visible" });
        gsap.to(".process-shared-img", { opacity: 0.25, duration: 0.3 });
      },
      onLeave: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.to(".process-bg-layer", { visibility: "hidden", delay: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.to(".process-bg-layer", { visibility: "hidden", delay: 0.3 });
      },
    });

    // Pin the image so it stays fixed
    ScrollTrigger.create({
      trigger: ".offer-two",
      start: "top top",
      endTrigger: ".portfolio__text-slider-w",
      end: "bottom top",
      pin: ".process-bg-layer",
      pinSpacing: false,
    });
  }, []);

  return (
    <div
      className="process-bg-layer"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        visibility: "hidden",
      }}
    >
      <Image
        src={grp}
        alt="process"
        fill
        priority
        className="process-shared-img"
        style={{
          objectFit: "cover",
          opacity: 0,
        }}
      />
    </div>
  );
};

export default HomeTwoModal;