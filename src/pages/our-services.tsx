import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

import OurServicesCards from "@/components/containers/OurServicesCards";
import WhyChooseUs from "@/components/containers/WhyChooseUs";
// import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import ContactMain from "@/components/containers/ContactMain";

const OurServices = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />

      {/* ✅ PARALLAX WRAPPER */}
      <div className="services-why-parallax">
        <div className="parallax-bg" />
        <OurServicesCards />
        <WhyChooseUs />
      </div>

      {/* <HomeTestimonial /> */}
      <ContactMain />

      {/* ✅ INLINE STYLES */}
      <style jsx>{`
        .services-why-parallax {
          position: relative;
          overflow: hidden;
        }

        /* ✅ PARALLAX BACKGROUND */
        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200%;
          background: url("/images/stream.jpg") center / cover no-repeat;
          background-attachment: fixed;
          z-index: -1;
        }

        /* ✅ SECTIONS ABOVE BG */
        .services-why-parallax :global(section) {
          position: relative;
          z-index: 2;
        }

        /* ✅ SERVICES OVERLAY */
        :global(.service-t)::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.85)
          );
          z-index: 0;
        }

        /* ✅ WHY CHOOSE US OVERLAY */
        :global(.why-choose)::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.75)
          );
          z-index: 0;
        }

        /* ✅ CONTENT ABOVE OVERLAY */
        :global(.service-t > *),
        :global(.why-choose > *) {
          position: relative;
          z-index: 2;
        }

        /* ✅ MOBILE SAFE */
        @media (max-width: 1024px) {
          .parallax-bg {
            background-attachment: scroll;
            height: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default OurServices;
