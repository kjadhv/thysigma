import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Thy Sigma",
  description: "Privacy Policy for Thy Sigma",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="policy">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="tag">LEGAL</p>
          <h1 className="heading">Privacy Policy</h1>
          <p className="sub">
            Thy Sigma respects your privacy and is committed to protecting your
            personal information.
          </p>

          <div className="meta">
            <span>Last updated: January 30, 2026</span>
            <span className="dot" />
            <Link className="contactBtn" href="/contact-us">
  Contact Us
</Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="content">
        <div className="container">
          <div className="card">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how Thy Sigma (“we”, “our”, “us”)
              collects, uses, and protects your data when you visit our website
              or contact us through forms, email, or phone.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <b>Personal Information:</b> Name, email address, phone number,
                company name (if provided)
              </li>
              <li>
                <b>Message Content:</b> Any information you submit via contact
                form or email
              </li>
              <li>
                <b>Technical Data:</b> IP address, browser type, device
                information and pages visited (only if analytics tools are
                enabled)
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and requests</li>
              <li>To provide quotations and service-related communication</li>
              <li>To improve website experience and performance</li>
              <li>To prevent spam, fraud and secure our website</li>
            </ul>

            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information. We may share
              limited information only with trusted third parties for:
            </p>
            <ul>
              <li>Website hosting / service providers</li>
              <li>Email or communication tools</li>
              <li>Legal compliance (if required by law)</li>
            </ul>

            <h2>5. Cookies & Analytics</h2>
            <p>
              Our website may use cookies or analytics tools to analyze traffic
              and improve performance. You can disable cookies from your browser
              settings.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We use reasonable security practices to safeguard personal data.
              However, no online method of storage or transmission is 100%
              secure.
            </p>

            <h2>7. Your Rights</h2>
            <p>You may request to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate personal information</li>
              <li>Delete your personal information</li>
            </ul>

            <h2>8. Third Party Links</h2>
            <p>
              Our website may contain links to external websites (LinkedIn,
              YouTube, etc.). We are not responsible for their privacy policies.
            </p>

            <h2>9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Any updates
              will be posted on this page.
            </p>

            <h2>10. Contact</h2>
            <p className="contactBox">
              For privacy-related concerns, contact us at:
              <br />
              <span>
                Email:{" "}
                <Link href="mailto:kd@thysigma.com">kd@thysigma.com</Link>
              </span>
              <br />
              <span>Location: Navi Mumbai, India</span>
            </p>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .policy {
          background: #000;
          min-height: 100vh;
          color: #fff;
        }
//        .contactBtn {
//   display: inline-flex !important;
//   align-items: center !important;
//   justify-content: center !important;

//   padding: 8px 16px !important;
//   border-radius: 999px !important;

//   font-size: 13px !important;
//   font-weight: 700 !important;
//   text-decoration: none !important;

//   background: #ff7425 !important;
//   color: #000 !important;

//   transition: 0.25s ease !important;
//   box-shadow: 0 10px 30px rgba(255, 116, 37, 0.2) !important;
// }

// .contactBtn:hover {
//   background: #fff !important;
//   color: #000 !important;
//   transform: translateY(-2px) !important;
// }
        .container {
          max-width: 1100px;
          margin: auto;
          padding: 0 20px;
        }

        /* HERO */
        .hero {
          padding: 90px 0 45px;
          border-bottom: 1px solid #222;
          background: radial-gradient(
            circle at 20% 20%,
            rgba(255, 116, 37, 0.12),
            transparent 55%
          );
        }

        .tag {
          color: #ff7425;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .heading {
          font-size: 46px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .sub {
          color: #bfbfbf;
          font-size: 17px;
          line-height: 1.75;
          max-width: 750px;
        }

        .meta {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #888;
          font-size: 13px;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #444;
          display: inline-block;
        }

        .metaLink {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          transition: 0.25s ease;
        }

        .metaLink:hover {
          color: #ff7425;
          border-bottom: 1px solid rgba(255, 116, 37, 0.65);
        }

        /* CONTENT */
        .content {
          padding: 45px 0 80px;
        }

        .card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid #1d1d1d;
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.55);
        }

        .card h2 {
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ff7425;
          margin-top: 28px;
          margin-bottom: 12px;
        }

        .card h2:first-child {
          margin-top: 0;
        }

        .card p {
          color: #bfbfbf;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 10px;
        }

        .card ul {
          padding-left: 20px;
          margin: 12px 0 0;
          color: #bfbfbf;
          line-height: 1.9;
          font-size: 16px;
        }

        .card li {
          margin-bottom: 8px;
        }

        .card b {
          color: #fff;
        }

        .contactBox {
          border-left: 3px solid #ff7425;
          padding-left: 14px;
          margin-top: 12px;
          background: rgba(255, 116, 37, 0.05);
          border-radius: 12px;
          padding: 14px 14px;
        }

        .contactBox a {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        }

        .contactBox a:hover {
          color: #ff7425;
          border-bottom: 1px solid rgba(255, 116, 37, 0.65);
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .heading {
            font-size: 38px;
          }
          .card {
            padding: 28px 20px;
          }
        }

        @media (max-width: 767px) {
          .hero {
            padding: 75px 0 38px;
          }
          .heading {
            font-size: 32px;
          }
          .sub {
            font-size: 15px;
          }
          .card p,
          .card ul {
            font-size: 14.5px;
          }
        }
      `}</style>
    </main>
  );
}
