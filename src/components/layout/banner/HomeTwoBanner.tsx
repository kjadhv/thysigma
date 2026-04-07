import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dawn from "public/images/banner/dawn.png";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const HomeTwoBanner = () => {
  const fullscreenVideoRef = useRef<HTMLDivElement>(null);
  const boxedVideoContainerRef = useRef<HTMLDivElement>(null);
  const faintBgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentBottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const [headerHeight, setHeaderHeight] = useState<number>(100);
  const [capsulePadding, setCapsulePadding] = useState<number>(0);

  useEffect(() => {
    // Set device type on mount and resize
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 576);
      setIsTablet(window.innerWidth > 576 && window.innerWidth <= 991);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVH();
    window.addEventListener("resize", setVH);

    const measureHeader = () => {
      const headerEl = document.querySelector(".primary-navbar");
      const h = headerEl instanceof HTMLElement ? headerEl.offsetHeight : 120;
      setHeaderHeight(h || 120);
    };

    measureHeader();
    window.addEventListener("resize", measureHeader);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("resize", setVH);
      window.removeEventListener("resize", measureHeader);
    };
  }, []);

  useEffect(() => {
    const device_width = window.innerWidth;
    const isMobileDevice = window.innerWidth <= 576;
    const isTabletDevice = window.innerWidth > 576 && window.innerWidth <= 991;
    
    // No scroll animations on mobile/tablet - just keep video at half size always
    if (isMobileDevice || isTabletDevice) {
      return;
    }
    
    // Desktop only: scroll animation
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

              // Fade out small video AND border glow on scroll
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

              // Fade out small video, border AND glow
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
              
              const containerLeft = containerRef.current?.getBoundingClientRect().left || 0;
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
              // Video completely faded out with NO border or glow
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
              
              const containerLeft = containerRef.current?.getBoundingClientRect().left || 0;
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
  }, []);
