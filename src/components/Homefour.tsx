import React from "react";

import phone from "public/images/quality.jpg";
import mail from "public/images/quality.jpg";
import location from "public/images/quality.jpg";
import time from "public/images/quality.jpg";

const HomeFour = () => {
  const items = [
    { title: "Videography", bg: phone },
    { title: "Photography", bg: mail },
    { title: "Editing", bg: location },
    { title: "Social Media Marketing", bg: time },
  ];

  return (
    <div className="home-four">
      <div className="home-four__grid">
        {items.map((item, i) => (
          <div
            key={i}
            className="home-four__box"
            style={{ backgroundImage: `url(${item.bg.src})` }}
          >
            <div className="overlay"></div>
            <div className="content">
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .home-four {
          width: 100%;
        }

        /* ✅ FORCE 2 × 2 ALWAYS */
        .home-four__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .home-four__box {
          position: relative;
          min-height: 180px;
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(204, 89, 12, 0.99);
        }

        /* dark overlay */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          transition: background 0.35s ease;
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        h4 {
          margin-top: 14px;
          font-size: 25px;
          font-weight: 600;
          color: #fff;
        }

        /* hover + tap */
        .home-four__box:hover .overlay,
        .home-four__box:active .overlay {
          background: rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 767px) {
          h4 {
            font-size: 14px;
          }

          .home-four__box {
            min-height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeFour;
