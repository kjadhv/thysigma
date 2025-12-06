import React from "react";
import Layout from "@/components/layout/Layout";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import HomeTwoOffer from "@/components/containers/home-two/HomeTwoOffer";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
// import HomeTwoTestimonial from "@/components/containers/home-two/HomeTwoTestimonial";
// import NextPageNull from "@/components/containers/home/NextPageNull";
import HomeFour from "@/components/Homefour";
import ContactForm from "@/components/contact/ContactForm";


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
          zIndex: 1,
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
      
      {/* ===== HOME PAGE ONLY: FORM + BOXES SIDE BY SIDE ===== */}
      <section className="section home-form-boxes">
        <div className="container">
          <div className="row gaper">
            {/* LEFT: Form */}
            <div className="col-12 col-lg-6">
              <ContactForm fullWidth={true} />
            </div>
            {/* RIGHT: Service Boxes */}
            <div className="col-12 col-lg-6">
              <HomeFour />
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .home-form-boxes {
            padding: 60px 0;
          }
          
          @media (max-width: 991px) {
            .home-form-boxes .row {
              flex-direction: column;
            }
            .home-form-boxes .col-lg-6 {
              width: 100%;
            }
          }
        `}</style>
      </section>
      
      {/* <HomeTwoTestimonial />     ✅ stays clean */}
      {/* <NextPageNull /> */}
    </Layout>
  );
};

export default HomeTwo;
