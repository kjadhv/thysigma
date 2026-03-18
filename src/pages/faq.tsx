import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqMain from "@/components/containers/FaqMain";

const FaqPage = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
title={
  <>
    Event Media FAQs – <br />
    Live Streaming, Videography & Coverage <br />
    in Mumbai
  </>
}
navigation="Faq"
/>
      <FaqMain />
    </Layout>
  );
};

export default FaqPage;
