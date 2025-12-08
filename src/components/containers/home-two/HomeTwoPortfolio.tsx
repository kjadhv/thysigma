import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dawn from "public/images/banner/dawn.png";

gsap.registerPlugin(ScrollTrigger);

const HomeTwoBanner = () => {
  const fullscreenVideoRef = useRef<HTMLDivElement>(null);
  const boxedVideoContainerRef = useRef<HTMLDivElement>(null);
  const faintBgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate these synchronously - no state changes
  const getHeaderHeight = () => {
    if (typeof window === 'undefined') return 120;
    const headerEl = document.querySelector(".primary-navbar");
    return headerEl instanceof HTMLElement ? headerEl.offsetHeight : 120;
  };

  const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth <= 576;
  const getIsTablet = () => typeof window !== 'undefined' && window.innerWidth > 576 && window.innerWidth <= 991;

  // Store initial values
  const initialHeaderHeight = getHeaderHeight();
  const initialIsMobile = getIsMobile();
  const initialIsTablet = getIsTablet();

  const [headerHeight, setHeaderHeight] = useState(initialHeaderHeight);
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  const [isTablet, setIsTablet] = useState(initialIsTablet);
  const [capsulePadding, setCapsulePadding] = useState<number>(0);

  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVH();

    const handleResize = () => {
      setIsMobile(getIsMobile());
      setIsTablet(getIsTablet());
      setHeaderHeight(getHeaderHeight());
      setVH();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile || isTablet) {
      return;
    }
    
    if (document.querySelectorAll(".banner-two").length > 0) {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-two",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress < 0.1) {
              setCapsulePadding(50);

              gsap.to(fullscreenVideoRef.current, {
                opacity: 1 - progress * 10,
                border: "1px solid rgba(150, 150, 150, 0.3)",
                boxShadow: 
                  "inset 0 0 30px rgba(150, 150, 150, 0.15), " +
                  "0 0 40px 5px rgba(150, 150, 150, 0.3), " +
                  "0 0 80px 15px rgba(150, 150, 150, 0.2)",
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.set(boxedVideoContainerRef.current, {
                pointerEvents: "none",
              });

              gsap.to(boxedVideoContainerRef.current, {
                opacity: 0,
                scale: 0.85,
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(faintBgRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
              });
              
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
              const transitionProgress = (progress - 0.1) / 0.25;
              const fadeOut = 1 - transitionProgress;

              gsap.to(fullscreenVideoRef.current, {
                opacity: fadeOut,
                border: `1px solid rgba(150, 150, 150, ${0.3 * fadeOut})`,
                boxShadow: 
                  `inset 0 0 ${30 * fadeOut}px rgba(150, 150, 150, ${0.15 * fadeOut}), ` +
                  `0 0 ${40 * fadeOut}px ${5 * fadeOut}px rgba(150, 150, 150, ${0.3 * fadeOut}), ` +
                  `0 0 ${80 * fadeOut}px ${15 * fadeOut}px rgba(150, 150, 150, ${0.2 * fadeOut})`,
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
              
              const capsuleWidth = Math.min(window.innerWidth * 0.4, 600);
              const statsGap = 60;
              
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
            } else {
              gsap.to(fullscreenVideoRef.current, {
                opacity: 0,
                border: "1px solid rgba(150, 150, 150, 0)",
                boxShadow: 
                  "inset 0 0 0px rgba(150, 150, 150, 0), " +
                  "0 0 0px 0px rgba(150, 150, 150, 0), " +
                  "0 0 0px 0px rgba(150, 150, 150, 0)",
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(boxedVideoContainerRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
              setCapsulePadding(50);

              gsap.to(faintBgRef.current, {
                opacity: 0.35,
                duration: 0.3,
                ease: "power2.out",
              });
              
              const capsuleWidth = Math.min(window.innerWidth * 0.4, 600);
              const statsGap = 60;
              
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
  }, [isMobile, isTablet]);

  // Use the current values directly in render
  const currentHeaderHeight = headerHeight;
  const currentIsMobile = isMobile;
  const currentIsTablet = isTablet;

  return (
    <section
      className="banner-two"
      style={{
        position: "relative",
        overflow: "visible",
        width: "100%",
        minHeight: currentIsMobile || currentIsTablet
          ? "50vh"
          : "calc(var(--vh, 1vh) * 100)",
        paddingTop: currentIsMobile || currentIsTablet ? "10px" : `${currentHeaderHeight + 80}px`,
        paddingBottom: currentIsMobile || currentIsTablet
          ? "5px"
          : `${capsulePadding}px`,
        marginBottom: 0,
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
            height: currentIsMobile || currentIsTablet ? "50vh" : "calc(var(--vh, 1vh) * 100)",
            maxHeight: currentIsMobile || currentIsTablet ? "50vh" : "calc(var(--vh, 1vh) * 100)",
            minHeight: currentIsMobile || currentIsTablet ? "50vh" : "calc(var(--vh, 1vh) * 100)",
            objectFit: currentIsMobile || currentIsTablet ? "contain" : "cover",
            objectPosition: "center center",
            filter: "blur(12px) brightness(0.25)",
            top: currentIsMobile || currentIsTablet ? "0" : `${currentHeaderHeight + 80}px`,
            left: 0,
          }}
        >
          <source src="/images/thy_sigma_hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Full screen background video */}
      <div
        ref={fullscreenVideoRef}
        style={{
          position: "absolute",
          top: currentIsMobile || currentIsTablet ? `${currentHeaderHeight + 40}px` : `${currentHeaderHeight + 60}px`,
          left: "50%",
          transform: "translateX(-50%)",
          width: currentIsMobile || currentIsTablet ? "90%" : "1000px",
          aspectRatio: "16/9",
          zIndex: 1,
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(150, 150, 150, 0.3)",
          boxShadow: 
            "inset 0 0 30px rgba(150, 150, 150, 0.15), " +
            "0 0 40px 5px rgba(150, 150, 150, 0.3), " +
            "0 0 80px 15px rgba(150, 150, 150, 0.2)",
          willChange: "opacity, box-shadow, border",
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
            objectPosition: "center center",
          }}
        >
          <source src="/images/thy_sigma_hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Boxed capsule video */}
      <div
        ref={boxedVideoContainerRef}
        className="container"
        style={{
          position: "absolute",
          top: currentIsMobile || currentIsTablet ? "35%" : "70%",
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
            overflow: "visible",
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

      {/* Content layer */}
      <div className="container" style={{ position: "relative", zIndex: 10 }} ref={containerRef}>
        <div className="row">
          <div className="col-12">
            <div className="banner-two-inner">
              <div className="banner-two__meta" ref={statsRef}>
                <div className="cta section__content-cta m-0">
                </div>
              </div>
              <div className="banner-two__content">
                <div
                  className="banner-two__content-cta section__content-cta"
                  ref={contentBottomRef}
                  style={{
                    padding: currentIsMobile || currentIsTablet ? "30px 20px" : "70px 100px",
                    borderRadius: "24px",
                    maxWidth: currentIsMobile || currentIsTablet ? "95%" : "100%",
                    marginTop: currentIsMobile || currentIsTablet ? "420px" : "calc(100vh - 350px)",
                    display: currentIsMobile || currentIsTablet ? "block" : "flex",
                    alignItems: currentIsMobile || currentIsTablet ? "flex-start" : "center",
                    gap: currentIsMobile || currentIsTablet ? "0" : "40px",
                    minHeight: currentIsMobile || currentIsTablet ? "auto" : "120px",
                  }}
                >
                  <div className="paragraph" style={{ 
                    flex: currentIsMobile || currentIsTablet ? "none" : "1",
                    marginBottom: currentIsMobile || currentIsTablet ? "16px" : "0",
                  }}>
                    <p style={{
                      fontSize: currentIsMobile || currentIsTablet ? "13px" : "18px",
                      lineHeight: currentIsMobile || currentIsTablet ? "1.5" : "1.7",
                      marginBottom: 0,
                    }}>
                      THYSIGMA creates high-performance digital experiences with
                      a focus on luxury design, clean interfaces, and seamless
                      user interaction.
                    </p>
                  </div>
                  <div className="arrow-wrapper d-none d-lg-block" style={{ display: "none" }}>
                    <span className="arrow"></span>
                  </div>
                  <div className="cta" style={{ 
                    flexShrink: 0,
                    marginTop: currentIsMobile || currentIsTablet ? "0" : "0",
                  }}>
                    <Link 
                      href="contact-us" 
                      className="btn btn--tertiary"
                      style={{
                        fontSize: currentIsMobile || currentIsTablet ? "12px" : "inherit",
                        padding: currentIsMobile || currentIsTablet ? "10px 20px" : "inherit",
                        whiteSpace: "nowrap",
                      }}
                    >
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