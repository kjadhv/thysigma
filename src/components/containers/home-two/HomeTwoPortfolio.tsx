//homepage portfolio section with 6 items in a 3x2 grid, each showing a video on hover/tap
"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

import one   from "public/images/services/contentc.jpeg";
import two   from "public/images/services/lives.jpeg";
import three from "public/images/services/lives.jpeg";
import four  from "public/images/services/contentc.jpeg";
import five  from "public/images/services/cr_photo.jpg";
import six   from "public/images/services/cm_photo.jpg";

interface PortfolioItem {
  img: StaticImageData;
  title: string;
  video: string;        // desktop video
  videoMobile?: string; // mobile/tablet video (falls back to video if not set)
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    img: one,   title: "Content Creation",
    video:       "/images/services/cc1.mp4",       // desktop
    videoMobile: "/images/services/cc1_mobile.mp4" // mobile/tablet — replace with your path
  },
  {
    img: two,   title: "Content Monetisation",
    video:       "/content2.mp4",
    videoMobile: "/images/services/ls1_mobile.mp4"
  },
  {
    img: three, title: "Technology & Infrastructure Services",
    video:       "/content3.mp4",
    videoMobile: "/images/services/mes1_mobile.mp4"
  },
  {
    img: four,  title: "Content Management",
    video:       "/videos/content-creation.mp4",
    videoMobile: "/videos/content-creation_mobile.mp4"
  },
  {
    img: five,  title: "Content Repurposing",
    video:       "/images/services/cr2.mp4",
    videoMobile: "/images/services/cr2_mobile.mp4"
  },
  {
    img: six,   title: "Content Marketing",
    video:       "/images/services/cm2.mp4",
    videoMobile: "/images/services/cm2_mobile.mp4"
  },
];

