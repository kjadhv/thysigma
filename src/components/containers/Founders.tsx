import React from "react";
import Image from "next/image";

import founder1 from "public/images/sir.png";
import founder2 from "public/images/mam.png";

// Import company logos
import netflixLogo from "public/images/about-logo/netflix.jpg";
import iplLogo from "public/images/about-logo/ipl.png";
import itunesLogo from "public/images/about-logo/itunes.png";
import oscarsLogo from "public/images/about-logo/oscars.jpeg";
import iccLogo from "public/images/about-logo/icc.png";
import pokerLogo from "public/images/about-logo/poker.jpeg";
import bcciLogo from "public/images/about-logo/bcci.png";
import sonyLogo from "public/images/about-logo/sony.png";
import lifeokLogo from "public/images/about-logo/lifeok.jpg";
import starSportsLogo from "public/images/about-logo/starsport.jpeg";
import balajiLogo from "public/images/about-logo/balaji.jpg";
import zeeLogo from "public/images/about-logo/zee.jpg";
import mxplayer from "public/images/about-logo/mxplayer.jpg";

import hiranandaniLogo from "public/images/about-logo/hiranandani.jpg";
import bombayRealtyLogo from "public/images/about-logo/breality.png";
import lakmeLogo from "public/images/about-logo/lakme.png";
import shapoorjiLogo from "public/images/about-logo/sp.png";
import aurobindoLogo from "public/images/about-logo/ab.jpg";
import maxProteinLogo from "public/images/about-logo/maxp.png";
import pengLogo from "public/images/about-logo/peng.png";
// import agencyMasalaLogo from "public/images/about-logo/agencymasala.png";
// import socialMediaLogo from "public/images/about-logo/socialmedia.png";

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
      { name: "Netflix", logo: netflixLogo },
      { name: "IPL", logo: iplLogo },
      { name: "iTunes", logo: itunesLogo },
      { name: "Oscars", logo: oscarsLogo },
      { name: "ICC Champions League", logo: iccLogo },
      { name: "Poker Sports League", logo: pokerLogo },
      { name: "BCCI", logo: bcciLogo },
      { name: "Sony", logo: sonyLogo },
      { name: "LifeOK", logo: lifeokLogo },
      { name: "Star Sports", logo: starSportsLogo },
      { name: "Balaji Telefilms", logo: balajiLogo },
      { name: "ZEE Network", logo: zeeLogo },
      { name: "MX Player", logo: mxplayer   }
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
      "Yashica Dudhe is the visionary force behind Thy Sigma Media Services, bringing years of experience in digital marketing, content strategy, and brand communication. With a background in crafting high-impact campaigns and managing end-to-end media execution for growing brands, she leads the company's strategic direction and client relations.",
      "Her expertise lies in understanding market behaviour,  and building strong brand narratives. Yashica combines creativity with sharp operational planning, ensuring seamless execution across all media services"
    ],
    experience: [
      { name: "Hiranandani Group", logo: hiranandaniLogo },
      { name: "Bombay Realty", logo: bombayRealtyLogo },
      { name: "Lakmé", logo: lakmeLogo },
      { name: "Shapoorji Pallonji", logo: shapoorjiLogo },
      { name: "Aurobindo Realty", logo: aurobindoLogo },
      { name: "Max Protein", logo: maxProteinLogo },
      { name: "Peng Essentials", logo: pengLogo },
      // { name: "Agency Masala", logo: agencyMasalaLogo },
      // { name: "Social Media Dissect", logo: socialMediaLogo }
    ],
    image: founder2,
    align: "right",
    gridCols: 4,
  }
];

const Founders = () => {
  return (
    <section
  id="founders"
  style={{ padding: "80px 0", background: "transparent" }}
>

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

                  {/* WORKED WITH - WITH LOGOS */}
                  <div style={{ marginTop: "36px" }}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "30px",
                        color: "#ffffff",
                        marginBottom: "14px",
                        letterSpacing: "1px",
                      }}
                    >
                      WORKED WITH
                    </p>

                    <div
                      className="work-grid"
                      style={{
                        background: "transparent",
                        display: "grid",
                        gridTemplateColumns: `repeat(${founder.gridCols}, 1fr)`,
                        gap: "10px 10px",
                      }}
                    >
                      {founder.experience.map((company, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "80px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "60px",
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              src={company.logo}
                              alt={company.name}
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                width: "auto",
                                height: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WHITE DIVIDER (only between founders) */}
              {index < founders.length - 1 && (
                <div
                  className="founder-divider"
                  style={{
                    width: "100%",
                    height: "10px",
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
            grid-template-columns: repeat(4, 1fr) !important;
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