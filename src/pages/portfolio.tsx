import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";
import ContactForm from "@/components/contact/ContactForm";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      <PortfolioMain />
      
      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="section portfolio-contact-form">
        <div className="container">
          <ContactForm /> 
        </div>
        
        <style jsx>{`
          .portfolio-contact-form {
            padding: 60px 0;
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default OurPortfolio;
