"use client";

import React from "react";
import Link from "next/link";

const TermsOfServicePage = () => {
  const lastUpdated = "30 January 2026";

  return (
    <section className="tos">
      <div className="container">
        <div className="top">
          <h1 className="title">Terms of Service</h1>
          <p className="meta">
            Last updated: <span>{lastUpdated}</span>
          </p>
          <p className="intro">
            Welcome to Thy Sigma. By accessing or using our website, services,
            and content, you agree to comply with and be bound by these Terms of
            Service. If you do not agree, please do not use our services.
          </p>
        </div>

        <div className="content">
          <div className="block">
            <h2>1. Definitions</h2>
            <p>
              “Company”, “we”, “our”, “us” refers to Thy Sigma. “User”, “you”,
              “your” refers to any person using our website or services.
              “Services” means video production, photography, live streaming,
              content editing, content creation, content distribution, and
              related media services.
            </p>
          </div>

          <div className="block">
            <h2>2. Use of Website</h2>
            <ul>
              <li>
                You agree not to misuse the website or attempt unauthorized
                access.
              </li>
              <li>
                You may not copy, duplicate, sell, or exploit our content
                without permission.
              </li>
            </ul>
          </div>

          <div className="block">
            <h2>3. Services & Deliverables</h2>
            <p>
              Service timelines, deliverables, formats, and revisions will be
              agreed in writing (email/WhatsApp/contract). The final output may
              vary depending on creative direction, lighting conditions, venue
              limitations, and client-provided inputs.
            </p>
          </div>
            <div className="block">
            <h2>4. Booking & Confirmation</h2>
            <p>
              A booking is confirmed only after advance payment (if applicable)
              and written confirmation from Thy Sigma (via invoice/email/WhatsApp).
              The client must share shoot/event details such as date, location,
              timing, and point-of-contact before the scheduled service.
            </p>
          </div>
          <div className="block">
            <h2>5. Payments</h2>
            <ul>
              <li>
                All payments must be made as per the agreed quotation/invoice.
              </li>
              <li>
                Advance payments may be required before booking or production.
              </li>
              <li>
                Late payments may result in delays in delivery or withholding of
                final assets.
              </li>
              <li>
                If the service extends beyond the agreed time, overtime charges
                may apply and will be calculated based on the additional hours.
              </li>
            </ul>
          </div>

          <div className="block">
            <h2>6. Revisions</h2>
            <p>
              Revisions are limited to the number specified in the quotation.
              Additional revisions (or major re-edits) may be chargeable.
              Revisions do not include reshoots unless explicitly agreed.
            </p>
          </div>

          <div className="block">
            <h2>7. Intellectual Property</h2>
            <ul>
              <li>
                Unless otherwise agreed, Thy Sigma retains ownership of raw
                footage and project files.
              </li>
              <li>
                Clients receive usage rights for the final deliverables after
                full payment.
              </li>
              <li>
                We may display project work in our portfolio/social media unless
                your agreement states otherwise.
              </li>
            </ul>
          </div>

          <div className="block">
            <h2>8. Client Responsibilities</h2>
            <ul>
              <li>
                You are responsible for ensuring permissions to record/film at
                venues.
              </li>
              <li>
                You confirm that you have rights to use any logos, music,
                footage, or materials you provide.
              </li>
              <li>
                Any delays in approvals may affect delivery schedules.
              </li>
            </ul>
          </div>

          <div className="block">
            <h2>9. Cancellations & Rescheduling</h2>
            <p>
              If a shoot/event is canceled or rescheduled, we will attempt to
              accommodate new dates based on availability. If cancellation is
              requested after booking/payment, only 50% of the paid amount will
              be refunded. Depending on timelines and resource allocation,
              additional cancellation charges may apply.
            </p>
          </div>

          <div className="block">
            <h2>10. Limitation of Liability</h2>
            <p>
              We are not liable for indirect damages, lost profits, or business
              interruption. Our liability, if any, is limited to the total fees
              paid by you for the services.
            </p>
          </div>

          <div className="block">
            <h2>11. Privacy</h2>
            <p>
              Your use of the website is also governed by our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>

          <div className="block">
            <h2>12. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Updated terms
              will be posted on this page with the revised date.
            </p>
          </div>

          <div className="block">
            <h2>13. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, contact us
              at:
            </p>
            <div className="contactBox">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:kd@thysigma.com">kd@thysigma.com</a>
              </p>
              <p>
                <strong>Phone:</strong> +91 90820 83273
              </p>
              <p>
                <strong>Address:</strong> 116, Shah Heritage, Seawoods West,
                Navi Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tos {
          background: #000;
          padding: 80px 0;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .top {
          margin-bottom: 44px;
        }

        .title {
          font-size: 46px;
          color: #fff;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }

        .meta {
          color: #9b9b9b;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .meta span {
          color: #fff;
        }

        .intro {
          color: #bfbfbf;
          line-height: 1.8;
          font-size: 16.5px;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .block {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 26px;
          border-radius: 18px;
        }

        .block h2 {
          color: #ff7425;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .block p {
          color: #bfbfbf;
          font-size: 15.8px;
          line-height: 1.8;
          margin: 0;
        }

        .block ul {
          margin: 10px 0 0;
          padding-left: 18px;
          color: #bfbfbf;
          line-height: 1.8;
          font-size: 15.8px;
        }

        .block li {
          margin-bottom: 10px;
        }

        a {
          color: #fff;
          text-decoration: underline;
        }

        .contactBox {
          margin-top: 14px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 116, 37, 0.25);
        }

        .contactBox p {
          margin: 6px 0;
        }

        @media (max-width: 768px) {
          .tos {
            padding: 60px 0;
          }

          .title {
            font-size: 34px;
          }

          .block {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default TermsOfServicePage;
