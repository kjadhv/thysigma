import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const videos = [
  "/images/video/testimonial1.mp4",
  "/images/video/testimonial2.mp4",
  "/images/video/testimonial3.mp4",
];

const logos = [
  "/images/sponsor/logo/lion.png",
  "/images/sponsor/logo/virenoo.png",
  "/images/sponsor/logo/virenoo.png",
];

const HomeTestimonial = () => {
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
         {/* ✅ HEADING */}
        <div className="testimonial-heading">
          <h2>What Our Clients Say</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          loop={false}
          speed={800}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-testimonial-three",
            prevEl: ".prev-testimonial-three",
          }}
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

                {/* OVERLAY WITH LOGO */}
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
      </div>

      {/* ✅ STYLES */}
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

        /* BLACK OVERLAY */
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

        /* LOGO */
        .overlay-logo {
          max-width: 180px;
          width: 60%;
          height: auto;
        }

        /* HOVER → OVERLAY + LOGO GO UP */
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
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonial;
