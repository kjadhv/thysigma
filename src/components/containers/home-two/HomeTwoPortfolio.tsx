import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

/* IMAGES */
import one from "public/images/services/videop.jpeg";
import two from "public/images/services/lives.jpeg";
import three from "public/images/services/contentpp.jpeg";
import four from "public/images/services/contentc.jpeg";
import five from "public/images/services/contentd.jpeg";
import six from "public/images/services/graphicd.jpeg";

/* TYPES */
interface PortfolioItem {
  img: StaticImageData;
  title: string;
  desc: string;
  side: "left" | "right";
}

/* DATA */
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    img: one,
    title: "Video Production",
    desc: "We create high-quality videos that tell your story with impact.",
    side: "left",
  },
  {
    img: two,
    title: "Live Streaming",
    desc: "We deliver seamless live streaming experiences for any audience.",
    side: "right",
  },
  {
    img: three,
    title: "Event Management",
    desc: "We plan and execute events with precision and creativity.",
    side: "left",
  },
  {
    img: four,
    title: "Content Post Production",
    desc: "Post-production is where raw footage becomes cinematic.",
    side: "right",
  },
  {
    img: five,
    title: "Content Creation",
    desc: "From ideas to execution, we craft original content.",
    side: "left",
  },
  {
    img: six,
    title: "Video Editing",
    desc: "We craft polished edits that bring your visuals to life.",
    side: "right",
  },
];

const HomeTwoPortfolio = () => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pixelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((row) => {
      if (!row) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(row);
      observers.push(observer);
    });

    /* PIXEL fades ONLY when image reaches CENTER of viewport */
    const handleScroll = () => {
      pixelRefs.current.forEach((wrap) => {
        if (!wrap) return;

        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;

        const imageBottom = rect.bottom;
        const imageCenter = rect.top + rect.height / 2;
        const viewportCenter = vh / 2;

        let progress = 0;

        if (imageBottom < vh) {
          const start = vh;
          const end = viewportCenter;

          progress = (start - imageCenter) / (start - end);
          progress = Math.max(0, Math.min(1, progress));
        }

        const opacity = 1 - progress;

        const before = wrap.querySelector(".pixel-before") as HTMLElement | null;
        const after = wrap.querySelector(".pixel-after") as HTMLElement | null;

        if (before) before.style.opacity = opacity.toString();
        if (after) after.style.opacity = opacity.toString();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section portfolio portfolio-two isolate">
      <div className="container">
        <div className="row">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div className="col-12" key={i}>
              <div
                className={`item-row ${item.side}`}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
              >
                {item.side === "right" && (
                  <div className="text-wrap">
                    <p className="side-text">{item.title}</p>
                    <p className="side-desc">{item.desc}</p>
                  </div>
                )}

                <div
                  className="img-wrap pixel-reveal"
                  ref={(el) => {
                    pixelRefs.current[i] = el;
                  }}
                >
                  <div className="pixel-before"></div>
                  <div className="pixel-after"></div>
                  <Image src={item.img} alt={item.title} fill />
                </div>

                {item.side === "left" && (
                  <div className="text-wrap">
                    <p className="side-text">{item.title}</p>
                    <p className="side-desc">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style jsx global>{`
        .isolate {
          isolation: isolate;
        }

        .img-wrap {
          position: relative;
          width: 300px;
          height: 300px;
          flex-shrink: 0;
        }

        .img-wrap img {
          object-fit: cover;
          border-radius: 12px;
          border: 3px solid #b96311ff;
        }

        .item-row {
          display: flex;
          align-items: center;
          gap: 60px;
          margin-bottom: 40px;
          transition: transform 0.35s ease;
        }

        /* Hover lift – desktop only */
        @media (hover: hover) and (pointer: fine) {
          .item-row:hover {
            transform: translateY(-10px);
          }
        }

        .item-row.left {
          justify-content: flex-start;
        }

        .item-row.right {
          justify-content: flex-end;
        }

        .pixel-reveal {
          position: relative;
          overflow: hidden;
        }

        .pixel-before,
        .pixel-after {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .pixel-before {
          background:
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.8) 0px,
              rgba(0, 0, 0, 0.8) 4px,
              transparent 10px,
              transparent 25px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.8) 0px,
              rgba(0, 0, 0, 0.8) 4px,
              transparent 10px,
              transparent 25px
            );
          z-index: 2;
        }

        .pixel-after {
          background: rgba(0, 0, 0, 0.9);
          z-index: 1;
        }

        .item-row .img-wrap,
        .item-row .text-wrap {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .item-row.animate .img-wrap,
        .item-row.animate .text-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .side-text {
          color: #ffffff;
          font-size: 35px;
          font-weight: 600;
        }

        .side-desc {
          color: #dcdcdc;
          font-size: 30px;
        }

        @media (max-width: 1024px) {
        @media (max-width: 1024px) {
  .item-row {
    flex-direction: column;
    text-align: center;
  }

  /* ✅ FORCE IMAGE FIRST */
  .item-row .img-wrap {
    order: 1;
  }

  /* ✅ FORCE TEXT AFTER IMAGE */
  .item-row .text-wrap {
    order: 2;
    max-width: 100%;
  }

  .side-text,
  .side-desc {
    white-space: normal;
  }

  .side-text {
    font-size: 26px;
  }

  .side-desc {
    font-size: 18px;
  }
}

        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;
