import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

const videos = [
  "/images/video/testimonial1.mp4",
  "/images/video/testimonial2.mp4",
  "/images/video/testimonial3.mp4",
  "/images/video/ASHISH RANE.mp4",
  "/images/video/Mayur Sir.mp4",
];

const logos = [
  "/images/sponsor/logo/lion.png",
  "/images/sponsor/logo/virenoo.png",
  "/images/sponsor/logo/virenoo.png",
  "/images/sponsor/logo/virenoo.png",
  "/images/sponsor/logo/virenoo.png",
];

const HomeTestimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const playWithSound = (video: HTMLVideoElement) => {
    video.muted = false;
    video.volume = 1;
    video.play();
  };

  const resetVideo = (video: HTMLVideoElement) => {
    video.pause();
    video.currentTime = 0;
    video.muted = true;
  };

  return (
    <section className="section testimonial pt-0">
      <div className="container">
        {/* HEADING */}
        <div className="testimonial-heading">
          <h2>What Our Clients Say</h2>
        </div>

        {/* SWIPER WRAPPER */}
        <div className="swiper-wrapper-outer">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={3}
            spaceBetween={24}
            loop={false}
            speed={800}
            modules={[Navigation]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {videos.map((video, i) => (
              <SwiperSlide key={i}>
                <div className="video-card">
                  <video
                    src={video}
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => playWithSound(e.currentTarget)}
                    onMouseLeave={(e) => resetVideo(e.currentTarget)}
                  />
                  <div className="video-overlay">
                    <img
                      src={logos[i]}
                      alt="Brand logo"
                      className="overlay-logo"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM ARROW — right side */}
          <button
            className="swiper-arrow-right"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            &#8250;
          </button>

          <button
            className="swiper-arrow-left"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
        </div>
      </div>

      <style jsx>{`
        /* HEADING */
        .testimonial-heading {
          text-align: center;
          margin-bottom: 40px;
          padding-top: 20px;
        }

        .testimonial-heading h2 {
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        /* OUTER WRAPPER for positioning arrows */
        .swiper-wrapper-outer {
          position: relative;
        }

        /* RIGHT ARROW */
        .swiper-arrow-right,
        .swiper-arrow-left {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: #964722ff;
          border: none;
          color: #fff;
          font-size: 36px;
          line-height: 1;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .swiper-arrow-right {
          right: -25px;
        }

        .swiper-arrow-left {
          left: -25px;
        }

        .swiper-arrow-right:hover,
        .swiper-arrow-left:hover {
          background: #b5581eff;
          transform: translateY(-50%) scale(1.1);
        }

        /* VIDEO CARD */
        .video-card {
          position: relative;
          width: 100%;
          height: 700px;
          border-radius: 20px;
          overflow: hidden;
          border: 4px solid #964722ff;
          background: #000;
          cursor: pointer;
        }

        .video-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* OVERLAY */
        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.6s ease;
          transform: translateY(0);
          z-index: 2;
        }

        .overlay-logo {
          max-width: 180px;
          width: 60%;
          height: auto;
        }

        /* HOVER → overlay slides up */
        .video-card:hover .video-overlay {
          transform: translateY(-100%);
        }

        @media (max-width: 1024px) {
          .video-card {
            height: 280px;
          }

          .overlay-logo {
            max-width: 120px;
          }

          .swiper-arrow-right {
            right: -15px;
          }

          .swiper-arrow-left {
            left: -15px;
          }
        }

        @media (max-width: 480px) {
          .swiper-arrow-right {
            right: 8px;
          }

          .swiper-arrow-left {
            left: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonial;