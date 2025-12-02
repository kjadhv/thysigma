import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import missionImg from "public/images/wedo.jpg";
import visionImg from "public/images/quality.jpg";
import teamImg from "public/images/paraimg.jpeg";

const OurMission = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === missionRef.current)
            setMissionVisible(entry.isIntersecting);

          if (entry.target === visionRef.current)
            setVisionVisible(entry.isIntersecting);

          // ✅ Team Tribe – animate ONCE
          if (entry.target === teamRef.current && entry.isIntersecting)
            setTeamVisible(true);

          // ✅ Why Choose Us – repeat
          if (entry.target === whyRef.current)
            setWhyVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );

    missionRef.current && observer.observe(missionRef.current);
    visionRef.current && observer.observe(visionRef.current);
    teamRef.current && observer.observe(teamRef.current);
    whyRef.current && observer.observe(whyRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "10px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">

        {/* ================= HEADING ================= */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "56px", fontWeight: 700, color: "#fff" }}>
            OUR MISSION AND VISION
          </h2>
        </div>

        {/* ================= MISSION ================= */}
        <div
          ref={missionRef}
          style={{
            position: "relative",
            width: "720px",
            height: "380px",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: missionVisible ? "translateX(100%)" : "translateX(0)",
              transition: "1s cubic-bezier(0.4,0,0.2,1)",
              overflow: "hidden",
            }}
          >
            <Image src={missionImg} alt="Mission" fill style={{ objectFit: "cover" }} />
          </div>

          <div
            style={{
              position: "relative",
              border: "4px solid #fff",
              padding: "70px",
              height: "100%",
              color: "#fff",
            }}
          >
            <h3 style={{ fontSize: "42px", marginBottom: "26px" }}>
              Our Mission →
            </h3>
            <p style={{ fontSize: "22px", lineHeight: "1.9" }}>
              Deliver high-quality media and livestreaming solutions that transform
              every event into a compelling digital experience.
            </p>
          </div>
        </div>

        {/* ================= VISION ================= */}
        <div
          ref={visionRef}
          style={{
            position: "relative",
            width: "720px",
            height: "380px",
            marginLeft: "auto",
            marginBottom: "90px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: visionVisible ? "translateX(-100%)" : "translateX(0)",
              transition: "1s cubic-bezier(0.4,0,0.2,1)",
              overflow: "hidden",
            }}
          >
            <Image src={visionImg} alt="Vision" fill style={{ objectFit: "cover" }} />
          </div>

          <div
            style={{
              position: "relative",
              border: "4px solid #fff",
              padding: "70px",
              height: "100%",
              color: "#fff",
              textAlign: "right",
            }}
          >
            <h3 style={{ fontSize: "42px", marginBottom: "26px" }}>
              ← Our Vision
            </h3>
            <p style={{ fontSize: "22px", lineHeight: "1.9" }}>
              We envision ourselves as a trusted creative partner, narrating stories
              where EVERY. FRAME. MATTERS.
            </p>
          </div>
        </div>

        {/* ================= TEAM TRIBE ================= */}
        <div ref={teamRef} style={{ textAlign: "center", color: "#fff" }}>
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "50px",
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "0.6s ease",
            }}
          >
            Our Team & Tribe
          </h2>

          {/* ✅ IMAGE WITH SAME BORDER STYLE */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              marginBottom: "50px",
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? "translateY(0)" : "translateY(-40px)",
              transition: "0.8s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
            >
              <Image src={teamImg} alt="Team Tribe" fill style={{ objectFit: "cover" }} />
            </div>

            <div
              style={{
                position: "relative",
                border: "4px solid #fff",
                height: "100%",
                pointerEvents: "none",
              }}
            />
          </div>

          <p
            style={{
              maxWidth: "75%",
              margin: "0 auto",
              fontSize: "22px",
              lineHeight: "1.9",
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? "translateY(0)" : "translateY(-30px)",
              transition: "0.8s ease",
            }}
          >
            We are a collective of passionate individuals who have honed their skills
            for years and studied the market to deliver what truly works best.
          </p>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div
          ref={whyRef}
          style={{
            marginTop: "60px",
            opacity: whyVisible ? 1 : 0,
            transform: whyVisible ? "translateY(0)" : "translateY(20px)",
            transition: "0.6s ease",
          }}
        >
          <div
            style={{
              border: "4px solid rgba(255,255,255,0.15)",
              borderRadius: "24px",
              padding: "48px",
              color: "#fff",
              width: "100%",
            }}
          >
            <h2 style={{ fontSize: "46px", marginBottom: "20px", textAlign: "center" }}>
              Why Choose Us
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.7",
                maxWidth: "1000px",
                margin: "0 auto 24px",
                textAlign: "center",
              }}
            >
              Because with <strong>16+ years of media-tech expertise</strong>, we deliver
              quality you can see and reliability you can feel.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "1000px",
                margin: "0 auto 40px",
                textAlign: "center",
              }}
            >
              Thy Sigma positions itself as a premium yet accessible media-tech partner
              for flawless execution, creative storytelling, and dependable delivery.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                maxWidth: "1100px",
                margin: "0 auto 40px",
              }}
            >
              <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
                With expertise in livestreaming, photography, videography, and
                post-production, we help event companies elevate their client offerings
                while reducing their operational burden.
              </p>

              <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
                Content repurposing, subtitling, distribution, video reliability
                engineering, audio engineering, and more — giving you comprehensive
                solutions with one trusted partner.
              </p>
            </div>

            <p
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                textAlign: "center",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              Choosing us means gaining a reliable production team that turns every
              event into a digital masterpiece.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
