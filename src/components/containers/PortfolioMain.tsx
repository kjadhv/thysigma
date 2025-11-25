import React from "react";
import Image from "next/image";
import Link from "next/link";
import socialm from "public/images/socialm.png";
import cameraman from "public/images/cameraman.jpg";
import editing from "public/images/editing.jpg";
import process from "public/images/process.jpg";

import like from "public/images/like.png";
import grp from "public/images/grp.jpg";

const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={socialm} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">SOCIAL MEDIA</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={cameraman} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">CAMERA</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={editing} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">VIDEO EDITING</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={process} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">TEAM WORK</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={like} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">MEDIA SERVICES</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={grp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">OUR WORK</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={socialm} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">INFLUENCER</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="our-services">
                  <Image src={process} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="our-services">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="our-services">TEAM WORK</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
