import React, { useState } from "react";

const faqs = [
  {
    q: "What Is The Cost Of Professional Event Livestreaming Services In India?",
    a: "Pricing depends on event scale, duration, equipment, and crew requirements.",
  },
  {
    q: "Do You Offer Corporate Event Videography And Photography Packages?",
    a: "Yes, we provide custom corporate packages tailored to your event needs.",
  },
  {
    q: "Which Events Do You Provide Livestreaming Services For?",
    a: "We cover corporate events, weddings, conferences, concerts, and more.",
  },
  {
    q: "Do You Provide Drone Videography For Events?",
    a: "Yes, drone videography is available where regulations allow.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-wrapper">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-title"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{item.q}</span>
                <span className="icon">{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="faq-content">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        /* ---- DESKTOP & iPAD (UNCHANGED) ---- */
        .faq-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }

        .faq-item {
          background: #111;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .faq-title {
          width: 100%;
          background: transparent;
          color: #fff;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
        }

        .faq-title .icon {
          color: #ff7425;
          font-size: 22px;
          flex-shrink: 0;
        }

        .faq-content {
          padding: 0 24px 20px;
          color: #ccc;
          font-size: 16px;
          line-height: 1.6;
        }

        /* ✅ MOBILE ONLY FIXES */
        @media (max-width: 767px) {
          .faq-item {
            margin-bottom: 14px; /* ✅ space between questions */
          }

          .faq-title {
            font-size: 14px;      /* ✅ smaller font */
            line-height: 1.4;
            padding: 14px 16px;
          }

          .faq-title .icon {
            font-size: 14px;      /* ✅ smaller + icon */
          }

          .faq-content {
            font-size: 13px;
            line-height: 1.5;
            padding: 6px 16px 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
