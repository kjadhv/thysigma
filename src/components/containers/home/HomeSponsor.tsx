import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import one from "public/images/sponsor/logo/afs.png";
import two from "public/images/sponsor/logo/kem.png";
import three from "public/images/sponsor/logo/lion.png";
import four from "public/images/sponsor/logo/mmafi1.jpg";
import five from "public/images/sponsor/logo/nmimsori.jpeg";
import six from "public/images/sponsor/logo/smp.jpeg";
import seven from "public/images/sponsor/logo/tcf.jpeg";
import eight from "public/images/sponsor/logo/wako.png";
import nine from "public/images/sponsor/logo/ffl.jpeg";
import ten from "public/images/sponsor/logo/sndt.jpeg";

const logoData = [
  { img: one, name: "Alpha Fighting Series" },
  { img: two, name: "Kings Expo Media" },
  { img: three, name: "Lion Heart MMA" },
  { img: four, name: "MMA Federation India" },
  { img: five, name: "NMIMS.MPSTME" },
  { img: six, name: "Shivmudra Pratishthan" },
  { img: seven, name: "True Combat Fitness" },
  { img: eight, name: "WAKO India" },
  { img: nine, name: "Friends Football League" },
  { img: ten, name: "SNDT Xuberance" },
];

const HomeSponsor = () => {
  return (
    <section
      className="sponsor section pb-0"
      style={{
        background: "#000",
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        paddingTop: "30px",
        paddingBottom: "40px",
        minHeight: "290px",
      }}
    >
      <div className="container-fluid">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={3000}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1400: { slidesPerView: 6 },
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            576: { slidesPerView: 3 },
          }}
        >
          {[...logoData, ...logoData].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="uniform-logo">
                {/* ✅ IMAGE AREA */}
                <div className="logo-img">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="180px"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* ✅ TEXT BELOW IMAGE */}
                <p className="logo-text">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ FIXED & CLEAN CSS */}
      <style jsx global>{`
        .uniform-logo {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ✅ Logo size stays SAME */
        .logo-img {
          position: relative;
          height: 130px;   /* logo visual height */
          width: 100%;
        }

        .logo-img img {
          opacity: 1 !important;
          filter: none !important;
          transform: none !important;
        }

        /* ✅ Text clearly below logo */
        .logo-text {
          margin-top: 10px;
          font-size: 16px;
          color: #ffffff;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ✅ Mobile */
        @media (max-width: 768px) {
          .logo-img {
            height: 85px;
          }

          .logo-text {
            font-size: 13px;
          }

          .sponsor {
            min-height: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSponsor;
