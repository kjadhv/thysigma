import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrows from "public/images/para1.jpg";
import star from "public/images/wedo1.jpg";
import videop from "public/images/videop.jpg";
import ve1 from "public/images/ve1.jpg";
import dotlarge from "public/images/agency/dot-large.png";

const IMAGES = [arrows, star, videop, ve1];

const Agency = () => {
  return (
    <section
      className="section agency about-trigger"
      style={{
        position: "relative",
        paddingTop: "120px",
        paddingBottom: "0px",   // ✅ REMOVE GAP
        marginBottom: "0px",    // ✅ REMOVE GAP
        zIndex: 2,
        background: "transparent",
      }}
    >
      <div className="container">
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "24px",
            padding: "30px",
            overflow: "hidden",
            marginBottom: "0px",
          }}
        >
          {/* ===== TEXT ===== */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#fff",
              }}
            >
              Who We Are
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "16px",
              }}
            >
              With our expertise in livestreaming, photography, videography, and post-production, we help event companies elevate their client offerings while reducing their operational burden. 
            </p>

            <Link href="/about-us" className="btn btn--primary">
              Know More
            </Link>
          </div>

          {/* ===== INFINITE MARQUEE ===== */}
          <div className="marquee">
            <div className="marquee-track">
              {[...Array(20)].flatMap((_, i) =>
                IMAGES.map((img, idx) => (
                  <div
                    key={`${i}-${idx}`}
                    className="marquee-item"
                    style={{
                      backgroundImage: `url(${img.src})`,
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Image src={dotlarge} alt="decor" className="dot-large" priority />

      {/* ✅ MARQUEE STYLES */}
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
          will-change: transform;
        }

        .marquee-item {
          width: 200px;      /* ✅ UNCHANGED */
          height: 160px;     /* ✅ UNCHANGED */
          margin-right: 24px;
          border-radius: 16px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          flex-shrink: 0;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Agency;
