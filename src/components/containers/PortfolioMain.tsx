"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import socialm from "public/images/photos/7.jpeg";
import cameraman from "public/images/photos/11.jpeg";
import editing from "public/images/photos/12.jpeg";
import process from "public/images/photos/17.jpeg";
import like from "public/images/photos/15.jpeg";
import grp from "public/images/photos/16.jpeg";

const filterOptions = [
  "All",
  "Live Streaming",
  "Videography",
  "Photography",
  "Editing",
];

const cards = [
  { img: socialm, tag: "Videography", title: "VIREN | MEMORIAL CUP 2025", slug: "abcd-brand-documentary" },
  { img: cameraman, tag: "Live Streaming", title: "ALPHA FIGHTING | Kickboxing Bout", slug: "udaan-school-documentary" },
  { img: editing, tag: "Editing", title: "ALPHA MAIN EVENT | MMA 2025", slug: "amainevent" },
  { img: process, tag: "Videography", title: "SHIVMUDRA PRATISHTHAN", slug: "shiv" },
  { img: like, tag: "Photography", title: "Industrial Story", slug: "industrial-story" },
  { img: grp, tag: "Photography", title: "Creative Journey", slug: "creative-journey" },
];

const gridTemplateAreas = `
  "a a a a b b"
  "c c d d e e"
  "f f f f e e"
`;
const areaMap = ["a", "b", "c", "d", "e", "f"];

const PortfolioMain = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredCards =
    activeFilter === "All"
      ? cards
      : cards.filter((card) => card.tag === activeFilter);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || activeFilter !== "All") return;

    const directions = [
      { x: -320, y: 0, r: -6 },
      { x: 320, y: 0, r: 6 },
      { x: 0, y: 260, r: 5 },
      { x: 0, y: -260, r: -5 },
      { x: -200, y: 180, r: -6 },
      { x: 200, y: 180, r: 6 },
    ];

    cards.forEach((card, i) => {
      const el = itemRefs.current[card.slug];
      if (!el) return;

      el.style.opacity = "0";
      const { x, y, r } = directions[i];

      el.animate(
        [
          { opacity: 0, transform: `translate(${x}px, ${y}px) scale(0.9) rotate(${r}deg)` },
          { opacity: 1, transform: "translate(-12px, -12px) scale(1.04)" },
          { opacity: 1, transform: "translate(0,0) scale(1)" },
        ],
        {
          duration: 15000,
          delay: i * 160,
          easing: "cubic-bezier(.16,1,.3,1)",
          fill: "both",
        }
      );
    });
  }, [visible, activeFilter]);

  return (
    <section ref={sectionRef} style={{ background: "#000", padding: "60px 0" }}>
      <div className="container">

        {/* FILTERS */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
          {filterOptions.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                background: activeFilter === item
                  ? "linear-gradient(135deg,#6a39ff,#8f5bff)"
                  : "transparent",
                border: activeFilter === item ? "none" : "1px solid #fff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gridTemplateAreas, gridAutoRows: "270px", gap: "18px" }}>
          {filteredCards.slice(0, 6).map((card, i) => {
            const hover = hoveredIndex === i;

            return (
              <div key={card.slug} ref={(el) => { itemRefs.current[card.slug] = el; }} style={{ gridArea: areaMap[i] }}>
                <Link
                  href={`/portfolio/${card.slug}`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "26px",
                    overflow: "hidden",
                    transform: hover ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.4s ease",
                  }}
                >
                  {/* 🔥 ORANGE SEPIA LOOK */}
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{
                      objectFit: "cover",
                      filter: hover
                        ? "sepia(25%) saturate(110%) brightness(1.02) contrast(1.05)"
                        : "sepia(95%) saturate(160%) hue-rotate(-10deg) brightness(0.95) contrast(1.1)",
                      transition: "filter 0.6s ease",
                    }}
                  />

                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.85))" }} />

                  <span style={{ position: "absolute", top: 14, left: 14, background: "#fff", color: "#000", padding: "6px 14px", borderRadius: 999, fontSize: 12 }}>
                    {card.tag}
                  </span>

                  <div style={{ position: "absolute", left: 18, right: 18, bottom: 18, color: "#fff", fontSize: 15 }}>
                    {card.title}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PortfolioMain;
