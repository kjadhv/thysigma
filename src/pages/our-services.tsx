import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
// import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";

const OurServices = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <HomeTwoModal />
      {/* <HomeTestimonialThree /> */}
    </Layout>
  );
};

export default OurServices;
