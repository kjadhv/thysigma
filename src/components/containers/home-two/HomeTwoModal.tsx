import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import grp from "public/images/process.jpg";

gsap.registerPlugin(ScrollTrigger);

const HomeTwoModal = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".modal-bg").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".modal-bg",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".modal-bg", {
        opacity: 0,
        scale: 1,
        y: "50%",
        duration: 2,
      });
    }
  }, []);

  return (
    <>
      <div className="video-modal">
        {/* Background only — NO frame, NO play icon */}
        <Image src={grp} alt="Image" className="modal-bg" />
      </div>
    </>
  );
};

export default HomeTwoModal;
