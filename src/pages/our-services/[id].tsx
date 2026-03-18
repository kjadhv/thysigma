// pages/our-services/[id].tsx

import { useRouter } from "next/router";
import Image from "next/image";
import img1 from "public/images/services/videop.jpeg";
import img2 from "public/images/services/lives.jpeg";
import img3 from "public/images/services/contentpp.jpeg";
import img4 from "public/images/services/contentc.jpeg";
import img5 from "public/images/services/contentd.jpeg";
import img6 from "public/images/services/graphicd.jpeg";

const services = [
  {
    title: "VIDEO PRODUCTION & PHOTOGRAPHY",
    img: img1,
    desc: "Let the best stories unfold, one frame at a time.",
    left: ["Corporate Events", "Editorials", "AI/ML Video Production", "Podcast"],
    right: ["Sports Events", "Brand Films", "Product Photography"],
 extra: `
At Thysigma Services, we specialize in high-quality video production and photography services in Navi Mumbai and Thane, helping businesses tell powerful visual stories. We provide corporate event live streaming with multi-camera setups and seamless broadcasting on YouTube, Zoom, and private servers.
Our corporate video production includes brand films, training videos, and promotional content designed to elevate your business.

We also offer event photography, sports coverage, editorials, podcasts, and AI/ML-based video production with a modern approach.From product photography to brand films and podcast production, we ensure high-quality output using advanced equipment and creative direction. Thysigma stands for quality, creativity, and reliability—delivering cinematic results tailored to your needs.
` },
  {
    title: "LIVE STREAMING",
    img: img2,
    desc: "Live streaming that brings your audience into the moment.",
    left: ["Streaming", "Video Recording", "Motion Graphics", "Ad Creatives"],
    right: ["Live Audio Mixing", "Graphic Overlays", "VR"],
  },
  {
    title: "CONTENT POST PRODUCTION",
    img: img3,
    desc: "Post-production is where raw footage becomes cinematic.",
    left: ["Editing", "Color Correction", "Audio Treatment"],
    right: ["Motion Graphics", "Content Repurposing"],
  },
  {
    title: "CONTENT CREATION",
    img: img4,
    desc: "From ideas to execution, we craft original content.",
    left: ["Web Series", "Mini Series", "Event Concept"],
    right: ["Micro Dramas", "Concept Creation"],
  },
  {
    title: "CONTENT DISTRIBUTION",
    img: img5,
    desc: "Content deserves the right audience.",
    left: ["Ad Distribution", "Broadcast"],
    right: ["Digital Marketing", "OTT"],
  },
  {
    title: "GRAPHIC DESIGN",
    img: img6,
    desc: "Design that speaks before words do.",
    left: ["Ad Creatives", "Marketing Materials"],
    right: ["Digital Creatives", "Event Promotion"],
  },
];

export default function ServicePage() {
  const router = useRouter();
  const { id } = router.query;

  const service = services[Number(id)];

  if (!service) return <p style={{ padding: 40 }}>Loading...</p>;

 return (
  <div className="page">

    {/* ✅ TOP ORANGE BAR */}
    <div className="top-bar">
      <h1>{service.title}</h1>
    </div>

    <div className="wrapper">

      {/* LEFT IMAGE */}
      <div className="left">
        <Image src={service.img} alt={service.title} fill />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right">
        <p className="desc">{service.desc}</p>

        {service.extra && (
          <div className="long-text">
            {service.extra.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        <div className="lists">
          <ul>
            {service.left.map((item) => (
              <li key={item}>➤ {item}</li>
            ))}
          </ul>

          <ul>
            {service.right.map((item) => (
              <li key={item}>➤ {item}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>

      <style jsx>{`
        .page {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding: 20px 0; 
        }
        .wrapper {
  display: flex;
  gap: 60px;
  padding: 0 80px 60px 80px; /* reduced top space */
  align-items: flex-start;
}

        .left {
          position: relative;
          width: 40%;
          height: 500px;
          border: 4px solid #fff;
          border-radius: 14px;
          overflow: hidden;
        }

        .right {
          width: 60%;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 20px;
          color: #ff4d00;
        }

        .desc {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .extra {
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .lists {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        li {
          font-size: 18px;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .wrapper {
            flex-direction: column;
            padding: 20px;
          }

          .left {
            width: 100%;
            height: 300px;
          }

          .right {
            width: 100%;
          }

          h1 {
            font-size: 26px;
          }

          .lists {
            grid-template-columns: 1fr;
          }
        }
          /* ✅ TOP ORANGE BAR */
.top-bar {
  background: #e7781eff;
  height: 80px; /* ~3cm visual */
  display: flex;
  align-items: center;
  padding: 0 80px;
  margin-bottom: 40px;
}

.top-bar h1 {
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
}
      `}</style>
    </div>
  );
}