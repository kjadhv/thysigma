import React, { useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import HomeTwoModal from "./HomeTwoModal";

const HomeTwoOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth <= 576) return;

      document.querySelectorAll(".offer__cta-single").forEach((item) => {
        const rect = item.getBoundingClientRect();
        const dx = event.clientX - rect.x;
        const dy = event.clientY - rect.y;
        const thirdChild = item.children[2] as HTMLElement;

        if (thirdChild) {
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    "Live Event Production",
    "Broadcasting",
    "Content Creation",
    "Post-Production",
    "Streaming",
    "Digital Distribution",
    "Media Management And Technology",
    "Broadcast Infrastructure",
    "Specialized Services",
    "Live Event Management",
    "Video Editing",
    "Photography",
  ];

  return (
    <>
      {/* ✅ PROCESS IMAGE STARTS FROM HERE (NOT FIRST SCREEN) */}
      <HomeTwoModal />

      <section
        className="section offer-two"
        style={{
          position: "relative",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        {/* HEADING */}
        <div
          className="container"
          style={{ position: "relative", zIndex: 3 }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="section__header text-center">
                <span className="sub-title">
                  what we offer
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2 className="title title-anim">our main services</h2>
              </div>
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <div
          className="offer-two__slider-w"
          dir="rtl"
          style={{
            position: "relative",
            zIndex: 3,
          }}
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            speed={13000}
            loop
            centeredSlides
            modules={[Autoplay]}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            className="offer-two__slider"
          >
            {services.map((title, i) => (
              <SwiperSlide key={i}>
                <div className="offer-two__slider-single offer__cta">
                  <div className="offer__cta-single">
                    <span className="sub-title">
                      {String(i + 1).padStart(2, "0")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2>
                      <Link href="our-services">{title}</Link>
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeTwoOffer;
