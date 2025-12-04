import React from "react";
import Image from "next/image";

import founder1 from "public/images/sir.png";
import founder2 from "public/images/mam.png";

const founders = [
  {
    name: "Kumaresh Devendran",
    role: "Founder & CEO",
    tagline:
      "Where broadcast-grade production meets creative storytelling, for unforgettable memories.",
    bio: [
      "With 16+ years navigating the cutting edge of media-technology, Kumaresh Devendran is the driving force behind Thy Sigma. As Founder & CEO, he blends technical mastery with visionary direction, turning events into immersive digital experiences.",
      "From multi-camera shoots and live-stream switching to final-cut edits and social-ready deliverables, Kumaresh ensures every project delivers on time and on brand — because for him, every frame matters."
    ],
    experience: [
      "Netflix",
      "IPL",
      "iTunes",
      "Oscars",
      "ICC Champions League",
      "Poker Sports League",
      "BCCI",
      "Sony",
      "LifeOK",
      "Star Sports",
      "Balaji Telefilms",
      "ZEE Network"
    ],
    image: founder1,
    align: "left",
    gridCols: 4,
  },
  {
    name: "Yashica Dudhe",
    role: "Co-Founder & COO",
    tagline:
      "Every project delivered by Thy Sigma upholds top-tier impact and influence.",
    bio: [
      "Yashica Dudhe is the visionary force behind Thy Sigma Media Services, bringing years of experience in digital marketing, content strategy, and brand communication. With a background in crafting high-impact campaigns and managing end-to-end media execution for growing brands, she leads the company’s strategic direction and client relations.",
      "Her expertise lies in understanding market behaviour,  and building strong brand narratives. Yashica combines creativity with sharp operational planning, ensuring seamless execution across all media services"
    ],
    experience: [
      "Hiranandani Group",
      "Bombay Realty",
      "Lakmé",
      "Shapoorji Pallonji",
      "Aurobindo Realty",
      "Max Protein",
      "Peng Essentials",
      "Agency Masala",
      "Social Media Dissect"
    ],
    image: founder2,
    align: "right",
    gridCols: 3,
  }
];

const Founders = () => {
  return (
    <section style={{ padding: "80px 0", background: "transparent" }}>
      <div className="container" style={{ maxWidth: "1400px" }}>

        {founders.map((founder, index) => {
          const isLeft = founder.align === "left";

          return (
            <React.Fragment key={index}>
              {/* FOUNDER BLOCK */}
              <div
                className="row align-items-start"
                style={{ marginBottom: "100px" }}
              >
                {/* IMAGE */}
                <div
                  className={`col-12 col-md-5 ${isLeft ? "" : "order-md-2"}`}
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "18px",
                    }}
                  />
                </div>

                {/* TEXT */}
                <div
                  className={`col-12 col-md-7 ${
                    isLeft ? "ps-md-4" : "pe-md-4 order-md-1"
                  }`}
                >
                  <p
                    style={{
                      color: "#ff4d5a",
                      fontWeight: 600,
                      fontSize: "18px",
                      marginBottom: "14px",
                    }}
                  >
                    {founder.tagline}
                  </p>

                  <h2
                    style={{
                      fontSize: "46px",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginBottom: "8px",
                    }}
                  >
                    {founder.name}
                  </h2>

                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#cccccc",
                      marginBottom: "26px",
                    }}
                  >
                    {founder.role}
                  </p>

                  {founder.bio.map((text, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "18px",
                        color: "#dddddd",
                        lineHeight: "1.85",
                        marginBottom: "16px",
                      }}
                    >
                      {text}
                    </p>
                  ))}

                  {/* WORKED WITH */}
                  <div style={{ marginTop: "36px" }}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#ffffff",
                        marginBottom: "14px",
                        letterSpacing: "1.2px",
                      }}
                    >
                      WORKED WITH
                    </p>

                    <div
                      style={{
                        background: "#000",
                        display: "grid",
                        gridTemplateColumns: `repeat(${founder.gridCols}, 1fr)`,
                        borderTop: "1px solid #333",
                        borderLeft: "1px solid #333",
                      }}
                    >
                      {founder.experience.map((company, i) => (
                        <div
                          key={i}
                          style={{
                            color: "#ffffff",
                            fontSize: "14.5px",
                            padding: "14px 10px",
                            textAlign: "center",
                            borderRight: "1px solid #333",
                            borderBottom: "1px solid #333",
                          }}
                        >
                          {company}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WHITE DIVIDER (only between founders) */}
              {index < founders.length - 1 && (
                <div
                  style={{
                    width: "100%",          // ✅ controlled width
                    height: "10px",         // ✅ thickness
                    background: "rgba(233, 225, 225, 1)",
                    margin: "0 auto 120px auto",
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* MOBILE */}
      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 50px 0;
          }

          h2 {
            font-size: 36px !important;
            text-align: center;
          }

          p {
            text-align: center;
            font-size: 16px !important;
          }

          .row {
            margin-bottom: 40px !important;
          }

          .work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .founder-divider {
            margin: 0 auto 40px auto !important;
            height: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Founders;
