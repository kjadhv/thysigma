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
        <div className="row gaper align-items-center award-row">

          {/* IMAGE */}
          <div className="col-12 col-lg-6 award-image">
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
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1 award-content">
            <div className="award__content section__content">
                <Link
      href="/portfolio"
      className="sub-title"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      WE PROUD THAT
      <i className="fa-solid fa-arrow-right"></i>
    </Link>

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
                  <h4>Assemble</h4>
                  <h4>We Compile</h4>
                  <p>Your Ideas</p>
                </div>

                <div className="single">
                  <h4>Build</h4>
                  <h4>Customizable</h4>
                  <p>Solutions For You</p>
                </div>

                <div className="single">
                  <h4>Create</h4>
                  <h4>We Bring</h4>
                  <p>Your Story To Life</p>
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

      {/* ✅ STYLES */}
      <style jsx>{`
        /* ================= DESKTOP + iPAD (UNCHANGED) ================= */
        @media (min-width: 769px) {
          .team-img-wrapper {
            width: 100%;
            aspect-ratio: 900 / 550;
            position: relative;
          }

          .team-img {
            object-fit: cover;
          }
        }

        /* ================= MOBILE ONLY ================= */
        @media (max-width: 768px) {

          .award-row {
            flex-direction: column;
          }

          .award-image {
            order: 1;
          }

          .award-content {
            order: 2;
          }

          /* IMAGE */
          .team-img-wrapper {
            width: 100%;
            height: 200px;
            position: relative;
            margin-bottom: 18px;
          }

          .team-img {
            object-fit: cover;
          }

          /* TEXT */
          .award__content {
            text-align: left;
          }

          .sub-title {
            margin-bottom: 10px;
            display: inline-flex;
          }

          .title {
            font-size: 28px;
            margin-bottom: 12px;
          }

          .paragraph p {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          /* CREATE / BUILD / ELEVATE */
          .award__content-meta {
            display: flex;
            justify-content: space-between;
            gap: 12px;
          }

          .award__content-meta::before {
            display: none;
          }

          .award__content-meta .single h4 {
            font-size: 14px;
          }

          .award__content-meta .single p {
            font-size: 13px;
          }

          /* ✅ REDUCE SPACE BELOW KNOW MORE */
          .section__content-cta {
            margin-top: 14px;
            margin-bottom: 6px; /* ✅ this line fixes it */
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoAward;
