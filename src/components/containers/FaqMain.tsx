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
  // {
  //   q: "Do You Provide Drone Videography For Events?",
  //   a: "Yes, drone videography is available where regulations allow.",
  // },
  {
    q: "What makes Thy Sigma your reliable partner?",
    a: "We blend 16+ years of media technology expertise with high-end production. Our services include backup internet, multi-camera switching, on-ground technical crew, professional audio, and fast delivery timelines—ensuring a risk-free, premium event media experience.",
  },
  {
    q: "How quickly can you deliver edited photos and event videos?",
    a: "We deliver preview photos within 24 to 48 hours, reels and social media edits within 3 to 5 days, and complete event films in 10 to 15 days. Faster deliveries can be requested for urgent campaigns.",
  },
  {
    q: "Do you offer social media content creation for events?",
    a: "Yes. Our team creates event highlight reels, posters, promo videos, and Instagram-ready edits. These are optimized for engagement to help you boost your event&apos;s visibility online.",
  },
  {
    q: "Do you work with event management companies and agencies?",
    a: "Absolutely. We collaborate with event agencies, wedding planners, and experiential marketing companies to manage media production for their clients. Our team acts as an extension of the event organizer&apos;s brand.",
  },
  // {
  //   q: "What equipment do you use for livestreaming and video production?",
  //   a: "We use 4K mirrorless cameras, multi-cam switchers, stabilizers, drones, broadcast audio systems, lighting rigs, and bonded high-speed internet to ensure stable, professional production.",
  // },
  {
    q: "Do you offer custom media packages for expos and award shows?",
    a: "Yes. We create custom media packages for large events such as Edu Expos, trade fairs, conventions, and award ceremonies—including livestreaming, video coverage, photography, interviews, and post-event highlight films.",
  },
  {
    q: "Can I book Thy Sigma for outstation or destination events?",
    a: "Yes. We provide pan-India event media services and travel for destination weddings, conferences, corporate offsites, and expos. Travel and logistics can be customized based on the event location.",
  },
  {
    q: "Do you offer video editing services using client-provided footage?",
    a: "Yes. Our editors can work with raw footage provided by the client to create polished reels, event highlights, or corporate videos even if we were not the ones who shot the content.",
  },
  {
    q: "What is included in your event livestreaming package?",
    a: "Our livestreaming package includes- Multi-camera streaming (number of cams depend on requirement), Live switching & graphics, Broadcast-level audio, Backup streaming routes, Technical crew & on-ground support.",
  },
  {
    q: "How reliable is your livestreaming setup?",
    a: "We maintain 99% uptime during events using redundant networks, failover systems, dual power sources, and backup encoder routes. Reliability is one of the strongest reasons clients choose us.",
  },
  {
    q: "How do I book Thy Sigma Media Services?",
    a: "You can book us via our website, WhatsApp, Instagram, or email. Our team responds within 1 hour and provides a custom quote based on your event requirements.",
  }
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
