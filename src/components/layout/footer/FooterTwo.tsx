import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import chroma from "chroma-js";
import logo from "public/images/logo.png";

const FooterTwo = () => {
  const year = new Date().getFullYear();
  const animatedTextRef = useRef<any>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!text) return;
    const chars = document.querySelectorAll(".animated-char");
    const tl = gsap.timeline({ repeat: -1, delay: 0.6 });
    const gradient = chroma.scale(["#ff7425", "#ffffff"]);

    chars.forEach((c, i) => {
      const d = i * 0.04;
      tl.to(c, { scaleY: 0.6, duration: 0.3 }, d)
        .to(c, { yPercent: -18, duration: 0.5, ease: "elastic" }, d + 0.4)
        .to(c, { color: gradient(i / chars.length).hex(), duration: 0.3 }, d + 0.4)
        .to(c, { yPercent: 0, color: "#ffffff", duration: 0.8 }, d + 0.8);
    });
  }, [text]);

  useEffect(() => {
    if (animatedTextRef.current?.textContent) {
      setText(animatedTextRef.current.textContent);
      animatedTextRef.current.innerHTML = "";
    }
  }, []);

  const titleStyle = {
    color: "#ff7425",
    fontSize: 22,
    letterSpacing: 1,
    textTransform: "uppercase" as const,
    marginBottom: 35,
  };

  const linkStyle = {
    display: "block",
    color: "#bfbfbf",
    fontSize: 19,
    textDecoration: "none",
    marginBottom: 12,
  };

  return (
    <footer style={{ background: "#000000", paddingTop: 80, position: "relative", zIndex: 100 }}>
      <div style={{ maxWidth: 1500, margin: "0 auto", padding: "0 10px" }}>
        {/* TOP — 4 COLUMNS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.9fr 1fr 0.7fr",
            gap: 50,
          }}
        >
          {/* LEFT */}
          <div>
            <Link href="/">
              <Image src={logo} alt="Thy Sigma" />
            </Link>

            <p
              style={{
                color: "#bfbfbf",
                fontSize: 14,
                marginTop: 20,
                lineHeight: 1.6,
              }}
            >
              We provide cinematic media solutions that elevate brand presence
              in the digital world.
            </p>

            <h2 style={{ marginTop: 28, fontSize: 26 }}>
              <Link
                href="mailto:kd@thysigma.com"
                ref={animatedTextRef}
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                kd@thysigma.com
                {text.split("").map((c, i) => (
                  <span
                    key={i}
                    className="animated-char"
                    style={{ display: "inline-block" }}
                  >
                    {c}
                  </span>
                ))}
              </Link>
            </h2>
          </div>

          {/* SERVICES */}
          <div>
            <div style={titleStyle}>Services</div>
            {[
              "Video Production",
              "Photography",
              "Live Events",
              "Media Training",
              "Social Media",
            ].map((s) => (
              <Link key={s} href="/our-services" style={linkStyle}>
                {s}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div>
            <div style={titleStyle}>Contact</div>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              style={{ ...linkStyle, color: "#ffffff" }}
            >
              LinkedIn
            </Link>

            <p style={{ ...linkStyle, cursor: "default" }}>
              116, Shah Heritage, Seawoods West,
              <br />
              Navi Mumbai
            </p>

            <p style={{ ...linkStyle, cursor: "default" }}>
              +91 90820 83273
            </p>

            <p style={{ ...linkStyle, cursor: "default" }}>
              kd@thysigma.com
            </p>
          </div>

          {/* PAGES */}
          <div>
            <div style={titleStyle}>Pages</div>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/about-us" style={linkStyle}>About</Link>
            <Link href="/our-services" style={linkStyle}>Services</Link>
            <Link href="/contact-us" style={linkStyle}>Contact</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM — COPYRIGHT ONLY */}
      <div
        style={{
          marginTop: 60,
          padding: "18px 0",
          borderTop: "1px solid #222",
          textAlign: "center",
          color: "#888",
          fontSize: 13,
          background: "#000000",
        }}
      >
        © {year} Powered by{" "}
        <Link
          href="https://www.zoho.com/sites/"
          target="_blank"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          ZOHO
        </Link>
        . All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterTwo;
