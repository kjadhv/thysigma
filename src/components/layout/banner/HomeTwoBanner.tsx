import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dawn from "public/images/banner/dawn.png";

gsap.registerPlugin(ScrollTrigger);

const HomeTwoBanner = () => {
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const boxedVideoContainerRef = useRef<HTMLDivElement>(null);
  const faintBgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 576;
  const isTablet = typeof window !== "undefined" && window.innerWidth > 576 && window.innerWidth <= 991;

  // ✅ REAL VIEWPORT HEIGHT FIX (MOBILE + IPAD)
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  useEffect(() => {
    const device_width = window.innerWidth;
    const isMobileDevice = window.innerWidth <= 576;
    const isTabletDevice = window.innerWidth > 576 && window.innerWidth <= 991;
    
    // ✅ Skip scroll animations on mobile/tablet - keep video at 50vh
    if (isMobileDevice || isTabletDevice) {
      return;
    }
    
    if (document.querySelectorAll(".banner-two").length > 0) {

      // Background video transformation
      gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-two",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress < 0.1) {
              // Full screen state - original positions
              gsap.to(fullscreenVideoRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.set(boxedVideoContainerRef.current, {
                pointerEvents: "none",
              });

              gsap.to(boxedVideoContainerRef.current, {
                opacity: 0,
                scale: isMobile || isTablet ? 1 : 0.85,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(faintBgRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Reset content to original positions
              gsap.to(statsRef.current, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(titleRef.current, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(contentBottomRef.current, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            } else if (progress >= 0.1 && progress < 0.35) {
              // Transition phase - slower, more gradual
              const transitionProgress = (progress - 0.1) / 0.25;

              gsap.to(fullscreenVideoRef.current, {
                opacity: 1 - transitionProgress,
                scale: isMobile || isTablet
                  ? 1
                  : 1 - transitionProgress * 0.15,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(boxedVideoContainerRef.current, {
                opacity: transitionProgress,
                scale: 0.85 + transitionProgress * 0.15,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(faintBgRef.current, {
                opacity: transitionProgress * 0.35,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Get container left position for alignment
              const containerLeft = containerRef.current?.getBoundingClientRect().left || 0;
              
              // Calculate capsule position relative to container
              const capsuleWidth = Math.min(window.innerWidth * 0.4, 600);
              const statsGap = 60; // Gap between capsule and stats
              
              // Move stats to right of capsule
              gsap.to(statsRef.current, {
                x: capsuleWidth + statsGap,
                y: -window.innerHeight * 0.05,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Move title below capsule (aligned with container)
              gsap.to(titleRef.current, {
                x: 0,
                y: window.innerHeight * 0.15,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Move bottom content below title (aligned with container)
              gsap.to(contentBottomRef.current, {
                x: 0,
                y: window.innerHeight * 0.15,
                duration: 0.3,
                ease: "power2.out",
              });
            } else {
              // Fully transformed state
              gsap.to(fullscreenVideoRef.current, {
                opacity: 0,
                scale: 0.85,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(boxedVideoContainerRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(faintBgRef.current, {
                opacity: 0.35,
                duration: 0.3,
                ease: "power2.out",
              });
              
              // Get container left position for alignment
              const containerLeft = containerRef.current?.getBoundingClientRect().left || 0;
              
              // Calculate capsule position relative to container
              const capsuleWidth = Math.min(window.innerWidth * 0.4, 600);
              const statsGap = 60; // Gap between capsule and stats
              
              // Keep stats to right of capsule
              gsap.to(statsRef.current, {
                x: capsuleWidth + statsGap,
                y: -window.innerHeight * 0.05,
                duration: 0.3,
                ease: "power2.out",
              });
              
              gsap.to(titleRef.current, {
                x: 0,
                y: window.innerHeight * 0.15,
                duration: 0.3,
                ease: "power2.out",
              });
              
              gsap.to(contentBottomRef.current, {
                x: 0,
                y: window.innerHeight * 0.15,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="banner-two"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: isMobile || isTablet
          ? "50vh"                 // ✅ half screen for mobile/tablet
          : "calc(var(--vh) * 100)", // ✅ desktop fullscreen
      }}
    >
      {/* Faint blurred background layer */}
      <div
        ref={faintBgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: isMobile || isTablet ? "50vh" : "calc(var(--vh) * 100)",
            maxHeight: isMobile || isTablet ? "50vh" : "none",
            minHeight: isMobile || isTablet ? "50vh" : "none",
            objectFit: isMobile || isTablet ? "contain" : "cover",
            objectPosition: "center center",
            filter: "blur(12px) brightness(0.25)",
          }}
        >
          <source src="/images/thy_sigma_hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Full screen background video (initially visible) */}
      <video
        ref={fullscreenVideoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: isMobile || isTablet
            ? "50vh"
            : "calc(var(--vh) * 100)",
          maxHeight: isMobile || isTablet ? "50vh" : "none",
          minHeight: isMobile || isTablet ? "50vh" : "none",
          objectFit: isMobile || isTablet ? "contain" : "cover",
          objectPosition: "center center",
          zIndex: 1,
        }}
      >
        <source src="/images/thy_sigma_hero_video.mp4" type="video/mp4" />
      </video>

      {/* Boxed capsule video (appears on scroll) - aligned with container */}
      <div
        ref={boxedVideoContainerRef}
        className="container"
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 2,
          padding: 0,
        }}
      >
        <div
          style={{
            width: "40%",
            maxWidth: "600px",
            aspectRatio: "16/9",
            borderRadius: "40px",
            overflow: "hidden",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/images/thy_sigma_hero_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content layer - single instance that moves */}
      <div className="container" style={{ position: "relative", zIndex: 10 }} ref={containerRef}>
        <div className="row">
          <div className="col-12">
            <div className="banner-two-inner">
              <div className="banner-two__meta" ref={statsRef}>
                <div className="cta section__content-cta m-0">
                  <div className="single">
                    <h5 className="fw-7">16+</h5>
                    <p className="fw-5">Years of expertise</p>
                  </div>
                  <div className="single">
                    <h5 className="fw-7">10+</h5>
                    <p className="fw-5">Completed projects</p>
                  </div>
                </div>
              </div>
              <div className="banner-two__content">
                {/* <h1 className="title-anim" ref={titleRef}>
                  OUR <span> THY SIGMA</span> MEDIA SERVICES
                </h1> */}
                <div className="banner-two__content-cta section__content-cta" ref={contentBottomRef}>
                  <div className="paragraph">
                    <p>
                      THYSIGMA creates high-performance digital experiences with
                      a focus on luxury design, clean interfaces, and seamless
                      user interaction.
                    </p>
                  </div>
                  <div className="arrow-wrapper d-none d-lg-block">
                    <span className="arrow"></span>
                  </div>
                  <div className="cta">
                    <Link href="contact-us" className="btn btn--tertiary">
                      book a call now
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dawn} alt="Image" className="dawn" />
    </section>
  );
};

export default HomeTwoBanner;