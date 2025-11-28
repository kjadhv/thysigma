import React from "react";
import Image from "next/image";

import one from "public/images/vpr.jpg";
import two from "public/images/lives.jpg";
import three from "public/images/eventm.jpg";
import four from "public/images/mediat.jpg";
import five from "public/images/sm.jpg";
import six from "public/images/ve2.png";

const HomeTwoPortfolio = () => {
  return (
    <section className="section portfolio portfolio-two force-normal isolate">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-12">
            <div className="item-row left">
              <Image src={one} alt="Video Production" width={400} height={400} />
              <div className="text-wrap">
                <p className="side-text">Video Production</p>
                <p className="side-desc">
                  We create high-quality videos that tell your story with impact.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12">
            <div className="item-row right">
              <div className="text-wrap">
                <p className="side-text">Live Streaming</p>
                <p className="side-desc">
                  We deliver seamless live streaming experiences for any audience.
                </p>
              </div>
              <Image src={two} alt="Live Streaming" width={400} height={400} />
            </div>
          </div>

          {/* LEFT */}
          <div className="col-12">
            <div className="item-row left">
              <Image src={three} alt="Event Management" width={400} height={400} />
              <div className="text-wrap">
                <p className="side-text">Event Management</p>
                <p className="side-desc">
                  We plan and execute events with precision and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12">
            <div className="item-row right">
              <div className="text-wrap">
                <p className="side-text">Media Technologies</p>
                <p className="side-desc">
                  We use advanced media technologies to enhance digital experiences.
                </p>
              </div>
              <Image src={four} alt="Media Technologies" width={400} height={400} />
            </div>
          </div>

          {/* LEFT */}
          <div className="col-12">
            <div className="item-row left">
              <Image src={five} alt="Social Media" width={400} height={400} />
              <div className="text-wrap">
                <p className="side-text">Social Media</p>
                <p className="side-desc">
                  We grow your brand through engaging and strategic social media.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12">
            <div className="item-row right">
              <div className="text-wrap">
                <p className="side-text">Video Editing</p>
                <p className="side-desc">
                  We craft polished edits that bring your visuals to life.
                </p>
              </div>
              <Image src={six} alt="Video Editing" width={400} height={400} />
            </div>
          </div>

        </div>
      </div>

      {/* ✅ FINAL STYLES (TRUE SINGLE LINE) */}
      <style jsx global>{`
        .isolate {
          isolation: isolate;
          position: relative;
          z-index: 1;
        }

        .force-normal,
        .force-normal * {
          animation: none !important;
          transform: none !important;
          transition: none !important;
        }

        .force-normal img {
          opacity: 1 !important;
          filter: brightness(1) contrast(1) saturate(1) !important;
          mix-blend-mode: normal !important;
          position: relative;
          z-index: 2;
        }

        /* ✅ REMOVE WIDTH LIMIT */
        .text-wrap {
          position: relative;
          z-index: 3;
          max-width: none; /* ✅ KEY FIX */
        }

        /* ✅ FORCE SINGLE LINE */
        .side-text,
        .side-desc {
          white-space: nowrap;
        }

        .side-text {
          color: #ffffff;
          font-size: 35px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .side-desc {
          color: #dcdcdc;
          font-size: 30px;
        }

        /* ✅ SMART GAP */
        .item-row {
          display: flex;
          align-items: center;
          gap: clamp(80px, 20vw, 100px); /* ✅ responsive */
          margin-bottom: 160px;
        }

        .item-row.left {
          justify-content: flex-start;
        }

        .item-row.right {
          justify-content: flex-end;
        }

        /* ✅ MOBILE + iPAD: STACK & ALLOW WRAP */
        @media (max-width: 1024px) {
          .item-row {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .item-row img {
            order: 1;
          }

          .text-wrap {
            order: 2;
            max-width: 100%;
          }

          .side-text,
          .side-desc {
            white-space: normal; /* ✅ allow wrap */
          }

          .side-text {
            font-size: 26px;
          }

          .side-desc {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;
