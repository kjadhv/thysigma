import React from "react";
import Layout from "@/components/layout/Layout";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import HomeTwoOffer from "@/components/containers/home-two/HomeTwoOffer";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import HomeTwoTestimonial from "@/components/containers/home-two/HomeTwoTestimonial";
import NextPageNull from "@/components/containers/home/NextPageNull";
import ContactMain from "@/components/containers/ContactMain";

// ⬇️ this is your CONTACT US *MEDIA* swiper
// import HomeTwoContactMedia from "@/components/containers/ContactMain";
 // 👆 use YOUR REAL FILE NAME here

const HomeTwo = () => {
  return (
    <Layout header={2} footer={2} video={true}>
      <HomeTwoBanner />

      {/* ✅ BLACK – NO PARALLAX */}
      <HomeTwoAward />

      {/* ========== PARALLAX ZONE START ========== */}
      <section
        className="services-parallax-wrapper"
        style={{
          position: "relative",
          isolation: "isolate",
          // zIndex: 1,
        }}
      >
        {/* ✅ Background image */}
        <HomeTwoModal />

        {/* ✅ Parallax-covered sections ONLY */}
        <HomeTwoOffer />
        <HomeTwoPortfolio />
        {/* <HomeTwoContactMedia />   ✅ media contact swiper */}
      </section>
      {/* ========== PARALLAX ZONE END ========== */}

      {/* ❌ NO PARALLAX BELOW */}
      {/* <HomeTwoPortfolio /> */}
      <HomeSponsor />
      <HomeTwoTestimonial />     {/* ✅ stays clean */}
      <NextPageNull />
      <ContactMain />
    </Layout>
  );
};

export default HomeTwo;