useEffect(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');
    .glass-box-a {
      padding: 18px 26px;
      border-radius: 14px;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
      transition: box-shadow 0.25s, background 0.25s, border-color 0.25s;
    }
    .glass-box-a:hover {
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 0 24px rgba(245,230,200,0.15);
    }
    .glass-label-a {
      font-family: 'Cinzel', serif;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2px;
    }
  `;
  document.head.appendChild(style);
  return () => { document.head.removeChild(style); };
}, []);
  return (
    <section
      className="banner-two"
      style={{
        position: "relative",
        overflow: "visible",
        width: "100%",
        minHeight: isMobile || isTablet
          ? "50vh"
          : "calc(var(--vh) * 100)",
        paddingTop: isMobile || isTablet ? "10px" : `${headerHeight + 80}px`,
        paddingBottom: isMobile || isTablet
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
            height: isMobile || isTablet ? "50vh" : "calc(var(--vh) * 100)",
            maxHeight: isMobile || isTablet ? "50vh" : "calc(var(--vh) * 100)",
            minHeight: isMobile || isTablet ? "50vh" : "calc(var(--vh) * 100)",
            objectFit: isMobile || isTablet ? "contain" : "cover",
            objectPosition: "center center",
            filter: "blur(12px) brightness(0.25)",
            top: isMobile || isTablet ? "0" : `${headerHeight + 80}px`,
            left: 0,
          }}
        >
          <source src="/Show Reel- sepia.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Full screen background video - Half size on mobile/tablet, full animation on desktop */}
      <div
        ref={fullscreenVideoRef}
        style={{
          position: isMobile || isTablet ? "absolute" : "fixed",
top: isMobile || isTablet ? `${headerHeight + 40}px` : `${headerHeight}px`,
left: isMobile || isTablet ? "50%" : "0",
transform: isMobile || isTablet ? "translateX(-50%) scale(0.9)" : "none",
width: isMobile || isTablet ? "90%" : "100vw",
maxWidth: isMobile || isTablet ? "100%" : "100vw",
height: isMobile || isTablet ? "auto" : "100vh",
aspectRatio: isMobile || isTablet ? "16/9" : undefined,
zIndex: 1,
pointerEvents: "none",
borderRadius: isMobile || isTablet ? "20px" : "0",
overflow: "hidden",
border: isMobile || isTablet ? "1px solid rgba(150, 150, 150, 0.3)" : "none",
boxShadow: isMobile || isTablet ? "inset 0 0 30px rgba(150,150,150,0.15), 0 0 40px 5px rgba(150,150,150,0.3)" : "none",
transition: "opacity 0.3s ease",
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
          <source src="/Show Reel- sepia.mp4" type="video/mp4" />
        </video>
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
          <source src="/Show Reel- sepia.mp4" type="video/mp4" />
        </video>

        {/* ← PASTE HERE ↓ */}
        {!(isMobile || isTablet) && (
          <div style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            zIndex: 50,
            display: "flex",
            alignItems: "stretch",
            background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            pointerEvents: "none",
          }}>
            {/* Social icons column */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "22px",
              padding: "0 18px",
            }}>
              {[
                { icon: "fa-instagram", href: "#" },
                { icon: "fa-linkedin-in", href: "#" },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} style={{
                  width: "38px", height: "38px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#af630cff", fontSize: "13px",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}>
                  <i className={`fa-brands ${icon}`}></i>
                </a>
              ))}
            </div>

            {/* Orange vertical line */}
            <div style={{
              width: "2px",
              background: "#5a5450ff",
              margin: "60px 0",
              borderRadius: "2px",
              flexShrink: 0,
            }} />

            {/* Main content */}
            <div style={{
  display: "flex",
  color: "#68310cff",
  flexDirection: "column",
  justifyContent: "flex-start",   // ✅ moved up
  padding: "0 60px",
  paddingTop: "120px",            // 🔥 adjust this value
  maxWidth: "1400px",   
  width: "100%",
  pointerEvents: "auto",
}}>
              {/* Watch Showreel */}
              {/* <div style={{
                display: "flex", alignItems: "center", gap: "14px",
                marginBottom: "32px",
              }}>
                <span style={{
                  color: "#fff", fontSize: "14px",
                  fontWeight: 400, letterSpacing: "1px",
                }}>Watch Showreel</span>
                <button style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  background: "#e97820",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: "14px",
                  flexShrink: 0,
                }}>
                  <i className="fa-solid fa-play"></i>
                </button>
              </div> */}

              {/* Big title - Glitch effect */}
              <div style={{ position: "relative", marginBottom: "24px" }}>
                <style>{`
                 @keyframes glitch-main {
  0%   { transform: translate(0); }
  10%  { transform: translate(-2px, 1px); }
  20%  { transform: translate(2px, -1px); }
  30%  { transform: translate(-1px, 2px); }
  40%  { transform: translate(1px, -2px); }
  50%  { transform: translate(-3px, 0); }
  60%  { transform: translate(3px, 1px); }
  70%  { transform: translate(-1px, -1px); }
  80%  { transform: translate(2px, 2px); }
  90%  { transform: translate(-2px, -1px); }
  100% { transform: translate(0); }
}
@keyframes glitch-red {
  0%   { clip-path: inset(10% 0 80% 0); transform: translate(-4px, 0); opacity: 0.9; }
  15%  { clip-path: inset(60% 0 20% 0); transform: translate(4px, 0);  opacity: 0.8; }
  30%  { clip-path: inset(30% 0 50% 0); transform: translate(-3px, 0); opacity: 1;   }
  45%  { clip-path: inset(75% 0 5% 0);  transform: translate(3px, 0);  opacity: 0.7; }
  60%  { clip-path: inset(5% 0 70% 0);  transform: translate(-4px, 0); opacity: 0.9; }
  75%  { clip-path: inset(45% 0 35% 0); transform: translate(4px, 0);  opacity: 0.8; }
  90%  { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 0); opacity: 1;   }
  100% { clip-path: inset(10% 0 80% 0); transform: translate(-4px, 0); opacity: 0.9; }
}
@keyframes glitch-cyan {
  0%   { clip-path: inset(70% 0 10% 0); transform: translate(4px, 0);  opacity: 0.8; }
  15%  { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 0); opacity: 0.7; }
  30%  { clip-path: inset(55% 0 25% 0); transform: translate(3px, 0);  opacity: 0.9; }
  45%  { clip-path: inset(5% 0 75% 0);  transform: translate(-3px, 0); opacity: 0.8; }
  60%  { clip-path: inset(40% 0 40% 0); transform: translate(4px, 0);  opacity: 0.7; }
  75%  { clip-path: inset(80% 0 5% 0);  transform: translate(-4px, 0); opacity: 0.9; }
  90%  { clip-path: inset(15% 0 65% 0); transform: translate(3px, 0);  opacity: 0.8; }
  100% { clip-path: inset(70% 0 10% 0); transform: translate(4px, 0);  opacity: 0.8; }
}
.glitch-title {
  animation: glitch-main 5s infinite;
}
.glitch-title::before {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  color: #cc9e9eff;
  animation: glitch-red 3s infinite;
  pointer-events: none;
  width: 100%;
  mix-blend-mode: screen;
}
.glitch-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  color: #00c8ff;
  animation: glitch-cyan 3s infinite;
  pointer-events: none;
  width: 100%;
  mix-blend-mode: screen;
}
  .services-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #e97820;
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 28px;
  border-radius: 4px;
  border: 2px solid #e97820;
  cursor: pointer;
  position: relative;
  z-index: 20;
  pointer-events: auto;
  transition: background 0.25s ease, color 0.25s ease;
}
.services-btn:hover {
  background: transparent;
  color: #e97820;
}
                `}</style>
                 <h1
                  className="glitch-title"
                  data-text="Professional Event Media Services"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "60px",
                    lineHeight: 1.1,
                    letterSpacing: "2px",
                    color: "#c25710ff",
                    WebkitTextFillColor: "#b65718ff",
                    margin: 0,
                    position: "relative",
                    maxWidth: "1200px",
                  }}
                >
                  Professional Event Media Services
                </h1>
 </div>

              {/* Bullet list — completely outside glitch div */}
              {/* <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "24px",
                paddingLeft: "4px",
              }}>
                {["Live Streaming", "Videography", "Post Production"].map((item) => (
                  <div key={item} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "clamp(16px, 1.5vw, 22px)",
                    color: "#e97820",
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "1px",
                  }}>
                    <span style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      background: "#e97820",
                      flexShrink: 0,
                    }} />
                    {item}
                  </div>
                ))}
              </div> */}
             {/* Bullet list with glitch effect */}
              {/* <style>{`
                .glitch-bullet {
                  position: relative;
                  display: inline-block;
                  animation: glitch-main 5s infinite;
                }
                .glitch-bullet::before {
                  content: attr(data-text);
                  position: absolute;
                  top: 0; left: 0;
                  color: #cf903cff;
                  animation: glitch-red 3s infinite;
                  pointer-events: none;
                  width: 100%;
                  mix-blend-mode: screen;
                }
                .glitch-bullet::after {
                  content: attr(data-text);
                  position: absolute;
                  top: 0; left: 0;
                  color: #ff9900ff;
                  animation: glitch-cyan 3s infinite;
                  pointer-events: none;
                  width: 100%;
                  mix-blend-mode: screen;
                }
              `}</style>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "24px",
                paddingLeft: "4px",
              }}>
                {["Live Streaming", "Videography", "Post Production"].map((item) => (
                  <div key={item} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "30px",
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "1px",
                  }}>
                    <span style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      background: "#e97820",
                      flexShrink: 0,
                    }} />
                    <span
                      className="glitch-bullet"
                      data-text={item}
                      style={{ color: "#c25710", fontSize: "inherit" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div> */}


              {/* Glass morphism service boxes - Cinzel Ivory */}
{/* <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');
  .glass-box-a {
    padding: 18px 26px;
    border-radius: 14px;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
    transition: box-shadow 0.25s, background 0.25s, border-color 0.25s;
  }
  .glass-box-a:hover {
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 0 24px rgba(245,230,200,0.15);
  }
  .glass-label-a {
    font-family: 'Cinzel', serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
  }
`}</style> */}
<div style={{
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "14px",
  marginBottom: "28px",
}}>
  {[
    { label: "Live Streaming", bg: "rgba(255,200,80,0.06)",  border: "rgba(255,200,80,0.3)",   color: "#ffd56b" },
    { label: "Videography",    bg: "rgba(255,240,210,0.06)", border: "rgba(255,240,210,0.25)", color: "#f5e6c8" },
    { label: "Photography",    bg: "rgba(200,120,60,0.08)",  border: "rgba(200,120,60,0.35)",  color: "#d4875a" },
  ].map(({ label, bg, border, color }) => (
    <div
      key={label}
      className="glass-box-a"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <span className="glass-label-a" style={{ color }}>
        {label}
      </span>
    </div>
  ))}
