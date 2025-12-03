import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import img1 from "public/images/wedo.jpg";
import img2 from "public/images/quality.jpg";
import img3 from "public/images/paraimg.jpeg";
import img4 from "public/images/wedo.jpg";

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section">
      <div className="container">
        <div
          ref={ref}
          className="why-box"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "1s ease",
          }}
        >
          <div className="row align-items-center why-row">

            {/* LEFT – IMAGE GRID */}
            <div className="col-12 col-lg-5 why-images">
              <div className="image-grid">
                {[img1, img2, img3, img4].map((img, i) => (
                  <div className="image-cell" key={i}>
                    <Image src={img} alt="why choose us" fill />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            <div className="col-12 col-lg-7 why-content">
              <h2 className="why-title">Why Choose Us</h2>

              <div className="row why-points">
                <div className="col-12 col-md-6">
                  <span className="num">01</span>
                  <h4>Proven Expertise</h4>
                  <p>
                    16+ years of media-tech expertise delivering quality you can see
                    and reliability you can feel.
                  </p>
                </div>

                <div className="col-12 col-md-6">
                  <span className="num">02</span>
                  <h4>Premium Yet Accessible</h4>
                  <p>
                    A premium yet accessible media-tech partner focused on flawless
                    execution and creative storytelling.
                  </p>
                </div>

                <div className="col-12 col-md-6">
                  <span className="num">03</span>
                  <h4>End-to-End Services</h4>
                  <p>
                    Livestreaming, photography, videography, post-production — all
                    under one roof.
                  </p>
                </div>

                <div className="col-12 col-md-6">
                  <span className="num">04</span>
                  <h4>One Trusted Partner</h4>
                  <p>
                    Content repurposing, subtitling, distribution, video reliability
                    and audio engineering — everything with one partner.
                  </p>
                </div>
              </div>

              {/* <p className="closing-line">
                Choosing us means gaining a production team that turns every event
                into a digital masterpiece.
              </p> */}
            </div>

          </div>
        </div>
      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        /* BASE (PC unchanged) */
        .why-section {
          background: #000;
          padding: 90px 0;
        }

        .why-box {
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 56px;
        }

        .image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .image-cell {
          position: relative;
          height: 140px;
          border-radius: 14px;
          overflow: hidden;
        }

        .image-cell :global(img) {
          object-fit: cover;
        }

        .why-title {
          color: #fff;
          font-size: 38px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .num {
          color: #ff7425;
          font-size: 14px;
          font-weight: 600;
        }

        h4 {
          color: #fff;
          font-size: 18px;
          margin: 6px 0;
        }

        p {
          color: rgba(255,255,255,0.75);
          font-size: 15px;
          line-height: 1.6;
        }

        .why-points > div {
          margin-bottom: 24px;
        }

        .closing-line {
          color: #fff;
          font-style: italic;
          margin-top: 12px;
        }

        /* ✅ iPAD + MOBILE — TEXT ABOVE IMAGES */
        @media (max-width: 1024px) {
          .why-row {
            flex-direction: column;
          }

          .why-content {
            order: 1;
            margin-bottom: 28px;
          }

          .why-images {
            order: 2;
          }
        }

        /* ✅ iPAD TUNING */
        @media (min-width: 768px) and (max-width: 1024px) {
          .why-section {
            padding: 70px 0;
          }

          .why-box {
            padding: 40px;
          }

          .image-cell {
            height: 120px;
          }

          .why-title {
            font-size: 32px;
          }

          h4 {
            font-size: 16px;
          }

          p {
            font-size: 14px;
          }
        }

        /* ✅ MOBILE */
        @media (max-width: 767px) {
          .why-section {
            padding: 60px 0;
          }

          .why-box {
            padding: 24px;
          }

          .why-title {
            font-size: 26px;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
