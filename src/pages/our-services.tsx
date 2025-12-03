import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FlipBook from "@/components/containers/home/FlipBook";
import ContactMain from "@/components/containers/ContactMain";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import grp from "public/images/process.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "VIDEO PRODUCTION & PHOTOGRAPHY",
    left: ["Corporate Events", "Editorials", "AI/ML Video Production"],
    right: ["Sports Events", "Brand Films", "Product Photography"],
    desc:
      "Let the best stories unfold, one frame at a time. We shoot visuals that don’t just look good; they carry weight and leave a mark.",
  },
  {
    title: "GRAPHIC DESIGN",
    left: ["Ad Creatives", "Marketing Materials"],
    right: ["Digital Creatives", "Event Promotion"],
    desc:
      "Design that speaks before words do. From campaign visuals to brand systems, we create graphics that are bold and impactful.",
  },
  {
    title: "CONTENT POST PRODUCTION",
    left: ["Editing", "Color Correction", "Aodio Treatement"],
    right: ["Motion Graphics", "Video Reliability Engineering", "Content Repurposing"],
    desc:
      "Post-production is where raw footage becomes cinematic through precision, pacing, and thoughtful storytelling.",
  },
  {
    title: "CONTENT DISTRIBUTION",
    left: ["Ad Distribution", "Broadcast", "Social Media Platforms"],
    right: ["Digital Marketing", "OTT"],
    desc:
      "Content deserves the right audience. We distribute stories where they gain attention and traction.",
  },
  {
    title: "CONTENT CREATION",
    left: ["Web Series", "Mini Series", "Event Concept"],
    right: ["Micro Dramas", "Concept Creation"],
    desc:
      "From ideas to execution, we craft original content that connects and resonates.",
  },
];

const OurServices = () => {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 576) return;

    gsap.set(".process-bg-layer", { autoAlpha: 0 });
    gsap.set(".process-shared-img", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".service-t",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.to(".process-bg-layer", { autoAlpha: 1, duration: 0.3 });
        gsap.to(".process-shared-img", { opacity: 0.25, duration: 0.3 });
      },
      onEnterBack: () => {
        gsap.to(".process-bg-layer", { autoAlpha: 1, duration: 0.3 });
        gsap.to(".process-shared-img", { opacity: 0.25, duration: 0.3 });
      },
      onLeave: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.to(".process-bg-layer", { autoAlpha: 0, duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".process-shared-img", { opacity: 0, duration: 0.3 });
        gsap.to(".process-bg-layer", { autoAlpha: 0, duration: 0.3 });
      },
    });

    ScrollTrigger.create({
      trigger: ".service-t",
      start: "top top",
      end: "bottom top",
      pin: ".process-bg-layer",
      pinSpacing: false,
    });
  }, []);

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />

      {/* BACKGROUND */}
      <div className="process-bg-layer">
        <Image src={grp} alt="process" fill priority className="process-shared-img" />
      </div>

      {/* SERVICES */}
      <section className="section service-t">
        <div className="container">
          {services.map((s, i) => (
            <div className="cine-card" key={i}>
              <div className="cine-img">
                <Image src={grp} alt={s.title} fill />
              </div>

              <div className="cine-content">
                <h2>{s.title}</h2>

                <div className="cine-lists">
                  <ul>
                    {s.left.map((l) => (
                      <li key={l}>➤ {l}</li>
                    ))}
                  </ul>
                  <ul>
                    {s.right.map((r) => (
                      <li key={r}>➤ {r}</li>
                    ))}
                  </ul>
                </div>

                <p>{s.desc}</p>

                <Link href="/our-services" className="cine-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FlipBook />
      <ContactMain />

      {/* STYLES */}
      <style jsx>{`
        .process-bg-layer {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          visibility: hidden;
        }

        .process-shared-img {
          object-fit: cover;
          opacity: 0;
        }

        .service-t {
          position: relative;
          z-index: 2;
        }

        /* PC */
        .cine-card {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 60px;
          padding: 50px;
          background: #050505;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          margin-bottom: 80px;
        }

        .cine-img {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 420px;
        }

        .cine-img :global(img) {
          object-fit: cover;
        }

        .cine-content h2 {
          font-size: 36px;
          color: #fff;
          margin-bottom: 28px;
        }

        .cine-lists {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 28px;
        }

        .cine-lists ul {
          list-style: none;
          padding: 0;
        }

        .cine-lists li {
          font-size: 15px;
          color: #ddd;
          margin-bottom: 12px;
        }

        .cine-content p {
          max-width: 720px;
          color: #bdbdbd;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .cine-btn {
          display: inline-block;
          padding: 12px 30px;
          border-radius: 30px;
          color: #fff;
          border: 1px solid #7b61ff;
          text-decoration: none;
          transition: 0.3s;
        }

        .cine-btn:hover {
          background: #7b61ff;
        }

        /* ✅ iPad Mini + iPad Air ONLY */
        @media (min-width: 577px) and (max-width: 1024px) {
          .cine-card {
            grid-template-columns: 310px 1fr;
            gap: 30px;
            padding: 20px 10px 20px 20px;
          }

          .cine-img {
            min-height: 300px;
          }
        }

        /* ✅ MOBILE ONLY */
        @media (max-width: 576px) {
          .cine-card {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 30px;
          }

          .cine-img {
            min-height: 260px;
          }

          .cine-lists {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .cine-content h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default OurServices;