</div>
              {/* Description */}
              <p style={{
                fontSize: "clamp(18px, 1.7vw, 20px)",
                lineHeight: 1.7,
                color: "#e97820",
                marginBottom: "32px",
                maxWidth: "460px",
              }}>
                End-to-end media coverage for corporate events, sports, conferences, expos, and more.
              </p>

              {/* Our Services Button */}
              {/* ── Our Services Button — truly outside everything ── */}
      {!(isMobile || isTablet) && (
        <>
          <style>{`
            .services-btn-fixed {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              background: #e97820;
              color: #fff !important;
              text-decoration: none;
              font-size: 13px;
              font-weight: 600;
              letter-spacing: 2px;
              text-transform: uppercase;
              padding: 14px 28px;
              border-radius: 4px;
              border: 2px solid #e97820;
              cursor: pointer;
              transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
            }
            .services-btn-fixed:hover {
              background: #000 !important;
              color: #fff !important;
              border-color: #000 !important;
            }
          `}</style>
          <div style={{
            position: "fixed",
            bottom: "60px",
            right: "60px",
            zIndex: 9999,
          }}>
            <Link href="/our-services" className="services-btn-fixed">
              View Our Services
              <span style={{ fontSize: "16px" }}>→</span>
            </Link>
          </div>
        </>
      )}
            </div>
          </div>
        )}

      </div> {/* ← this closes fullscreenVideoRef */}

    
      {/* Boxed capsule video - MOVED DOWN */}
      <div
        ref={boxedVideoContainerRef}
        className="container"
        style={{
          position: "absolute",
          top: isMobile || isTablet ? "35%" : "70%",
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
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/Show Reel- sepia.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content layer - MOVED TO BOTTOM */}
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
                    padding: isMobile || isTablet ? "2px 20px" : "70px 100px",
                    borderRadius: "24px",
                    maxWidth: isMobile || isTablet ? "95%" : "100%",
                    marginTop: isMobile || isTablet ? "420px" : "calc(100vh - 250px)",
                    display: isMobile || isTablet ? "block" : "flex",
                    alignItems: isMobile || isTablet ? "flex-start" : "center",
                    gap: isMobile || isTablet ? "0" : "40px",
                    minHeight: isMobile || isTablet ? "auto" : "120px",
                  }}
                >
                  <div className="paragraph" style={{ 
                    flex: isMobile || isTablet ? "none" : "1",
                    marginBottom: isMobile || isTablet ? "16px" : "0",
                  }}>
                    <p style={{
                      fontSize: isMobile || isTablet ? "13px" : "18px",
                      lineHeight: isMobile || isTablet ? "1.5" : "1.7",
                      marginBottom: 0,
                      color: "#13110fff", // ⭐ yellow
                      WebkitTextFillColor: "#f0eeebff",
                    }}>
                      Event Coverage & Live Streaming Services in Mumbai | Thy Sigma , Navi Mumbai
                    </p>
                  </div>
                  <div className="arrow-wrapper d-none d-lg-block" style={{ display: "none" }}>
                    <span className="arrow"></span>
                  </div>
                  <div className="cta" style={{ 
                    flexShrink: 0,
                    marginTop: isMobile || isTablet ? "0" : "0",
                  }}>
                    <Link 
                      href="contact-us" 
                      className="btn btn--tertiary"
                      style={{
                        fontSize: isMobile || isTablet ? "12px" : "inherit",
                        padding: isMobile || isTablet ? "10px 20px" : "inherit",
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
      <Image src={dawn} alt="Event in Mumbai" className="dawn" />
    </section>
  );
};

export default HomeTwoBanner;