import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import chroma from "chroma-js";
import logo from "public/images/logo.png";

const FooterTwo = () => {
  const year = new Date().getFullYear();
  const animatedTextRef = useRef<HTMLAnchorElement | null>(null);
  const [text, setText] = useState("");

  /* EMAIL ANIMATION */
  useEffect(() => {
    if (!text) return;

    const chars = document.querySelectorAll(".animated-char");
    const tl = gsap.timeline({ repeat: -1, delay: 0.6 });
    const gradient = chroma.scale(["#ff7425", "#ffffff"]);

    chars.forEach((c, i) => {
      const d = i * 0.04;
      tl.to(c, { scaleY: 0.6, duration: 0.3 }, d)
        .to(c, { yPercent: -14, duration: 0.5, ease: "elastic" }, d + 0.4)
        .to(
          c,
          { color: gradient(i / chars.length).hex(), duration: 0.3 },
          d + 0.4
        )
        .to(c, { yPercent: 0, color: "#ffffff", duration: 0.8 }, d + 0.8);
    });
  }, [text]);

  useEffect(() => {
    if (animatedTextRef.current?.textContent) {
      setText(animatedTextRef.current.textContent);
      animatedTextRef.current.innerHTML = "";
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* LEFT */}
          <div className="col">
            <Link href="/">
              <Image src={logo} alt="Thy Sigma" width={150} />
            </Link>

            <p className="desc">
              We provide cinematic media solutions that elevate brand presence
              in the digital world.
            </p>

            <h2 className="email">
              <Link href="mailto:kd@thysigma.com" ref={animatedTextRef}>
                {text.split("").map((c, i) => (
                  <span key={i} className="animated-char">
                    {c}
                  </span>
                ))}
              </Link>
            </h2>
          </div>

          {/* SERVICES */}
          <div className="col">
            <div className="title">Services</div>
            {[
              "Video Production",
              "Photography",
              "Live Streaming",
              "Content Post Production",
              "Content Creation",
              "Content Distribution",
              "Graphic Design",
            ].map((service) => (
              <Link
                key={service}
                href="/our-services"
                className="link"
              >
                {service}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div className="col">
            <div className="title">Contact</div>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="link white"
            >
              LinkedIn
            </Link>

            <p className="link">
              116, Shah Heritage, Seawoods West,
              <br />
              Navi Mumbai
            </p>

            <p className="link">+91 90820 83273</p>
            <p className="link">kd@thysigma.com</p>
          </div>

          {/* PAGES */}
          <div className="col">
            <div className="title">Pages</div>
            <Link href="/" className="link">Home</Link>
            <Link href="/about-us" className="link">About</Link>
            <Link href="/our-services" className="link">Services</Link>
            <Link href="/contact-us" className="link">Contact</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="copyright">
        © {year} Powered by{" "}
        <Link href="https://www.zoho.com/sites/" target="_blank">
          ZOHO
        </Link>
        . All Rights Reserved
      </div>

      {/* STYLES */}
      <style jsx>{`
        .footer {
          background: #000;
          padding-top: 65px;
          position: relative;
          z-index: 999;
        }

        .container {
          max-width: 1400px;
          margin: auto;
          padding: 0 20px;
        }

        /* DESKTOP */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr;
          gap: 50px;
          align-items: flex-start;
        }

        .col {
          display: flex;
          flex-direction: column;
        }

        .desc {
          color: #bfbfbf;
          font-size: 17px;
          line-height: 1.75;
          margin: 12px 0 18px;
        }

        .email a {
          color: #fff;
          font-size: 19px;
          text-decoration: none;
        }

        .animated-char {
          display: inline-block;
        }

        .title {
          color: #ff7425;
          font-size: 18px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .link {
          color: #bfbfbf;
          font-size: 16px;
          margin-bottom: 13px;
          line-height: 1.6;
          text-decoration: none;
          display: block;
        }

        .white {
          color: #fff;
        }

        .copyright {
          margin-top: 44px;
          padding: 14px 0;
          border-top: 1px solid #222;
          text-align: center;
          color: #888;
          font-size: 12px;
          background: #000;
        }

        .copyright a {
          color: #fff;
          text-decoration: none;
          display: inline;
        }

        /* TABLET (768px - 991px) */
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
          }

          .title {
            font-size: 16px;
            margin-bottom: 16px;
          }

          .link {
            font-size: 15px;
            margin-bottom: 11px;
          }

          .desc {
            font-size: 15px;
            line-height: 1.65;
          }
        }

        /* MOBILE (up to 767px) */
        @media (max-width: 767px) {
          .footer {
            padding-top: 55px;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .title {
            font-size: 15px;
            margin-bottom: 14px;
          }

          .link {
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 1.5;
          }

          .desc {
            font-size: 14px;
            line-height: 1.6;
            margin: 10px 0 14px;
          }

          .email a {
            font-size: 16px;
          }
        }

        /* SMALL MOBILE (up to 575px) */
        @media (max-width: 575px) {
          .footer-grid {
            gap: 28px;
          }

          .link {
            margin-bottom: 9px;
            font-size: 13.5px;
          }

          .title {
            font-size: 14.5px;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterTwo;