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

export default function HomeSponsor() {
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
          loop
          speed={3000}
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            1400: { slidesPerView: 6 },
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            0: { slidesPerView: 3 },
          }}
        >
          {[...logoData, ...logoData].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="logo-box">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={120}   // ✅ Desktop size SAME as before
                  height={70}
                  style={{ objectFit: "contain" }}
                />
                <p>{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ INLINE CSS */}
      <style jsx global>{`
        /* ---------- DESKTOP (UNCHANGED) ---------- */
        .logo-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .logo-box p {
          margin-top: 10px;
          font-size: 16px; /* ✅ SAME as before */
          color: #fff;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
        }

        /* ---------- iPAD ---------- */
        @media (max-width: 1024px) {
          .logo-box img {
            width: 90px !important;
            height: 52px !important;
          }

          .logo-box p {
            font-size: 13px !important;
            margin-top: 6px;
          }
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 767px) {
          .swiper-slide {
            width: auto !important;
            padding: 0 4px !important;
          }

          .logo-box img {
            width: 64px !important;
            height: 36px !important;
          }

          .logo-box p {
            font-size: 10px !important;
            margin-top: 2px;
          }

          .sponsor {
            padding-top: 10px !important;
            padding-bottom: 12px !important;
            min-height: 160px !important;
          }
        }
      `}</style>
    </section>
  );
}