const HomeTwoPortfolio = () => {
  const gridRef    = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);   // shared overlay video (all breakpoints)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [holeStyle, setHoleStyle] = useState<React.CSSProperties>({});
  const [overlayOn, setOverlayOn] = useState(false);
  const [isMobile,  setIsMobile]  = useState(false);

  /* Detect touch / mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Position the gold-glow hole over the active cell */
  const positionHole = useCallback((cellEl: HTMLElement) => {
    const grid = gridRef.current;
    if (!grid) return;
    const gr = grid.getBoundingClientRect();
    const cr = cellEl.getBoundingClientRect();
    setHoleStyle({
      left:   cr.left - gr.left,
      top:    cr.top  - gr.top,
      width:  cr.width,
      height: cr.height,
    });
  }, []);

  /* Shared activate logic (mouse + touch) */
  const activate = useCallback(
    (idx: number, cellEl: HTMLElement) => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      const item = PORTFOLIO_ITEMS[idx];
      const vid  = videoRef.current;
      if (!vid) return;

      // Pick mobile or desktop video src
      const src = isMobile
        ? (item.videoMobile ?? item.video)
        : item.video;

      if (vid.dataset.src !== src) {
        vid.dataset.src = src;
        vid.src         = src;
        vid.load();
      }
      vid.play().catch(() => {});
      setActiveIdx(idx);
      setOverlayOn(true);
      positionHole(cellEl);
    },
    [isMobile, positionHole]
  );

  /* Shared deactivate */
  const deactivate = useCallback((delay = 100) => {
    leaveTimer.current = setTimeout(() => {
      setOverlayOn(false);
      setActiveIdx(null);
      videoRef.current?.pause();
    }, delay);
  }, []);

  /* ── Desktop: mouse events ── */
  const handleMouseEnter = useCallback(
    (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      activate(idx, e.currentTarget);
    },
    [isMobile, activate]
  );
  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    deactivate();
  }, [isMobile, deactivate]);

  /* ── Mobile/tablet: tap to toggle ── */
  const handleClick = useCallback(
    (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
      if (!isMobile) return;
      if (activeIdx === idx) {
        deactivate(0); // tap same → close immediately
      } else {
        activate(idx, e.currentTarget);
      }
    },
    [isMobile, activeIdx, activate, deactivate]
  );

  /* Re-snap hole on resize */
  useEffect(() => {
    const onResize = () => {
      if (activeIdx === null) return;
      const cell = gridRef.current?.querySelector<HTMLElement>(`[data-idx="${activeIdx}"]`);
      if (cell) positionHole(cell);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx, positionHole]);

  return (
    <section className="pf-section">
      <div className="pf-grid" ref={gridRef}>

        {PORTFOLIO_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`pf-cell${activeIdx === i ? " pf-cell--active" : ""}`}
            data-idx={i}
            onMouseEnter={(e) => handleMouseEnter(i, e)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(i, e)}
          >
            {/*
              Photo at z-3 (above video overlay z-2) — visible by default.
              When ANY cell is active:
                - non-active cells: z-index drops to 1, opacity → 0 → video shows through
                - active cell: stays z-3, opacity 1 → photo visible over video
            */}
            <div className="pf-img-wrap">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width:1023px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="pf-label">
              <span className="pf-label__num">0{i + 1}</span>
              <h3 className="pf-label__title">{item.title}</h3>
            </div>

            <div className="pf-cell-hint" />
            <div className="pf-ring" />

            {/* Tap-to-play hint icon (mobile only, hides when active) */}
            <div className="pf-tap-hint" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                <polygon points="10,8 17,12 10,16" fill="rgba(255,255,255,0.9)"/>
              </svg>
            </div>
          </div>
        ))}

        {/*
          ONE shared video overlay — covers the full grid at z-2.
          Works identically on desktop (hover) and mobile (tap).
          Non-active cells drop their image to z-1 so video shows through.
          Active cell keeps image at z-3 so photo stays visible.
        */}
        <div className={`pf-overlay${overlayOn ? " pf-overlay--on" : ""}`}>
          <video
            ref={videoRef}
            className="pf-overlay__video"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pf-overlay__tint" />
        </div>

        {/* Gold glow hole over active cell */}
        <div
          className={`pf-hole${overlayOn ? " pf-hole--on" : ""}`}
          style={holeStyle}
          aria-hidden="true"
        />
      </div>

      <style jsx global>{`

        /* ─── Section ─── */
        .pf-section {
          background: transparent;
          width: 100%;
          overflow: hidden;
          position: relative;
          padding-bottom: 80px;
        }

        /* ─── Grid ─── */
        .pf-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 2px;
          background: #111;
          width: 100%;
          height: 80vh;
          overflow: hidden; 
          isolation: isolate;
        }

        /* ─── Cell ─── */
        .pf-cell {
          position: relative;
          overflow: hidden;
          cursor: crosshair;
          background: #000;
        }
        .pf-cell--active { z-index: auto; }

        /* ─── Photo: visible by default ─── */
        .pf-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 3;
          opacity: 1;
          transform: scale(1);
          transition:
            opacity   0.45s ease,
            transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Non-active cells when grid has an active cell → drop image, show video */
        .pf-grid:has(.pf-cell--active) .pf-cell:not(.pf-cell--active) .pf-img-wrap {
          z-index: 1;
          opacity: 0;
        }

        /* Active cell: photo stays on top */
        .pf-cell--active .pf-img-wrap {
          z-index: 3 !important;
          opacity: 1 !important;
          transform: scale(1.03);
        }

        /* ─── Cell hint border ─── */
        .pf-cell-hint {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255,255,255,0.04);
          pointer-events: none;
          z-index: 1;
          transition: border-color 0.3s ease;
        }
        .pf-cell:hover .pf-cell-hint {
          border-color: rgba(255,215,0,0.12);
        }

        /* ─── Label ─── */
        .pf-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 50px 20px 20px;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.5)  55%,
            transparent 100%
          );
          z-index: 5;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
        }
        .pf-cell--active .pf-label {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-label__num {
          display: block;
          font-family: 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #ffd700;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .pf-label__title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(11px, 1.4vw, 22px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          line-height: 1.2;
        }

        /* ─── Gold ring ─── */
        .pf-ring {
          position: absolute;
          inset: 0;
          border: 0px solid #ffd700;
          z-index: 6;
          pointer-events: none;
          transition: border-width 0.2s ease, box-shadow 0.2s ease;
        }
        .pf-cell--active .pf-ring {
          border-width: 2px;
          box-shadow: inset 0 0 24px rgba(255,215,0,0.15);
        }

        /* ─── Tap hint icon (hidden on desktop) ─── */
        .pf-tap-hint {
          display: none;
        }

        /* ─── Video overlay (shared, all breakpoints) ─── */
        .pf-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.45s ease;
        }
        .pf-overlay--on { opacity: 1; }
        .pf-overlay__video {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .pf-overlay__tint {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
        }

        /* ─── Hole ─── */
        .pf-hole {
          position: absolute;
          z-index: 4;
          pointer-events: none;
          background: transparent;
          opacity: 0;
          transition:
            opacity 0.35s ease,
            left    0.22s ease,
            top     0.22s ease,
            width   0.22s ease,
            height  0.22s ease;
            outline: 2px solid #ffd700;
  outline-offset: -2px;
        }
        .pf-hole--on { opacity: 1; }

        /* ═══════════════════════════════════════
           TABLET  < 1024px  →  2 columns
        ═══════════════════════════════════════ */
        @media (max-width: 1023px) {
          .pf-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 44vw);
             clip-path: inset(0); 
            height: auto;
          }
          .pf-cell {
            cursor: pointer;
          }
          /* Show tap-hint play icon */
          .pf-tap-hint {
            display: flex;
            position: absolute;
            top: 12px;
            right: 12px;
            z-index: 6;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .pf-cell--active .pf-tap-hint {
            opacity: 0;
          }
          /* Labels: same as desktop — hidden by default, slide up only on active */
          .pf-label {
            opacity: 0;
            transform: translateY(14px);
            padding: 40px 14px 14px;
          }
          .pf-cell--active .pf-label {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ═══════════════════════════════════════
           MOBILE  < 640px  →  2 columns tighter
        ═══════════════════════════════════════ */
        @media (max-width: 639px) {
          .pf-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 50vw);
            gap: 2px;
            height: auto;
          }
          .pf-label__title { font-size: 11px; }
          .pf-label__num   { font-size: 9px;  }
          .pf-label { padding: 30px 10px 12px; }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;