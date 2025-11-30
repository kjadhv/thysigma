"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import one from "public/images/vpr.jpg";
import two from "public/images/lives.jpg";
import three from "public/images/eventm.jpg";
import four from "public/images/mediat.jpg";
import five from "public/images/sm.jpg";
import six from "public/images/ve2.png";

const pages = [
  { num: 1, title: "Video Production", subtitle: "Professional Storytelling", desc: "High-quality videos.", image: one },
  { num: 2, title: "Live Streaming", subtitle: "Real-Time Broadcasting", desc: "Seamless streaming.", image: two },
  { num: 3, title: "Event Management", subtitle: "Flawless Execution", desc: "From concept to completion.", image: three },
  { num: 4, title: "Media Technologies", subtitle: "Cutting-Edge Solutions", desc: "Advanced tech.", image: four },
  { num: 5, title: "Social Media", subtitle: "Strategic Growth", desc: "Engaging content.", image: five },
  { num: 6, title: "Video Editing", subtitle: "Polish & Perfection", desc: "Transform footage.", image: six },
];

const Page = ({ page }: any) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#0d0d0d",
      borderRadius: 8,
      overflow: "hidden",
    }}
  >
    <div style={{ position: "relative", height: "60%" }}>
      <Image src={page.image} alt={page.title} fill style={{ objectFit: "cover" }} />
    </div>
    <div style={{ padding: 20 }}>
      <span style={{ color: "#ff7425", fontSize: 12 }}>{page.subtitle}</span>
      <h3 style={{ color: "#fff", margin: "6px 0" }}>{page.title}</h3>
      <p style={{ color: "#aaa", fontSize: 13 }}>{page.desc}</p>
    </div>
  </div>
);

export default function FlipBook() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [anim, setAnim] = useState<"next" | "prev" | "close" | null>(null);
  const startX = useRef(0);

  const left = pages[page - 1];
  const right = pages[page];

  const lastPageReached = page >= pages.length;

  const next = () => {
    if (anim) return;

    // ✅ LAST PAGE → CLOSE BOOK
    if (lastPageReached) {
      setAnim("close");
      setTimeout(() => {
        setOpen(false);
        setPage(1);
        setAnim(null);
      }, 650);
      return;
    }

    setAnim("next");
    setTimeout(() => {
      setPage(p => p + 1);
      setAnim(null);
    }, 650);
  };

  const prev = () => {
    if (anim || page <= 1) return;
    setAnim("prev");
    setTimeout(() => {
      setPage(p => p - 1);
      setAnim(null);
    }, 650);
  };

  /* Mobile swipe */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff < -60) next();
    if (diff > 60) prev();
  };

  return (
    <section style={{ background: "#000", padding: "100px 0", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: 900,
          height: 560,
          position: "relative",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* COVER */}
        {!open && (
          <div
            onClick={() => setOpen(true)}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg,#1a1a1a,#0d0d0d)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 30px 100px rgba(0,0,0,0.9)",
            }}
          >
            📘 Click me to see what’s inside
          </div>
        )}

        {/* BOOK */}
        {open && (
          <>
            {/* LEFT PAGE */}
            <div
              onClick={prev}
              style={{
                position: "absolute",
                left: anim === "prev" ? "-50px" : 0,
                width: "50%",
                height: "100%",
                padding: 30,
                transition: "left 0.65s ease",
                cursor: page > 1 ? "pointer" : "default",
                opacity: anim === "close" ? 0 : 1,
              }}
            >
              {left && <Page page={left} />}
            </div>

            {/* RIGHT PAGE */}
            <div
              onClick={next}
              style={{
                position: "absolute",
                right:
                  anim === "next" ? "-50px" : anim === "close" ? 0 : 0,
                width: "50%",
                height: "100%",
                padding: 30,
                transition: "right 0.65s ease, opacity 0.65s ease",
                cursor: "pointer",
                opacity: anim === "close" ? 0 : 1,
              }}
            >
              {right && <Page page={right} />}
            </div>

            {/* SPINE */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 6,
                background: "linear-gradient(#111,#000,#111)",
                transform: "translateX(-50%)",
                opacity: anim === "close" ? 0 : 1,
                transition: "opacity 0.65s ease",
              }}
            />
          </>
        )}
      </div>
    </section>
  );
}
