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
    slug: "viren",
    title: "VIREN | MEMORIAL CUP 2025",
    tag: "Videography",
    img: socialm,
    videos: [
    {
      id: "Pi92_fmvEvA",
      desc: "VIREN Memorial Cup 2025 - Day 1 highlights and best moments of the tournament."
    },
    {
      id: "QWukc8vTlJQ",
      desc: "VIREN Memorial Cup 2025 - Day 2 action, key matches and final moments."
    }],
  },
  {
    slug: "udaan-school-documentary",
    title: "FIGHT CLUB | WAR OF THE CLUBS",
    tag: "Live Streaming",
    img: cameraman,
    videos: [],
  },
  {
    slug: "amainevent",
    title: "ALPHA MAIN EVENT | MMA 2025",
    tag: "Editing",
    img: editing,
    videos: [
      {
        id: "GxVyx4TEgyc",
        desc: "Alpha Main Event MMA 2025 - Highlights and key moments from the event."
      },
      {
        id: "OGKsguUwaqk",
        desc: "Alpha Main Event MMA 2025 - Final matches and tournament conclusion."
      }],
  },
  {
    slug: "shiv",
    title: "SHIVMUDRA PRATISHTHAN CHASHAK 2025",
    tag: "Videography",
    img: process,
    videos: [
      {
        id: "Ps5VUiQDCGA",
        desc: "Shivmudra Pratishthan Chashak 2025 celebrates tradition and competitive spirit in this landmark sporting event."
      }],
  },
  {
    slug: "industrial-story",
    title: "ALPHA FIGHTING SERIES",
    tag: "Photography",
    img: like,
    videos: [
      {
        id: "AKxn4nPG8-Q",
        desc: "The stage is set for a brand-new era in combat sports. Alpha Fighting Series is where raw talent meets pure willpower, and only the strongest make their mark. From explosive debuts to breakout performances, every bout is a proving ground for fighters hungry to become the next big name. Witness history in the making — every strike, every submission, every victory — live."
      }],
  },
  {
    slug: "creative-journey",
    title: "SAFETECH AWARDS & CONFERENCE 2025",
    tag: "Photography",
    img: grp,
    videos: [
      {
        id: "4fPtqI8XoJ8",
        desc: "The SafeTech Awards & Conference 2025, hosted by Kings Expomedia at The Taj Mahal Hotel, Mumbai, brought together India’s foremost leaders in industrial safety, EHS management, and emergency response. This 5th edition marked a landmark celebration of excellence, honoring organizations and individuals who set new benchmarks in safety culture, risk mitigation, and operational integrity. From recognizing pioneering factories and corporate units under the Industrial Safety Awards to saluting frontline heroes through the Safe India Hero Plus Awards, the event underscored the critical role of safety in ensuring business continuity, workforce morale, and national resilience. The conference also served as a knowledge-sharing platform, fostering collaboration among safety professionals, innovators, and policymakers. The After Movie captures not just the awards, but the spirit of commitment, courage, and collaboration that defines India’s evolving safety landscape."
      }],
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

{/* VIDEOS SECTION */}
{data.videos && data.videos.length > 0 ? (
  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
    {data.videos
      .filter((v) => v && v.id && v.id.trim() !== "")
      .map((video, index) => (
        <div key={video.id + index}>
          {/* VIDEO */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              borderRadius: "24px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
              title={`${data.title} video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>

          {/* TEXT BELOW EACH VIDEO */}
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

          <h2 style={{ marginBottom: "12px" }}>{data.title}</h2>

          <p
            style={{
              maxWidth: "1400px",
              fontSize: "16px",
              lineHeight: 1.7,
              opacity: 0.9,
              textAlign: "justify",
            }}
          >
            {video.desc}
          </p>
        </div>
      ))}
  </div>
) : (
  <>
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
      <Image src={data.img} alt={data.title} fill style={{ objectFit: "cover" }} priority />
    </div>

    {/* TEXT */}
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

    <h2 style={{ marginBottom: "12px" }}>{data.title}</h2>
    <p
      style={{
        maxWidth: "850px",
        fontSize: "16px",
        lineHeight: 1.7,
        opacity: 0.9,
      }}
    >
      {data.videos?.[0]?.desc || ""}
    </p>
  </>
)}

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