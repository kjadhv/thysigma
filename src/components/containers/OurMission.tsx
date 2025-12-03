import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import missionImg from "public/images/wedo.jpg";
import visionImg from "public/images/quality.jpg";
import teamImg from "public/images/paraimg.jpeg";
import WhyChooseUs from "./WhyChooseUs";

const OurMission = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 767);
      setIsIpad(w >= 768 && w <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === missionRef.current)
            setMissionVisible(entry.isIntersecting);
          if (entry.target === visionRef.current)
            setVisionVisible(entry.isIntersecting);
          if (entry.target === teamRef.current && entry.isIntersecting)
            setTeamVisible(true);
        });
      },
      { threshold: 0.35 }
    );

    missionRef.current && observer.observe(missionRef.current);
    visionRef.current && observer.observe(visionRef.current);
    teamRef.current && observer.observe(teamRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        paddingTop: isIpad ? "60px" : "100px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">

        {/* ===== HEADING ===== */}
        <div style={{ textAlign: "center", marginBottom: isIpad ? "24px" : "40px" }}>
          <h2
            style={{
              fontSize: isMobile ? "30px" : isIpad ? "34px" : "56px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            OUR MISSION AND VISION
          </h2>
        </div>

        {/* ===== MISSION ===== */}
        <div
          ref={missionRef}
          style={{
            position: "relative",
            width: isMobile ? "100%" : isIpad ? "480px" : "720px",
            marginBottom: isIpad ? "32px" : "70px",
          }}
        >
          <div
            style={{
              position: isMobile ? "relative" : "absolute",
              inset: 0,
              height: isMobile ? "220px" : isIpad ? "120px" : "100%",
              transform: missionVisible
                ? isMobile
                  ? "translateY(0)"
                  : "translateX(100%)"
                : isMobile
                ? "translateY(100%)"
                : "translateX(0)",
              transition: "1s cubic-bezier(0.4,0,0.2,1)",
              overflow: "hidden",
            }}
          >
            <Image src={missionImg} alt="Mission" fill style={{ objectFit: "cover" }} />
          </div>

          <div
            style={{
              position: "relative",
              border: isMobile ? "2px solid #fff" : isIpad ? "2px solid #fff" : "4px solid #fff",
              padding: isMobile ? "26px" : isIpad ? "24px" : "70px",
              color: "#fff",
            }}
          >
            <h3 style={{ fontSize: isMobile ? "24px" : isIpad ? "26px" : "42px" }}>
              Our Mission →
            </h3>
            <p style={{ fontSize: isMobile ? "15px" : "22px", lineHeight: "1.6" }}>
              Deliver high-quality media and livestreaming solutions that transform
              every event into a compelling digital experience.
            </p>
          </div>
        </div>

        {/* ===== VISION ===== */}
        <div
          ref={visionRef}
          style={{
            position: "relative",
            width: isMobile ? "100%" : isIpad ? "480px" : "720px",
            marginLeft: isMobile ? "0" : "auto",
            marginBottom: isIpad ? "32px" : "70px",
          }}
        >
          <div
            style={{
              position: isMobile ? "relative" : "absolute",
              inset: 0,
              height: isMobile ? "220px" : isIpad ? "120px" : "100%",
              transform: visionVisible
                ? isMobile
                  ? "translateY(0)"
                  : "translateX(-100%)"
                : isMobile
                ? "translateY(100%)"
                : "translateX(0)",
              transition: "1s cubic-bezier(0.4,0,0.2,1)",
              overflow: "hidden",
            }}
          >
            <Image src={visionImg} alt="Vision" fill style={{ objectFit: "cover" }} />
          </div>

          <div
            style={{
              position: "relative",
              border: isMobile ? "2px solid #fff" : isIpad ? "2px solid #fff" : "4px solid #fff",
              padding: isMobile ? "26px" : isIpad ? "24px" : "70px",
              color: "#fff",
              textAlign: "right",
            }}
          >
            <h3 style={{ fontSize: isMobile ? "24px" : "42px" }}>
              ← Our Vision
            </h3>
            <p style={{ fontSize: isMobile ? "15px" : "22px", lineHeight: "1.6" }}>
              We envision ourselves as a trusted creative partner, narrating stories
              where EVERY. FRAME. MATTERS.
            </p>
          </div>
        </div>

        {/* ===== TEAM ===== */}
        <div ref={teamRef} style={{ textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontSize: isMobile ? "28px" : "48px" }}>
            Our Team & Tribe
          </h2>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "260px" : "420px",
              marginBottom: "24px",
            }}
          >
            <Image src={teamImg} alt="Team" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, border: isMobile ? "2px solid #fff" : "4px solid #fff" }} />
          </div>

          <p style={{ maxWidth: "90%", margin: "0 auto", fontSize: isMobile ? "15px" : "22px", lineHeight: "1.7" }}>
            We are a collective of passionate individuals who have honed their skills
            for years and studied the market to deliver what truly works best.
          </p>
        </div>
<WhyChooseUs />
      </div>
    </section>
    
  );
};

export default OurMission;
