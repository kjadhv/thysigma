"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

/* ── Your real image imports ─────────────────────────────────────────── */
import one   from "public/images/services/contentc.jpeg";
import two   from "public/images/services/lives.jpeg";
import three from "public/images/services/lives.jpeg";
import four  from "public/images/services/contentc.jpeg";
import five  from "public/images/services/cr_photo.jpg";
import six   from "public/images/services/cm_photo.jpg";

/* ── Types ───────────────────────────────────────────────────────────── */
interface PortfolioItem {
  img: StaticImageData;
  title: string;
  video: string;
}

/* ── Data ────────────────────────────────────────────────────────────── */
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    img: one,
    title: "Content Creation",
    video: "/images/services/cc1.mp4",
  },
  {
    img: two,
    title: "Content Monetisation",
    video: "/images/services/ls1.mp4",
  },
  {
    img: three,
    title: "Technology & Infrastructure Services",
    video: "/images/services/mes1.mp4",
  },
  {
    img: four,
    title: "Content Management",
    video: "/videos/content-creation.mp4",
  },
  {
    img: five,
    title: "Content Repurposing",
    video: "/images/services/cr2.mp4",
  },
  {
    img: six,
    title: "Content Marketing",
    video: "/images/services/cm2.mp4",
  },
];

/* ── Component ───────────────────────────────────────────────────────── */
const HomeTwoPortfolio = () => {
  const gridRef    = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [holeStyle, setHoleStyle] = useState<React.CSSProperties>({});
  const [overlayOn, setOverlayOn] = useState(false);

  /* Snap the transparent hole over whichever cell is hovered */
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

  const handleEnter = useCallback(
    (idx: number, cellEl: HTMLElement) => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);

      const item = PORTFOLIO_ITEMS[idx];
      const vid  = videoRef.current;
      if (!vid) return;

      if (vid.dataset.src !== item.video) {
        vid.dataset.src = item.video;
        vid.src         = item.video;
        vid.load();
      }
      vid.play().catch(() => {});

      setActiveIdx(idx);
      setOverlayOn(true);
      positionHole(cellEl);
    },
    [positionHole]
  );

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => {
      setOverlayOn(false);
      setActiveIdx(null);
      videoRef.current?.pause();
    }, 100);
  }, []);

  /* Re-snap hole on resize */
  useEffect(() => {
    const onResize = () => {
      if (activeIdx === null) return;
      const cell = gridRef.current?.querySelector<HTMLElement>(
        `[data-idx="${activeIdx}"]`
      );
      if (cell) positionHole(cell);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx, positionHole]);

  return (
    <section className="pf-section">
      <div className="pf-grid" ref={gridRef}>

        {/* ── Cells ─────────────────────────────────────────────────── */}
        {PORTFOLIO_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`pf-cell${activeIdx === i ? " pf-cell--active" : ""}`}
            data-idx={i}
            onMouseEnter={(e) => handleEnter(i, e.currentTarget)}
            onMouseLeave={handleLeave}
          >
            {/*
              Image is hidden by default (opacity 0).
              Only the active (hovered) cell reveals its image.
              z-index 3 puts it ABOVE the video overlay (z-index 2)
              so only the hovered cell's image is visible.
            */}
            <div className="pf-img-wrap">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width:1024px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Label – slides up on hover */}
            <div className="pf-label">
              <span className="pf-label__num">0{i + 1}</span>
              <h3 className="pf-label__title">{item.title}</h3>
            </div>

            {/* Subtle cell border hint so user knows cells exist */}
            <div className="pf-cell-hint" />

            {/* Gold ring – visible only on active cell */}
            <div className="pf-ring" />
          </div>
        ))}

        {/* ── Video overlay (covers entire grid, z-index 2) ─────────── */}
        {/*   Visible only when overlayOn = true                         */}
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

        {/*
          ── Hole (z-index 4) ──────────────────────────────────────────
          Sits ABOVE the video overlay. It is fully transparent so the
          active cell's image (z-index 3, inside the cell) shows through.
          The cell's z-index context is raised via .pf-cell--active.
        */}
        <div
          className={`pf-hole${overlayOn ? " pf-hole--on" : ""}`}
          style={holeStyle}
          aria-hidden="true"
        />
      </div>

      {/* ── Styles ───────────────────────────────────────────────────── */}
      <style jsx global>{`

        /* Full-viewport dark section */
        .pf-section {
  background: transparent;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 80px;
}

.pf-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px;
  background: transparent;
  width: 100%;
  height: 100%;
  isolation: isolate;
}

/* ── Cell ── */
.pf-cell {
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  background: transparent;
}

/* NO z-index raise on active cell anymore */
.pf-cell--active {
  z-index: auto;
}

/* ── Image: z-index 3, sits IN FRONT of video overlay ── */
.pf-img-wrap {
  position: absolute;
  inset: 0;
  z-index: 3;          /* above video (z-2), below label (z-5) */
  opacity: 0;
  transform: scale(1.06);
  transition:
    opacity  0.45s ease,
    transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.pf-cell--active .pf-img-wrap {
  opacity: 1;
  transform: scale(1);
}

/* ── Cell hint ── */
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

/* ── Label: z-index 5, always above everything ── */
.pf-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 28px 26px;
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
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #ffd700;
  margin-bottom: 6px;
  text-transform: uppercase;
}
.pf-label__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(15px, 1.5vw, 22px);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 6px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.pf-label__desc {
  font-family: sans-serif;
  font-size: clamp(11px, 0.85vw, 14px);
  color: rgba(255,255,255,0.6);
  margin: 0;
  line-height: 1.5;
}

/* ── Gold ring ── */
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

/* ── Video overlay: behind everything at z-index 2 ── */
.pf-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.45s ease;
}
.pf-overlay--on {
  opacity: 1;
}
.pf-overlay__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.pf-overlay__tint {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
}

/* ── Hole: gold glow frame at z-index 4 ── */
.pf-hole {
  position: absolute;
  z-index: 4;
  pointer-events: none;
  background: transparent;
  opacity: 0;
  transition:
    opacity  0.35s ease,
    left     0.22s ease,
    top      0.22s ease,
    width    0.22s ease,
    height   0.22s ease;
  box-shadow:
    0 0 0 2px #ffd700,
    0 0 50px 6px rgba(255,215,0,0.2);
}
.pf-hole--on {
  opacity: 1;
}

/* ── Mobile ── */
@media (max-width: 1024px) {
  .pf-section { height: auto; }
  .pf-grid {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
    height: auto;
    gap: 2px;
  }
  .pf-cell { height: 280px; }
  .pf-img-wrap {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
  .pf-label {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  .pf-overlay, .pf-hole { display: none; }
}
        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;