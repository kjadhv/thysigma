import React from "react";
import Image from "next/image";
import Link from "next/link";
import team from "public/images/wedo1.jpg";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="team dir-rtl">
              <Image src={team} alt="Image"  width={900}     // decrease size here
  height={550} className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                WHAT WE <span>DO</span>
              </h2>
              <div className="paragraph">
                <p>
                  Comprehensive Media Solutions Covering Every Stage From Content Creation To Gloabl Delivery.
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
                  <h4>We develeop</h4>
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
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
