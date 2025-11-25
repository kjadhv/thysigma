import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dawn from "public/images/banner/dawn.png";

gsap.registerPlugin(ScrollTrigger);
const HomeTwoBanner = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".banner-two").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.set(".g-ban-one", {
        y: "-10%",
      });

      tl.to(".imae", {
        opacity: 0,
        y: "300%",

        duration: 2,
      });
    }
  }, []);

  return (
    <section
      className="banner-two"
      style={{ backgroundImage: "url('/images/banner/banner-two-bg.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-two-inner">
              <div className="banner-two__meta">
                <div className="thumb imae">
                  <video autoPlay loop muted controls>
                    <source src="/images/banner-video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="cta section__content-cta m-0">
                  <div className="single">
                    <h5 className="fw-7">16+</h5>
                    <p className="fw-5">Years of expertise</p>
                  </div>
                  <div className="single">
                    <h5 className="fw-7">10+</h5>
                    <p className="fw-5">Completed projects</p>
                  </div>
                </div>
              </div>
              <div className="banner-two__content">
                <h1 className="title-anim">
                  OUR <span> THY SIGMA</span> MEDIA SERVICES
                </h1>
                <div className="banner-two__content-cta section__content-cta">
                  <div className="paragraph">
                    <p>
                      THYSIGMA creates high-performance digital experiences with a focus on luxury design, clean interfaces, and seamless user interaction.
                    </p>
                  </div>
                  <div className="arrow-wrapper d-none d-lg-block">
                    <span className="arrow"></span>
                  </div>
                  <div className="cta">
                    <Link href="contact-us" className="btn btn--tertiary">
                      book a call now
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dawn} alt="Image" className="dawn" />
    </section>
  );
};

export default HomeTwoBanner;
