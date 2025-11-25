import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ball from "public/images/ball.png";

const HomeTwoOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer-two">
      <div className="container">
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
      <div className="offer-two__slider-w" dir="rtl">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider"
        >
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Live Event Production</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Broadcasting</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Content Creation</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Post-Production</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Streaming</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Digital Distribution</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Media Management And Technology</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Broadcast Infrastructure</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Specialized Services</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Live Event Management</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Broadcasting</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Photography</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="offer-two__slider-rtl-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider-rtl"
        >
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Broadcasting</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Product Design</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Digital Marketing</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Live Event Management</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Media Management</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Custom Solutions</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Ecommerce Solutions</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Photography</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Live Event Production</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Live Event Management</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Ecommerce Solutions</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Photography</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTwoOffer;
