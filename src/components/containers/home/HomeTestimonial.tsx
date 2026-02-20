import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";

const videos = [
  "/images/video/testimonial1.mp4",
  "/images/video/testimonial2.mp4",
  "/images/video/testimonial3.mp4",
  "/images/video/ASHISH RANE.mp4",
  "/images/video/Mayur sir.mp4",
];

const logos = [
  "/images/sponsor/logo/lion.png",
  "/images/sponsor/logo/virenoo.png",
  "/images/sponsor/logo/virenoo.png",
  // "/images/sponsor/logo/virenoo.png",
  // "/images/sponsor/logo/virenoo.png",
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
        <div className="testimonial-grid">
  {videos.map((video, i) => (
    <div className="video-card" key={i}>
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
  ))}
</div>

      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
       /* HEADING */
       .testimonial-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}

/* First row - 3 videos */
.testimonial-grid .video-card:nth-child(1),
.testimonial-grid .video-card:nth-child(2),
.testimonial-grid .video-card:nth-child(3) {
  grid-column: span 2;
}

/* Second row - centered */
.testimonial-grid .video-card:nth-child(4) {
  grid-column: 2 / span 2;
}

.testimonial-grid .video-card:nth-child(5) {
  grid-column: 4 / span 2;
}

/* Tablet */
@media (max-width: 1024px) {
  .testimonial-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-grid .video-card {
    grid-column: auto !important;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}
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
