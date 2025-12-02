import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

// IMAGES
import socialm from "public/images/socialm.png";
import cameraman from "public/images/cameraman.jpg";
import editing from "public/images/editing.jpg";
import process from "public/images/process.jpg";
import like from "public/images/like.png";
import grp from "public/images/grp.jpg";

// ✅ SYNCED WITH PortfolioMain.tsx (4 categories)
const portfolioData = [
  {
    slug: "viren",
    title: "VIREN | MEMORIAL CUP 2025",
    tag: "Videography",
    desc:
      "ABCD showcases innovative agricultural solutions empowering farmers.",
    img: socialm,
  },
  {
    slug: "alpha",
    title: "ALPHA FIGHTING | Kickboxing Bout",
    tag: "Live Streaming",
    desc:
      "Udaan School focuses on transforming rural education through creativity.",
    img: cameraman,
  },
  {
    slug: "amainevent",
    title: "ALPHA MAIN EVENT | MMA 2025",
    tag: "Editing",
    desc:
      "Pragati Group represents growth, sustainability, and modern thinking.",
    img: editing,
  },
  {
    slug: "shiv",
    title: "SHIVMUDRA PRATISHTHAN",
    tag: "Videography",
    desc:
      "Legacy Project highlights the journey of innovation and long-term vision.",
    img: process,
  },
  {
    slug: "industrial-story",
    title: "Industrial Story",
    tag: "Photography",
    desc:
      "An industrial documentary showcasing strength, scale, and dedication.",
    img: like,
  },
  {
    slug: "creative-journey",
    title: "Creative Journey",
    tag: "Photography",
    desc:
      "Creative Journey captures passion, artistry, and the power of storytelling.",
    img: grp,
  },
];

const PortfolioDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const data = portfolioData.find((item) => item.slug === slug);

  // ✅ SAFETY FALLBACK
  if (!data) {
    return (
      <Layout header={2} footer={5} video={0}>
        <CmnBanner title="Portfolio Not Found" navigation="Portfolio" />
        <section style={{ background: "#000", padding: "70px 0" }}>
          <div
            className="container"
            style={{ color: "#fff", textAlign: "center" }}
          >
            <h2>Portfolio item not found</h2>
            <p style={{ marginBottom: "20px" }}>
              The portfolio you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/portfolio")}
              style={{
                background: "linear-gradient(135deg, #6a39ff, #8f5bff)",
                border: "none",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: "999px",
                cursor: "pointer",
              }}
            >
              Back to Portfolio
            </button>
          </div>
        </section>
      </Layout>
    );
  }

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
