import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
const InstagramEmbed = dynamic(() => import("@/components/InstagramEmbed"), {
  ssr: false,
});
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

// IMAGES
import socialm from "public/images/photos/7.jpeg";
import cameraman from "public/images/photos/11.jpeg";
import editing from "public/images/photos/12.jpeg";
import process from "public/images/photos/17.jpeg";
import like from "public/images/icff/icff1.png";
import grp from "public/images/photos/16.jpeg";
import blog from "public/images/icff/ihff12.png";

type VideoItem = {
  id: string;
  desc: string;
  title: string; // ✅ optional
};

type PortfolioItem = {
  slug: string;
  tag: string;
  img: any;
  title: string;
  videos: VideoItem[];
  images?: string[];
};
// ✅ SYNCED WITH PortfolioMain.tsx
const portfolioData: PortfolioItem[] = [
  {
    slug: "viren",
    title: "VIREN | MEMORIAL CUP 2025",
    tag: "Videography",
    img: socialm,
    videos: [
    {
      id: "Pi92_fmvEvA",
      title: "VIREN MEMORIAL CUP 2025 DAY1",
      desc: "VIREN Memorial Cup 2025 - Day 1 highlights and best moments of the tournament."
    },
    {
      id: "QWukc8vTlJQ",
      title: "VIREN MEMORIAL CUP 2025 DAY2",
      desc: "VIREN Memorial Cup 2025 - Day 2 action, key matches and final moments."
    }],
  },
  {
    slug: "fight club",
    title: "FIGHT CLUB | WAR OF THE CLUBS",
    tag: "Live Streaming",
    img: cameraman,
    videos: [
      {
        id: "csz4phDCppQ",
        title:"FIGHT CLUB PART1",
        desc: "The gloves are off, the stakes are higher, and the clubs are hungry for honor and bragging rights. This isn’t just a fight, it’s an all-out turf war where rival clubs settle scores in the cage, live for the world to watch. New fighters, bad blood, bigger crowds. Expect knockouts, grudges, and moments that’ll be replayed for weeks."
      },
      {
        id: "5qw7tzLSiAg",
        title:"FIGHT CLUB PART2",
        desc:"The gloves are off, the stakes are higher, and the clubs are hungry for honor and bragging rights. This isn’t just a fight, it’s an all-out turf war where rival clubs settle scores in the cage, live for the world to watch. New fighters, bad blood, bigger crowds. Expect knockouts, grudges, and moments that’ll be replayed for weeks."
      }
    ],
  },
  {
    slug: "amain_event",
    title: "ALPHA MAIN EVENT | MMA 2025",
    tag: "Live Streaming",
    img: editing,
    videos: [
      {
        id: "GxVyx4TEgyc",
        title:"INTERNATIONAL COMBAT SPORTS CHAMPIONSHIP 2025",
        desc: "Catch the live action of the best fighters in the most anticipated International combat Sport Championship."
      },
      {
        id: "OGKsguUwaqk",
        title:"INTERNATIONAL COMBAT SPORTS CHAMPIONSHIP 2025",
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
        title:"SHIVMUDRA PRATISHTHAN CHASHAK 2025",
        desc: "Shivmudra Pratishthan Chashak 2025 celebrates tradition and competitive spirit in this landmark sporting event."
      }],
  },
  {
    slug: "icff",
    title: "ICFF",
    tag: "Live Streaming",
    img: like,
    videos: [
      {       
        id: "GxVyx4TEgyc",
        title:"ICFF",
        desc: "Don't miss your chance to witness the future of fighting unfold before your eyes."
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
        title:"SAFETECH AWARDS & CONFERENCE 2025",
        desc: "The SafeTech Awards & Conference 2025, hosted by Kings Expomedia at The Taj Mahal Hotel, Mumbai, brought together India’s foremost leaders in industrial safety, EHS management, and emergency response. This 5th edition marked a landmark celebration of excellence, honoring organizations and individuals who set new benchmarks in safety culture, risk mitigation, and operational integrity. From recognizing pioneering factories and corporate units under the Industrial Safety Awards to saluting frontline heroes through the Safe India Hero Plus Awards, the event underscored the critical role of safety in ensuring business continuity, workforce morale, and national resilience. The conference also served as a knowledge-sharing platform, fostering collaboration among safety professionals, innovators, and policymakers. The After Movie captures not just the awards, but the spirit of commitment, courage, and collaboration that defines India’s evolving safety landscape."
      }],
    images:[
        "/images/safetech/safetech1.jpeg",
        "/images/safetech/safetech2.jpeg",
        "/images/safetech/safetech3.jpeg",
        "/images/safetech/safetech4.jpeg",
        "/images/safetech/safetech5.jpeg",
        "/images/safetech/safetech6.jpeg",
        "/images/safetech/safetech7.jpeg",
        "/images/safetech/safetech8.jpeg",
        "/images/safetech/safetech9.jpeg",
        "/images/safetech/safetech10.jpeg",
        "/images/safetech/safetech11.jpeg",
        "/images/safetech/safetech12.jpeg",
        "/images/safetech/safetech13.jpeg",
        "/images/safetech/safetech14.jpeg",
        "/images/safetech/safetech15.jpeg",
        "/images/safetech/safetech16.jpeg",
        "/images/safetech/safetech17.jpeg",
        "/images/safetech/safetech18.jpeg",
        "/images/safetech/safetech19.jpeg",
        "/images/safetech/safetech20.jpeg",
        "/images/safetech/safetech21.jpeg",
        "/images/safetech/safetech22.jpeg",
        "/images/safetech/safetech23.jpeg",
        "/images/safetech/safetech24.jpeg",
        "/images/safetech/safetech25.jpeg",
        "/images/safetech/safetech26.jpeg",
        "/images/safetech/safetech27.jpeg",
        "/images/safetech/safetech28.jpeg",
        "/images/safetech/safetech29.jpeg",
        "/images/safetech/safetech30.jpeg",
        "/images/safetech/safetech31.jpeg",
        "/images/safetech/safetech39.jpeg",
        "/images/safetech/safetech40.jpeg",
        "/images/safetech/safetech41.jpeg",
        "/images/safetech/safetech42.jpeg",
        "/images/safetech/safetech43.jpeg",
        "/images/safetech/safetech44.jpeg",
        "/images/safetech/safetech45.jpeg",
        "/images/safetech/safetech46.jpeg",
        "/images/safetech/safetech47.jpeg",
      ]
  },
  {
    slug: "digital-media-sports-blog",
    title: "THE RISE OF DIGITAL MEDIA IN SPORTS",
    tag: "Editing",
    img: blog,
    videos: [
      {
        id: "GxVyx4TEgyc",
        title:"THE RISE OF DIGITAL MEDIA IN SPORTS",
        desc: "We are about to witness epic talent from across the globe hash it out....Remember! The cage favours those who fears none. Catch the live action of the best fighters in the most anticipated International combat Sport Championship. Ending  the year with a banggggg...... cheer for your fighter in the live comments section."
      },
      {
        id: "https://www.instagram.com/reel/DS4zKRPkbEi/",
        title:"National MMA Championship 2025",
        desc: "A big shoutout to Zandu Fast Relief for supporting our athletes during the National MMA Championship 2025"
      },
      {
        id: "https://www.instagram.com/reel/DRzIEU6EQBa/",
        title:"#MMAFI #RiteBite #MaxProtein",
        desc: "We truly appreciate your support toward India’s combat sports community"
      },
      {
        id: "https://www.instagram.com/reel/DRycJYQEWBO/",
        title:"#EnergyPartner #NationalMMAChampionship2025 #IHFF2025",
        desc:"A huge shoutout to Campa Energy for powering the athletes of the National MMA Championship 2025 at IHFF!"
      },
      {
        id:"https://www.instagram.com/reel/DRn6KdXiHq0/",
        title:"Athlete recovery = Stronger performance",
        desc:"We truly appreciate your partnership and commitment to the combat sports community."
      }
    ],
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

const PortfolioDetails = ({ data }: { data: PortfolioItem }) => {
  const router = useRouter();
const [isDesktop, setIsDesktop] = React.useState(false);
const [lightboxOpen, setLightboxOpen] = React.useState(false);
const [activeImgIndex, setActiveImgIndex] = React.useState(0);

const openLightbox = (index: number) => {
  setActiveImgIndex(index);
  setLightboxOpen(true);
};

const closeLightbox = () => setLightboxOpen(false);

const nextImage = () => {
  if (!data.images) return;
  setActiveImgIndex((prev) => (prev + 1) % data.images!.length);
};
// useEffect(() => {
//   const handleKey = (e: KeyboardEvent) => {
//     if (!lightboxOpen) return;

//     if (e.key === "Escape") closeLightbox();
//     if (e.key === "ArrowRight") nextImage();
//     if (e.key === "ArrowLeft") prevImage();
//   };

//   window.addEventListener("keydown", handleKey);
//   return () => window.removeEventListener("keydown", handleKey);
// }, [lightboxOpen, data.images]);

const prevImage = () => {
  if (!data.images) return;
  setActiveImgIndex((prev) =>
    prev === 0 ? data.images!.length - 1 : prev - 1
  );
};

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      .map((video, index) => {
        const isInstagram = video.id.includes("instagram.com");

  return (
    <div key={video.id + index}>

          {/* VIDEO */}
         {isInstagram ? (
  // Instagram size
  <div
    style={{
      width: isDesktop ? "40%" : "100%",
      margin: "0 auto", 
      borderRadius: "24px",
      overflow: "hidden",
      marginBottom: "20px",
      background: "#111",
      padding: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <InstagramEmbed url={video.id} height={isDesktop ? 700 : 520} />


  </div>
) : (
  // YouTube size
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
)}


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
<h2 style={{ marginBottom: "12px" }}>
  {video.title || data.title}
</h2>

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
  );
      })}
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
      <Image
  src={data.img}
  alt={data.title ?? "Portfolio Image"}
  fill
  style={{ objectFit: "cover" }}
  priority
/>
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
{/* ✅ EXTRA IMAGES SECTION (Only for Awards page) */}
{data.images && data.images.length > 0 && (
  <div style={{ marginTop: "40px" }}>
    <h3 style={{ marginBottom: "18px" }}>Event Gallery</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isDesktop ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
        gap: "14px",
      }}
    >
      {data.images.map((imgSrc, i) => (
        <div
          key={imgSrc + i}
          onClick={() => openLightbox(i)}
          style={{
            position: "relative",
            width: "100%",
            height: isDesktop ? "160px" : "140px",
            borderRadius: "18px",
            overflow: "hidden",
            background: "#111",
          }}
        >
          <Image
            src={imgSrc}
            alt={`${data.title} image ${i + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  </div>
)}

{/* ✅ LIGHTBOX MODAL */}
{lightboxOpen && data.images && (
  <div
    onClick={closeLightbox}  // ✅ outside click close
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    {/* ✅ modal box */}
    <div
      onClick={(e) => e.stopPropagation()} // ✅ prevent closing on image click
      style={{
        position: "relative",
        width: "100%",
        maxWidth: isDesktop ? "1400px" : "95vw",
        height: isDesktop ? "85vh" : "75vh",
        borderRadius: "24px",
        overflow: "hidden",
        background: "#111",
        cursor: "pointer",
      }}
    >
      <Image
        src={data.images[activeImgIndex]}
        alt={`Gallery image ${activeImgIndex + 1}`}
        fill
        style={{ objectFit: "contain" }}
        priority
      />

      {/* ❌ Close Button */}
      <button
        onClick={closeLightbox}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          borderRadius: "999px",
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>

      {/* ◀ Prev */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          borderRadius: "999px",
          padding: "10px 14px",
          cursor: "pointer",
        }}
      >
        ◀
      </button>

      {/* ▶ Next */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          borderRadius: "999px",
          padding: "10px 14px",
          cursor: "pointer",
        }}
      >
        ▶
      </button>

      {/* ✅ Counter */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.65)",
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: 13,
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {activeImgIndex + 1} / {data.images.length}
      </div>
    </div>
  </div>
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