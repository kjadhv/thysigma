import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";
import ContactMain from "@/components/containers/ContactMain";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      <PortfolioMain />
      <ContactMain />
    </Layout>
  );
};

export default OurPortfolio;
