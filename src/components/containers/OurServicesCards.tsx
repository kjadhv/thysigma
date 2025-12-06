import React, { useState } from "react";
import Link from "next/link";
import CardAnimations from "../animations/CardAnimations";
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
    left: ["Corporate Events", "Editorials", "AI/ML Video Production", "Podcast"],
    right: ["Sports Events", "Brand Films", "Product Photography"],
    desc: "Let the best stories unfold, one frame at a time.",
  },
  {
    title: "LIVE STREAMING",
    img: img2,
    left: ["Streaming", "Video Recording", "Motion Graphics", "Ad Creatives"],
    right: ["Live Audio Mixing", "Graphic Overlays", "VR"],
    desc: "Live streaming that brings your audience into the moment.",
  },
  {
    title: "CONTENT POST PRODUCTION",
    img: img3,
    left: ["Editing", "Color Correction", "Audio Treatment"],
    right: ["Motion Graphics", "Content Repurposing"],
    desc: "Post-production is where raw footage becomes cinematic.",
  },
  {
    title: "CONTENT CREATION",
    img: img4,
    left: ["Web Series", "Mini Series", "Event Concept"],
    right: ["Micro Dramas", "Concept Creation"],
    desc: "From ideas to execution, we craft original content.",
  },
  {
    title: "CONTENT DISTRIBUTION",
    img: img5,
    left: ["Ad Distribution", "Broadcast"],
    right: ["Digital Marketing", "OTT"],
    desc: "Content deserves the right audience.",
  },
  {
    title: "GRAPHIC DESIGN",
    img: img6,
    left: ["Ad Creatives", "Marketing Materials"],
    right: ["Digital Creatives", "Event Promotion"],
    desc: "Design that speaks before words do.",
  },
];

