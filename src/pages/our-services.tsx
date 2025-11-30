import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FlipBook from "@/components/containers/home/FlipBook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "swiper/swiper-bundle.css";
import grp from "public/images/process.jpg";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 576) return;

    gsap.set(".process-bg-layer", { visibility: "hidden" });
    gsap.set(".process-shared-img", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".service-t",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.set(".process-bg-layer", { visibility: "visible" });
        gsap.to(".process-shared-img", { opacity: 0.25, duration: 0.3 });
      },
      onEnterBack: () => {
        gsap.set(".process-bg-layer", { visibility: "visible" });
        gsap.to(".process-shared-img", { opacity: 0.25, duration: 0.3 });
      },
      onLeave: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.set(".process-bg-layer", { visibility: "hidden", delay: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.set(".process-bg-layer", { visibility: "hidden", delay: 0.3 });
      },
    });

    ScrollTrigger.create({
      trigger: ".service-t",
      start: "top top",
      end: "bottom top",
      pin: ".process-bg-layer",
      pinSpacing: false,
    });
  }, []);

  const cardStyle = {
    height: 500,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between" as const,
  };

  const titleStyle = {
    minHeight: 56,
    display: "flex",
    alignItems: "center" as const,
  };

  const linkClampStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  };

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />

      {/* Background */}
      <div
        className="process-bg-layer"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        <Image
          src={grp}
          alt="process"
          fill
          priority
          className="process-shared-img"
          style={{ objectFit: "cover", opacity: 0 }}
        />
      </div>

      {/* Services Cards Slider */}
      <section className="section service-t" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            speed={800}
            loop
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ nextEl: ".next-service-t", prevEl: ".prev-service-t" }}
            breakpoints={{
              1400: { slidesPerView: 4 },
              1200: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
            }}
          >

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">01 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Branding</Link></h4>
                  </div>
                  <ul>
                    <li>Define Idea</li>
                    <li>Competitor Research</li>
                    <li>Target Audience</li>
                    <li>Idea Validation</li>
                    <li>Customer Value</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">02 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Live Event Production</Link></h4>
                  </div>
                  <ul>
                    <li>Stage Management</li>
                    <li>Event Control</li>
                    <li>Audio Visual</li>
                    <li>Technical Crew</li>
                    <li>Editing</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">03 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Design</Link></h4>
                  </div>
                  <ul>
                    <li>Hi-Fidelity Wireframe</li>
                    <li>Design System</li>
                    <li>Final Presentation</li>
                    <li>Final Delivery</li>
                    <li>Post Delivery Support</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">04 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Broadcasting</Link></h4>
                  </div>
                  <ul>
                    <li>Transmission</li>
                    <li>Telecast</li>
                    <li>Single Routing</li>
                    <li>Post Delivery Support</li>
                    <li>Control</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">05 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Branding</Link></h4>
                  </div>
                  <ul>
                    <li>Define Idea</li>
                    <li>Competitor Research</li>
                    <li>Target Audience</li>
                    <li>Idea Validation</li>
                    <li>Customer Value</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">06 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Content Creation</Link></h4>
                  </div>
                  <ul>
                    <li>Story Telling</li>
                    <li>Ideation</li>
                    <li>Story Board</li>
                    <li>User Flow</li>
                    <li>Cinematography</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">07 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Media Management</Link></h4>
                  </div>
                  <ul>
                    <li>Archiving</li>
                    <li>Design System</li>
                    <li>Final Presentation</li>
                    <li>Final Delivery</li>
                    <li>Post Delivery Support</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-t-single-wrapper">
                <div className="service-t__slider-single" style={cardStyle}>
                  <div className="intro">
                    <span className="sub-title">08 <i className="fa-solid fa-arrow-right" /></span>
                    <h4 style={titleStyle}><Link href="our-services" style={linkClampStyle}>Broadcasting</Link></h4>
                  </div>
                  <ul>
                    <li>Transmission</li>
                    <li>Telecast</li>
                    <li>Single Routing</li>
                    <li>Post Delivery Support</li>
                    <li>Control</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="slide-group">
          <button className="slide-btn prev-service-t">
            <i className="fa-light fa-angle-left" />
          </button>
          <button className="slide-btn next-service-t">
            <i className="fa-light fa-angle-right" />
          </button>
        </div>
      </section>

      {/* FlipBook Section */}
      <FlipBook />

    </Layout>
  );
};

export default OurServices;