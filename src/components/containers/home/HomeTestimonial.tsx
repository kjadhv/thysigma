import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import sthumb from "public/images/anish.jpg";
import sthumbtwo from "public/images/kartik.jpg";
import sthumbthree from "public/images/kartik.jpg";

const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };

  return (
    <section className="section testimonial pt-0 position-relative">
      {/* ===== FAST TEXT SLIDER (PC ONLY) ===== */}
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop
          centeredSlides
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="testimonial__text-slider"
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial__text-slider-single">
                <h2 className="h1">
                  <Link href="/client-feedback">
                    client&apos;s testimonial
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                speed={800}
                loop
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                onSlideChange={handleSlideChange}
                className="testimonial-s__slider"
              >

                {[sthumb, sthumbtwo, sthumbthree].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-s__slider-single">
                      <div className="row gaper align-items-center">
                        <div className="col-12 col-lg-4">
                          <div className="thumb">
                            <Image src={img} alt="Image" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-7 offset-lg-1">
                          <div className="testimonial-s__content">
                            <div className="quote">
                              {/* <i className="fa-solid fa-quote-right"></i> */}
                            </div>
                            <div className="content">
                              <h4>
                                From Live Events To Digital Content, THY SIGMA
                                Ensures Quality, Creativity, And Flawless Delivery.
                              </h4>
                            </div>
                            <div className="content-cta">
                              <h5>{i === 0 ? "Anish Gupta" : "Kartik Salve"}</h5>
                              <p>{i === 0 ? "Client" : "Senior Engineer"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="slide-group justify-content-start">
          <button className="slide-btn prev-testimonial-three">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button className="slide-btn next-testimonial-three">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>

      {/* SIDE IMAGE – PC ONLY */}
      <div className="other-section">
        <Image
          className="other-section-image"
          src={
            nextSlideIndex === 0
              ? sthumb
              : nextSlideIndex === 1
              ? sthumbtwo
              : sthumbthree
          }
          alt="Next Slide"
        />
      </div>

      {/* ✅ iPAD + MOBILE ONLY */}
      <style jsx>{`
        @media (max-width: 1024px) {

          /* hide pc-only elements */
          :global(.testimonial__text-slider-w),
          :global(.other-section) {
            display: none !important;
          }

          /* FORCE IMAGE + TEXT SIDE BY SIDE */
          :global(.testimonial-s__slider-single .row) {
            flex-direction: row;
            align-items: flex-start;
          }

          /* SMALL IMAGE */
          :global(.testimonial-s__slider .thumb) {
            width: 90px;
            margin-right: 18px;
          }

          :global(.testimonial-s__slider .thumb img) {
            width: 90px;
            height: 90px;
            border-radius: 12px;
          }

          /* TEXT */
          :global(.testimonial-s__content h4) {
            font-size: 14px;
            line-height: 1.45;
            margin-bottom: 10px;
          }

          :global(.testimonial-s__content h5) {
            font-size: 13px;
          }

          :global(.testimonial-s__content p) {
            font-size: 12px;
            opacity: 0.75;
          }

          :global(.quote i) {
            font-size: 20px;
            margin-bottom: 6px;
          }

          :global(.slide-group) {
            justify-content: center !important;
            margin-top: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonial;
