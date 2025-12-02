import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import OurMission from "@/components/containers/OurMission";
import StatsCounter from "@/components/containers/StatsCounter";
import Founders from "@/components/containers/Founders";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import OurAchievement from "@/components/containers/OurAchievement";
// import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
// import AboutCta from "@/components/containers/home-two/AboutCta";


const AboutUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="About Us" navigation="About Us" />
      <HomeTwoModal />
      <Agency />
      <OurMission />
      <StatsCounter />
      <Founders />
      <HomeTestimonial />
      <OurAchievement />
      {/* <AboutSponsor /> */}
      {/* <AboutCta /> */}
    </Layout>
  );
};

export default AboutUs;
