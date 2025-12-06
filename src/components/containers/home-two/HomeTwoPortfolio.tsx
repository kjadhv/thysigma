import React, { useEffect, useRef } from "react";
import Image from "next/image";

import one from "public/images/vpr.jpg";
import two from "public/images/lives.jpg";
import three from "public/images/eventm.jpg";
import four from "public/images/mediat.jpg";
import five from "public/images/sm.jpg";
import six from "public/images/ve2.png";

const HomeTwoPortfolio = () => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((row) => {
      if (row) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate');
              } else {
                entry.target.classList.remove('animate');
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(row);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="section portfolio portfolio-two isolate">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-12">
            <div className="item-row left" ref={(el) => { rowRefs.current[0] = el; }}>
              <div className="img-wrap">
                <Image src={one} alt="Video Production" width={200} height={200} />
              </div>
              <div className="text-wrap">
                <p className="side-text">Video Production</p>
                <p className="side-desc">
                  We create high-quality videos that tell your story with impact.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12">
            <div className="item-row right" ref={(el) => { rowRefs.current[1] = el; }}>
              <div className="text-wrap">
                <p className="side-text">Live Streaming</p>
                <p className="side-desc">
                  We deliver seamless live streaming experiences for any audience.
                </p>
              </div>
              <div className="img-wrap">
                <Image src={two} alt="Live Streaming" width={200} height={200} />
              </div>
            </div>
          </div>

          {/* LEFT */}
          <div className="col-12">
            <div className="item-row left" ref={(el) => { rowRefs.current[2] = el; }}>
              <div className="img-wrap">
                <Image src={three} alt="Event Management" width={200} height={200} />
              </div>
              <div className="text-wrap">
                <p className="side-text">Event Management</p>
                <p className="side-desc">
                  We plan and execute events with precision and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12">
            <div className="item-row right" ref={(el) => { rowRefs.current[3] = el; }}>
              <div className="text-wrap">
                <p className="side-text">Media Technologies</p>
                <p className="side-desc">
                  We use advanced media technologies to enhance digital experiences.
                </p>
              </div>
              <div className="img-wrap">
                <Image src={four} alt="Media Technologies" width={200} height={200} />
              </div>
            </div>
          </div>

          {/* LEFT */}
          <div className="col-12">
            <div className="item-row left" ref={(el) => { rowRefs.current[4] = el; }}>
              <div className="img-wrap">
                <Image src={five} alt="Social Media" width={200} height={200} />
              </div>
              <div className="text-wrap">
                <p className="side-text">Social Media</p>
                <p className="side-desc">
                  We grow your brand through engaging and strategic social media.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12">
            <div className="item-row right" ref={(el) => { rowRefs.current[5] = el; }}>
              <div className="text-wrap">
                <p className="side-text">Video Editing</p>
                <p className="side-desc">
                  We craft polished edits that bring your visuals to life.
                </p>
              </div>
              <div className="img-wrap">
                <Image src={six} alt="Video Editing" width={200} height={200} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .isolate {
          isolation: isolate;
          position: relative;
          z-index: 1;
        }

        .img-wrap {
          position: relative;
          margin: 0;
          padding: 0;
        }

        .img-wrap img {
          margin: 0 !important;
          padding: 0 !important;
        }

        .text-wrap {
          position: relative;
          z-index: 3;
          max-width: none;
          margin: 0;
          padding: 0;
        }

        .side-text,
        .side-desc {
          white-space: nowrap;
        }

        .side-text {
          color: #ffffff;
          font-size: 35px;
          font-weight: 600;
          margin: 0;
          padding: 0;
        }

        .side-desc {
          color: #dcdcdc;
          font-size: 30px;
          margin: 0;
          padding: 0;
        }

        .item-row {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 40px;
        }

        .item-row.left {
          justify-content: flex-start;
        }

        .item-row.right {
          justify-content: flex-end;
        }

        /* PC & iPad - Text emerges from image */
        @media (min-width: 768px) {
          /* Image slides in first */
          .item-row .img-wrap {
            opacity: 0;
            animation: imageSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .item-row img {
            border-radius: 12px;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            display: block;
          }

          /* Text emerges from image position with delay */
          .item-row .text-wrap {
            opacity: 0;
          }

          /* LEFT - Text emerges from right side of image */
          .item-row.left .text-wrap {
            animation: textFromImageLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.5s;
          }

          /* RIGHT - Text emerges from left side of image */
          .item-row.right .text-wrap {
            animation: textFromImageRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.5s;
          }

          /* Stagger each row */
          .item-row:nth-child(1) .img-wrap { animation-delay: 0.1s; }
          .item-row:nth-child(2) .img-wrap { animation-delay: 0.3s; }
          .item-row:nth-child(3) .img-wrap { animation-delay: 0.5s; }
          .item-row:nth-child(4) .img-wrap { animation-delay: 0.7s; }
          .item-row:nth-child(5) .img-wrap { animation-delay: 0.9s; }
          .item-row:nth-child(6) .img-wrap { animation-delay: 1.1s; }

          .item-row:nth-child(1) .text-wrap { animation-delay: 0.6s; }
          .item-row:nth-child(2) .text-wrap { animation-delay: 0.8s; }
          .item-row:nth-child(3) .text-wrap { animation-delay: 1s; }
          .item-row:nth-child(4) .text-wrap { animation-delay: 1.2s; }
          .item-row:nth-child(5) .text-wrap { animation-delay: 1.4s; }
          .item-row:nth-child(6) .text-wrap { animation-delay: 1.6s; }

          @keyframes imageSlideIn {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(40px);
              filter: blur(8px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
              filter: blur(0);
            }
          }

          @keyframes textFromImageLeft {
            0% {
              opacity: 0;
              transform: translateX(-150px) scale(0.8);
              filter: blur(10px);
            }
            60% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes textFromImageRight {
            0% {
              opacity: 0;
              transform: translateX(150px) scale(0.8);
              filter: blur(10px);
            }
            60% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }

          /* Hover effects */
          .item-row:hover img {
            transform: scale(1.08) rotate(2deg);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
            filter: brightness(1.1);
          }

          .item-row .text-wrap {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .item-row:hover .text-wrap {
            transform: translateY(-5px);
          }

          .item-row:hover .side-text {
            color: #ffd700;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
          }

          .side-text {
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }
        }

        /* PC ONLY - Enhanced interactions */
        @media (min-width: 1025px) {
          .item-row {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .item-row:hover {
            transform: translateY(-12px);
          }

          .item-row.left:hover img {
            transform: scale(1.08) rotate(2deg) translateX(8px);
          }

          .item-row.right:hover img {
            transform: scale(1.08) rotate(-2deg) translateX(-8px);
          }
        }

        /* MOBILE - Slide in effect on scroll */
        @media (max-width: 767px) {
          .item-row .img-wrap {
            opacity: 0;
            transform: translateX(-60px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .item-row.animate .img-wrap {
            opacity: 1;
            transform: translateX(0);
          }

          .item-row img {
            border-radius: 8px;
            display: block;
          }

          .item-row .text-wrap {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
          }

          .item-row.animate .text-wrap {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablet - Slide in effect on scroll */
        @media (min-width: 768px) and (max-width: 1024px) {
          .item-row .img-wrap {
            opacity: 0;
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .item-row.left .img-wrap {
            transform: translateX(-80px);
          }

          .item-row.right .img-wrap {
            transform: translateX(80px);
          }

          .item-row.animate .img-wrap {
            opacity: 1;
            transform: translateX(0);
          }

          .item-row .text-wrap {
            opacity: 0;
            transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
          }

          .item-row.left .text-wrap {
            transform: translateX(-60px);
          }

          .item-row.right .text-wrap {
            transform: translateX(60px);
          }

          .item-row.animate .text-wrap {
            opacity: 1;
            transform: translateX(0);
          }

          .item-row:hover {
            transform: translateY(-8px);
          }

          .item-row:hover img {
            transform: scale(1.05);
          }
        }

        /* MOBILE + IPAD STACK */
        @media (max-width: 1024px) {
          .item-row {
            flex-direction: column;
            gap: 0;
            text-align: center;
          }

          .item-row .img-wrap {
            order: 1;
          }

          .text-wrap {
            order: 2;
            max-width: 100%;
          }

          .side-text,
          .side-desc {
            white-space: normal;
          }

          .side-text {
            font-size: 26px;
          }

          .side-desc {
            font-size: 18px;
          }
        }

        /* MOBILE ONLY – REDUCED SPACE BETWEEN SECTIONS */
        @media (max-width: 767px) {
          .item-row {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;