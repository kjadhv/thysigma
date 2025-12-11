import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

// IMAGES
import socialm from "public/images/photos/7.jpeg";
import cameraman from "public/images/photos/11.jpeg";
import editing from "public/images/photos/12.jpeg";
import process from "public/images/photos/17.jpeg";
import like from "public/images/photos/15.jpeg";
import grp from "public/images/photos/16.jpeg";

// ✅ SYNCED WITH PortfolioMain.tsx
const portfolioData = [
  {
    slug: "abcd-brand-documentary",
    title: "VIREN | MEMORIAL CUP 2025",
    tag: "Videography",
    desc: "VIREN Memorial Cup 2025 showcases the spirit of competition and sportsmanship in this prestigious tournament.",
    img: socialm,
  },
  {
    slug: "udaan-school-documentary",
    title: "FIGHT CLUB | WAR OF THE CLUBS",
    tag: "Live Streaming",
    desc: "Experience the intensity and raw energy of Fight Club's War of the Clubs through our comprehensive live streaming coverage.",
    img: cameraman,
  },
  {
    slug: "amainevent",
    title: "ALPHA MAIN EVENT | MMA 2025",
    tag: "Editing",
    desc: "A masterfully edited showcase of the Alpha Main Event MMA 2025, capturing every moment of athletic excellence.",
    img: editing,
  },
  {
    slug: "shiv",
    title: "SHIVMUDRA PRATISHTHAN CHASHAK 2025",
    tag: "Videography",
    desc: "Shivmudra Pratishthan Chashak 2025 celebrates tradition and competitive spirit in this landmark sporting event.",
    img: process,
  },
  {
    slug: "industrial-story",
    title: "ALPHA FIGHTING SERIES",
    tag: "Photography",
    desc: "Stunning photography capturing the drama, intensity, and athleticism of the Alpha Fighting Series.",
    img: like,
  },
  {
    slug: "creative-journey",
    title: "SAFETECH AWARDS & CONFERENCE 2025",
    tag: "Photography",
    desc: "Professional photography documentation of the SafeTech Awards & Conference 2025, highlighting innovation and excellence.",
    img: grp,
  },
];

// ✅ TELL NEXT.JS WHICH PATHS EXIST
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = portfolioData.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for unknown slugs
  };
};

// ✅ GET DATA FOR EACH PAGE
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = portfolioData.find((item) => item.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

const PortfolioDetails = ({ data }: { data: typeof portfolioData[0] }) => {
  const router = useRouter();

  return (
    <Layout header={2} footer={5} video={0}>
      {/* BANNER */}
      <CmnBanner title={data.title} navigation="Portfolio Details" />

      {/* CONTENT */}
      <section style={{ background: "#000", padding: "70px 0" }}>
        <div className="container" style={{ color: "#fff" }}>

          {/* IMAGE */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              borderRadius: "24px",
              overflow: "hidden",
              marginBottom: "30px",
            }}
          >
            <Image
              src={data.img}
              alt={data.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* CATEGORY */}
          <span
            style={{
              display: "inline-block",
              marginBottom: "10px",
              background: "rgba(255,255,255,0.9)",
              color: "#000",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {data.tag}
          </span>

          {/* TEXT */}
          <h2 style={{ marginBottom: "12px" }}>{data.title}</h2>
          <p
            style={{
              maxWidth: "850px",
              fontSize: "16px",
              lineHeight: 1.7,
              opacity: 0.9,
            }}
          >
            {data.desc}
          </p>

          {/* BACK BUTTON */}
          <div style={{ marginTop: "40px" }}>
            <button
              onClick={() => router.push("/portfolio")}
              style={{
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: "999px",
                cursor: "pointer",
              }}
            >
              ← Back to Portfolio
            </button>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetails;