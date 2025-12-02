import React from "react";
import Image from "next/image";

import missionImg from "public/images/sm.jpg";
import visionImg from "public/images/sm.jpg";

const OurMission = () => {
  return (
    <section
      className="section mission-s"
      style={{
        padding: "160px 0",
        background: "transparent",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">

        {/* ================= MISSION ================= */}
        <div style={{ position: "relative", marginBottom: "220px" }}>

          {/* ✅ TITLE ABOVE LINE */}
          <div
            style={{
              color: "#fff",
              fontSize: "28px",
              letterSpacing: "2px",
              fontWeight: "700",
              textTransform: "uppercase",
              marginBottom: "30px",
            }}
          >
            Our Mission
          </div>

          {/* LINES + TEXT */}
          <div style={{ width: "100%" }}>
            {/* TOP LINE */}
            <div
              style={{
                height: "3px",
                background: "#fff",
                width: "calc(100% - 160px)",
                marginBottom: "20px",
              }}
            />

            {/* TEXT BETWEEN LINES */}
            <div
              style={{
                color: "#fff",
                fontSize: "22px",
                lineHeight: "1.9",
                maxWidth: "70%",
              }}
            >
              Our mission is to deliver high-quality media and livestreaming
              solutions that transform every event into a compelling digital
              experience. We combine creativity, technology, and precision to
              provide end-to-end production services that clients can trust.
              Through innovation and seamless execution, we aim to elevate how
              you communicate, celebrate, and showcase your stories.
            </div>

            {/* BOTTOM LINE */}
            <div
              style={{
                height: "4px",
                background: "#fff",
                width: "calc(100% - 160px)",
                marginTop: "24px",
              }}
            />
          </div>

          {/* CIRCLE */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #fff",
            }}
          >
            <Image src={missionImg} alt="Mission" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* ================= VISION ================= */}
        <div style={{ position: "relative" }}>

          {/* ✅ TITLE ABOVE LINE */}
          <div
            style={{
              color: "#fff",
              fontSize: "28px",
              letterSpacing: "2px",
              fontWeight: "700",
              textTransform: "uppercase",
              textAlign: "right",
              marginBottom: "30px",
            }}
          >
            Our Vision
          </div>

          {/* LINES + TEXT */}
          <div style={{ width: "100%" }}>
            {/* TOP LINE */}
            <div
              style={{
                height: "4px",
                background: "#fff",
                width: "calc(100% - 60px)", // ✅ same subtract as Mission
                marginLeft: "auto",
                marginBottom: "20px",
              }}
            />

            {/* TEXT BETWEEN LINES */}
            <div
              style={{
                color: "#fff",
                fontSize: "22px",
                lineHeight: "1.9",
                textAlign: "right",
                marginLeft: "auto",
                maxWidth: "70%",
              }}
            >
              We envision us as your reliable partner. We capture, mold, and
              narrate the beauty of your stories. For us, EVERY. FRAME. MATTERS.
            </div>

            {/* BOTTOM LINE */}
            <div
              style={{
                height: "4px",
                background: "#fff",
                width: "calc(100% - 60px)", // ✅ same subtract as Mission
                marginLeft: "auto",
                marginTop: "24px",
              }}
            />
          </div>

          {/* CIRCLE */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #fff",
            }}
          >
            <Image src={visionImg} alt="Vision" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
