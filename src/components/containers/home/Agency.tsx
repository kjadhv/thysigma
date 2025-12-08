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
        paddingBottom: "0px",
        marginBottom: "0px",
        zIndex: 2,
        background: "transparent",
      }}
    >
      <div className="container">
        <div className="agency-box">
          {/* ===== TEXT ===== */}
          <div className="agency-text">
            <h2>Who We Are</h2>

            <p>
              With our expertise in livestreaming, photography, videography, and
              post-production, we help event companies elevate their client
              offerings while reducing their operational burden.
            </p>
{/* ✅ CENTER */}
  <div className="center-btn">
            <Link href="#founders" scroll={false} className="btn btn--primary">
  Know More
</Link>

          </div>
</div>
          {/* ===== INFINITE MARQUEE ===== */}
          <div className="marquee">
            <div className="marquee-track">
              {[...Array(20)].flatMap((_, i) =>
                IMAGES.map((img, idx) => (
                  <div
                    key={`${i}-${idx}`}
                    className="marquee-item"
                    style={{ backgroundImage: `url(${img.src})` }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Image src={dotlarge} alt="decor" className="dot-large" priority />

      <style jsx>{`
        /* ================= DESKTOP / IPAD (UNCHANGED) ================= */

        .agency-box {
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 30px;
          overflow: hidden;
          margin-bottom: 0;
        }
.center-btn {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

        .agency-text h2 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 18px;
          color: #fff;
          text-Align: center;
        }

        .agency-text p {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
          text-Align: center;
        }

        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }

        .marquee-item {
          width: 200px;
          height: 160px;
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

        /* ================= MOBILE ONLY ================= */

        @media (max-width: 767px) {
          section {
            padding-top: 60px !important;
          }

          .agency-box {
            padding: 16px;
            border-radius: 16px;
          }

          .agency-text h2 {
            font-size: 26px;
            margin-bottom: 10px;
          }

          .agency-text p {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 12px;
          }

          .btn {
            font-size: 14px;
            padding: 8px 14px;
          }

          .marquee-item {
            width: 120px;
            height: 90px;
            margin-right: 12px;
            border-radius: 10px;
          }

          .marquee-track {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default Agency;