const OurServicesCards = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
const handleCardClick = (index: number) => {
  // ✅ Mobile / iPad only
  if (window.innerWidth <= 1024) {
    setActiveIndex(prev => (prev === index ? null : index));
  }
};

  return (
    <>
      <section className="section service-t">
        <div className="container">
          <CardAnimations>
          <div
            className="cine-row"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {services.map((s, i) => (
             <div
  key={i}
  className={`cine-card 
card-${i + 1} 
${i === 0 ? "first-card" : ""} 
${activeIndex === i ? "active" : ""}`}
  onMouseEnter={() => {
    if (window.innerWidth > 1024) setActiveIndex(i);
  }}
  onClick={() => handleCardClick(i)}

                style={{
                  backgroundImage:
                    activeIndex === i ? `url(${s.img.src})` : "none",
                  backgroundColor:
                    activeIndex === i ? "rgba(0,0,0,0.7)" : undefined,
                  backgroundBlendMode:
                    activeIndex === i ? "multiply" : undefined,
                }}
              >
              <h3 className="cine-title">
  {i === 0 ? (
    <div className="double-vertical">
      <span className="title-vertical">VIDEO PRODUCTION</span>
      <span className="title-vertical">& PHOTOGRAPHY</span>
    </div>
  ) : (
    <span className="title-vertical">{s.title}</span>
  )}

  {activeIndex === i ? (
    <div className="title-horizontal split-title">
      {i === 0 && (
        <>
          <span>VIDEO PRODUCTION</span>
          <span>& PHOTOGRAPHY</span>
        </>
      )}
      {i === 1 && (
        <>
          <span>LIVE STREAMING</span>
        </>
      )}
      {i === 2 && (
        <>
          <span>CONTENT POST</span>
          <span>PRODUCTION</span>
        </>
      )}
      {i === 3 && (
        <>
          <span>CONTENT CREATION</span>
        </>
      )}
      {i === 4 && (
        <>
          <span>CONTENT DISTRIBUTION</span>
        </>
      )}
      {i === 5 && (
        <>
          <span>GRAPHIC DESIGN</span>
        </>
      )}
    </div>
  ) : (
    <span className="title-horizontal">{s.title}</span>
  )}
</h3>

{activeIndex === i && (
  <>
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
  </>
)}</div>    ))}  </div>   </CardAnimations>  </div></section>

      {/* ✅ ALL ORIGINAL STYLES — UNTOUCHED */}     
      <style jsx>{`
        .cine-row {
          display: flex;
          gap: 20px;
        }
        /* ✅ SERVICES SECTION BACKGROUND (AFTER BANNER) */
.service-t {
  position: relative;
  background:
    linear-gradient(
      rgba(6, 6, 7, 0.99),  /* ✅ dark warm overlay */
     rgba(20, 8, 31, 0.75),
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/* ✅ Split title for first card on hover */
.split-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
  line-height: 1.1;
}
.split-title span {
  font-size: 30px;
  font-weight: 600;
  white-space: nowrap;
}

/* ✅ CARD GRADIENT – BEFORE HOVER (DARK MODE STYLE) */
.card-1:not(.active) {
  background: linear-gradient(
    180deg,
    rgba(24, 24, 43, 0.98) 0%,
    rgba(12, 12, 14, 1) 100%
  ) !important;
}
.card-2:not(.active) {
  background: linear-gradient(
    180deg,
    rgba(41, 41, 58, 0.98) 0%,
    rgba(13, 13, 16, 1) 100%
  ) !important;
}
.card-3:not(.active) {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 34, 0.98) 0%,
    rgba(14, 14, 18, 1) 100%
  ) !important;
}
.card-4:not(.active) {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 54, 0.98) 0%,
    rgba(15, 15, 20, 1) 100%
  ) !important;
}
.card-5:not(.active) {
  background: linear-gradient(
    180deg,
    rgba(56, 41, 28, 0.98) 0%,
    rgba(11, 11, 14, 1) 100%
  ) !important;
}
.card-6:not(.active) {
  background: linear-gradient(
    180deg,
    rgba(78, 38, 47, 0.98) 0%,
    rgba(10, 10, 12, 1) 100%
  ) !important;
}

/* ✅ SHINE LAYER */
.cine-card:not(.active)::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.12),
    transparent 70%
  );
  transform: translateX(-100%) rotate(15deg);
  animation: shineMove 4.5s ease-in-out infinite;
  pointer-events: none;
}
@keyframes shineMove {
  0% {
    transform: translateX(-120%) rotate(15deg);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    transform: translateX(120%) rotate(15deg);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.cine-card:nth-child(1)::before {
  animation-delay: 0s;
}
.cine-card:nth-child(2)::before {
  animation-delay: 1.2s;
}
.cine-card:nth-child(3)::before {
  animation-delay: 2.4s;
}
.cine-card:nth-child(4)::before {
  animation-delay: 0.8s;
}
.cine-card:nth-child(5)::before {
  animation-delay: 1.8s;
}
.cine-card:nth-child(6)::before {
  animation-delay: 3s;
}
.card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}
.card {
  border: 1px solid rgba(10, 9, 9, 0.99);
  border-radius: 18px;
}
        .cine-card {
          flex: 1;
          background-size: cover;
          background-position: center;
          border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 30px;
          min-height: 520px;
          color: #070505ff;
          opacity: 0.6;
          position: relative;
          overflow: hidden;
          transition: all 0.45s ease;
        }
       .cine-card {
  opacity: 0.85; /* normal cards slightly faded */
}
.cine-card.active {
  opacity: 1; /* active card fully visible container */
}
.cine-card.active {
  background-blend-mode: multiply;
}
        .cine-card.active {
          flex: 3;
          opacity: 1;
        }

        /* ✅ TITLE POSITION (FIXED) */
        .cine-title {
          position: absolute;
          top: 30px;
          left: 20px;
          z-index: 5;
        }

        /* ✅ Vertical like sketch */
        .title-vertical {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 25px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #c05010ff;
          opacity: 1;
          transition: 0.3s;
        }

        /* ✅ Horizontal on hover */
        .title-horizontal {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 30px;
          opacity: 0;
          transition: 0.3s;
          white-space: nowrap;
        }
        .cine-card.active .title-vertical {
          opacity: 0;
        }
        .cine-card.active .title-horizontal {
          opacity: 1;
        }
        .cine-lists {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin: 100px 0 20px;
        }
.cine-lists li {
  font-size: 20px;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
}
.cine-card p {
  font-size: 18px;
  line-height: 1.7;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}
        .cine-btn {
          display: inline-block;
          padding: 10px 24px;
          border-radius: 30px;
          border: 1px solid #7b61ff;
          color: #fff;
        }
              
/* ✅ MOBILE + IPAD (SAME BEHAVIOR) */
@media (max-width: 1024px) {

  /* ✅ Layout */
  .cine-row {
    flex-direction: column;
  }

  .cine-card,
  .cine-card.active {
    min-height: auto;
    flex: none;
  }

  /* ✅ TITLE POSITION */
  .cine-title {
    position: relative;
    top: 0;
    left: 0;
    text-align: left;
  }

  /* ✅ BEFORE TAP (DEFAULT STATE) */
  .title-vertical {
    writing-mode: horizontal-tb;
    transform: none;
    display: block;
    font-size: 20px;
    color: #c05010ff;
  }
  .title-horizontal {
    display: none;
    opacity: 0;
  }
  /* ✅ AFTER TAP (ACTIVE CARD) */
  .cine-card.active .title-vertical {
    display: none;
  }

  .cine-card.active .title-horizontal {
    display: block;
    position: relative;
    text-align: left;
  }

  /* ✅ OPENED TITLE SIZE */
  .cine-card.active .title-horizontal span {
    font-size: 20px;
    line-height: 1.25;
  }

  /* ✅ CONTENT SPACING */
  .cine-lists {
    margin: 50px 0 16px;
  }

  /* ✅ LIST TEXT */
  .cine-card.active .cine-lists li {
    font-size: 15px;
    line-height: 1.5;
  }

  /* ✅ DESCRIPTION TEXT */
  .cine-card.active p {
    font-size: 14.5px;
    line-height: 1.55;
  }

  /* ✅ BUTTON */
  .cine-card.active .cine-btn {
    font-size: 14px;
    padding: 8px 18px;
  }
}
/* ✅ FIX CUT TITLE – MOBILE ONLY */
.cine-card.active .title-horizontal {
  white-space: normal;     /* allow line wrap */
  max-width: 100%;
}
.cine-card.active .title-horizontal span {
  display: block;          /* VIDEO PRODUCTION / & PHOTOGRAPHY */
  word-break: break-word;
}}    }     
      `}</style>
    </>
  );
};

export default OurServicesCards;