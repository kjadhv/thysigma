import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "swiper/swiper-bundle.css";
import grp from "public/images/process.jpg";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  useEffect(() => {
    if (window.innerWidth <= 576) return;

    // Start hidden and invisible
    gsap.set(".process-bg-layer", {
      visibility: "hidden",
    });

    gsap.set(".process-shared-img", {
      opacity: 0,
    });

    // Show/hide image based on service section visibility
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
        gsap.to(".process-bg-layer", { visibility: "hidden", delay: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.to(".process-bg-layer", { visibility: "hidden", delay: 0.3 });
      },
    });

    // Pin the image so it stays fixed
    ScrollTrigger.create({
      trigger: ".service-t",
      start: "top top",
      end: "bottom top",
      pin: ".process-bg-layer",
      pinSpacing: false,
    });
  }, []);

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      
      {/* Background Image Layer */}
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
          style={{
            objectFit: "cover",
            opacity: 0,
          }}
        />
      </div>

      {/* Service Section */}
      <section className="section service-t" style={{ position: "relative", zIndex: 2 }}>
        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <div className="row">
            <div className="col-12">
              <div className="service-t__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-service-t",
                    prevEl: ".prev-service-t",
                  }}
                  className="service-t__slider"
                  breakpoints={{
                    1400: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            01
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Branding</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Define Idea</li>
                          <li>Competitor Reserach</li>
                          <li>Target Audience</li>
                          <li>Idea Validation</li>
                          <li>Customer Value</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            02
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Live Event Production</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Stage Management</li>
                          <li>Event Control</li>
                          <li>Audio Visual</li>
                          <li>Technical Crew</li>
                          <li>Editing</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            03
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Design</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Hi-Fidelity Wireframe</li>
                          <li>Design System</li>
                          <li>Final Presentation</li>
                          <li>Final Delivery</li>
                          <li>Post Delivery Support</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            04
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Broadcasting</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Transmission</li>
                          <li>Telecast</li>
                          <li>Single Routing</li>
                          <li>Post Delivery Support</li>
                          <li>Control</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            05
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Branding</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Define Idea</li>
                          <li>Competitor Reserach</li>
                          <li>Target Audience</li>
                          <li>Idea Validation</li>
                          <li>Customer Value</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            06
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Content Creation</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Story Telling</li>
                          <li>Ideation</li>
                          <li>Story board</li>
                          <li>User Flow</li>
                          <li>Cinematography</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            07
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Media Mangement</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Archiving</li>
                          <li>Design System</li>
                          <li>Final Presentation</li>
                          <li>Final Delivery</li>
                          <li>Post Delivery Support</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            08
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href="our-services">Broadcasting</Link>
                          </h4>
                        </div>
                        <ul>
                          <li>Transmission</li>
                          <li>Telecast</li>
                          <li>Single Routing</li>
                          <li>Post Delivery Support</li>
                          <li>Control</li>
                        </ul>
                        <div className="cta"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-service-t">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-service-t">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default OurServices;