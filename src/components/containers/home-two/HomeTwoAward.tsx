import React from "react";
import Image from "next/image";
import Link from "next/link";
import team from "public/images/wedo1.jpg";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award" style={{ background: "#000" }}>
      <div className="container">
        <div className="row gaper align-items-center">

          {/* IMAGE */}
          <div className="col-12 col-lg-6">
            <div className="team">
              <div className="team-img-wrapper">
                <Image
                  src={team}
                  alt="What We Do"
                  fill
                  className="team-img"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT <i className="fa-solid fa-arrow-right"></i>
              </span>

              <h2 className="title">
                WHAT WE <span>DO</span>
              </h2>

              <div className="paragraph">
                <p>
                  Comprehensive Media Solutions Covering Every Stage From Content
                  Creation To Global Delivery.
                </p>
              </div>

              <div className="award__content-meta">
                <div className="single">
                  <h4>Create</h4>
                  <h4>We bring</h4>
                  <p>Ideas To Life</p>
                </div>

                <div className="single">
                  <h4>Build</h4>
                  <h4>We develop</h4>
                  <p>Strong Scalable Solutions</p>
                </div>

                <div className="single">
                  <h4>Elevate</h4>
                  <h4>We Enhance</h4>
                  <p>Your Brand</p>
                </div>
              </div>

              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DECOR */}
      <Image src={star} alt="star" className="star" />
      <Image src={star} alt="star" className="star-two" />
      <Image src={dotlarge} alt="dot" className="dot" />
      <Image src={dotlarge} alt="dot" className="dot-two" />

      {/* STYLES */}
      <style jsx>{`
        /* DESKTOP – unchanged */
        @media (min-width: 769px) {
          .team-img-wrapper {
            width: 100%;
            height: auto;
            aspect-ratio: 900 / 550;
            position: relative;
          }

          .team-img {
            object-fit: cover;
          }
        }

        /* MOBILE – unchanged */
        @media (max-width: 768px) {
          .team {
            margin-bottom: 30px;
          }

          .team-img-wrapper {
            width: 100%;
            height: 200px;
            position: relative;
            background: #000;
          }

          .team-img {
            object-fit: contain !important;
            object-position: center;
          }

          .award__content-meta {
            display: flex;
            flex-direction: column;
            position: relative;
            padding-left: 20px;
          }

          .award__content-meta::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #ff7425;
          }

          .award__content-meta .single {
            padding: 16px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoAward;
