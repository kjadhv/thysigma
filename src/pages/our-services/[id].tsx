// pages/our-services/[id].tsx

import { useRouter } from "next/router";
import Image from "next/image";
import img1 from "public/images/services/videop.jpeg";
import img2 from "public/images/services/lives.jpeg";
import img3 from "public/images/services/contentpp.jpeg";
import img4 from "public/images/services/contentc.jpeg";
import img5 from "public/images/services/contentd.jpeg";
import img6 from "public/images/services/graphicd.jpeg";

const services = [
  {
    title: "Video Production & Photography",
    subtitle: "Let the best stories unfold, one frame at a time.",
    img: img1,
    tag: "Visual Storytelling",
    left: ["Corporate Events", "Editorials", "AI/ML Video Production", "Podcast"],
    right: ["Sports Events", "Brand Films", "Product Photography"],
    seo: `
In today's hyper-competitive digital landscape, the way a brand presents itself visually can make or break its identity. At Thysigma Services, we believe that every business — no matter the size or sector — deserves to tell its story with cinematic clarity, emotional depth, and technical precision. Our video production and photography services in Navi Mumbai and Thane are designed not just to capture moments, but to craft narratives that resonate, inspire, and convert.

We work at the intersection of creativity and technology. From the initial concept stage to the final frame, our team of experienced directors, cinematographers, and editors bring a meticulous eye for detail to every project. We understand that your brand's visual identity is an investment — and we treat it as such. Whether you're a startup launching your first product, an enterprise documenting a corporate milestone, or an athlete seeking a highlight reel that stands out, Thysigma delivers work that exceeds expectations.

Our corporate video production services cover the full spectrum of business communication. We produce engaging brand films that communicate your company's values and vision with clarity and flair. Training videos, onboarding content, and internal communications are crafted to be clear, professional, and impactful. Promotional videos are designed with your audience in mind — built to drive awareness, engagement, and action across digital and broadcast platforms.

Live event coverage is another cornerstone of our work. We deploy multi-camera setups to capture corporate events, product launches, award ceremonies, and conferences with broadcast-level quality. Our live streaming capabilities allow seamless broadcasting across YouTube, Zoom, and private enterprise servers — bringing your audience into the room, no matter where they are in the world. Every live production is managed end-to-end, from pre-event technical checks to post-event highlight cuts.

Photography at Thysigma is more than pointing a lens — it's about understanding light, composition, and emotion. Our product photography service gives brands the high-resolution, studio-quality imagery they need to compete in e-commerce and advertising. Our editorial and event photography teams capture moments with a journalistic instinct, preserving the energy, detail, and authenticity of every occasion. From sports events that demand split-second precision to lifestyle campaigns that require a carefully crafted aesthetic, our photographers deliver every time.

We are proud to be at the forefront of AI and ML-powered video production — a rapidly evolving frontier that Thysigma embraced early. By integrating intelligent tools into our creative workflow, we're able to produce content that is faster, more personalised, and more innovative than conventional methods allow. This includes AI-assisted editing, automated motion graphics, and machine learning-driven colour grading that ensures consistency across large content libraries.

Podcast production has emerged as one of the most powerful tools in modern brand communication, and our studio is fully equipped to make yours stand out. From audio treatment and visual recording to motion graphic intros and platform distribution, we handle every element of your podcast journey with professionalism and flair.

At Thysigma Services, our commitment to quality is absolute. We use industry-leading equipment — cinema-grade cameras, professional lighting rigs, and broadcast audio systems — paired with creative direction that is always in service of your story. We don't just deliver files; we deliver finished, polished content ready for its audience. Our process is collaborative, transparent, and built around your timeline and budget.

Located in Navi Mumbai with projects spanning Thane and the wider Mumbai Metropolitan Region, we're the production partner businesses across Maharashtra trust to raise the standard of their visual communication. From a single photograph to a full-scale multi-day production, Thysigma brings the same dedication, creativity, and craftsmanship to every brief we receive.

If you're ready to elevate how your brand looks, sounds, and feels — you're ready for Thysigma.
    `,
  },
  {
    title: "Live Streaming",
    subtitle: "Live streaming that brings your audience into the moment.",
    img: img2,
    tag: "Real-Time Broadcast",
    left: ["Streaming", "Video Recording", "Motion Graphics", "Ad Creatives"],
    right: ["Live Audio Mixing", "Graphic Overlays", "VR"],
    seo: `
In an era defined by instant connection, live streaming has become one of the most powerful tools in any brand's communication arsenal. At Thysigma Services, we deliver professional, high-quality live streaming solutions that transform your events into immersive experiences for audiences near and far. Whether you're hosting a corporate town hall, a product unveiling, a sporting event, or an educational seminar, we ensure every frame and every word reaches your audience with clarity, reliability, and style.

Our live streaming infrastructure is built for professional-grade output. We use multi-camera configurations, broadcast-quality encoders, and redundant connectivity systems to ensure your stream never drops when it matters most. From platform setup on YouTube Live, Zoom, and private servers to on-the-day technical management, our crew handles every aspect so you can focus on the event itself.

Real-time audio mixing is a discipline that separates amateur streams from professional broadcasts — and it's one we take seriously. Our engineers manage microphone feeds, ambient sound, and music with precision, delivering clear, balanced audio that enhances your content rather than detracting from it. Graphic overlays and motion graphics are seamlessly integrated into the live feed, providing branded visuals, lower thirds, and on-screen information that reinforce your identity.

We also offer video recording alongside every live stream, delivering high-resolution archive footage that can be repurposed for training materials, social media, and future campaigns. Our ad creative team can develop pre-roll and mid-roll content tailored to your streaming context, turning your broadcast into a comprehensive marketing channel. With VR-compatible streaming now part of our capabilities, Thysigma is prepared to take your audience beyond the screen entirely.

Every live production at Thysigma is underpinned by thorough pre-production planning, on-site technical rehearsal, and a dedicated support team on the day. We believe reliability is as important as quality — because in live broadcasting, there are no second takes.
    `,
  },
  {
    title: "Content Post Production",
    subtitle: "Post-production is where raw footage becomes cinematic.",
    img: img3,
    tag: "Finishing & Polish",
    left: ["Editing", "Color Correction", "Audio Treatment"],
    right: ["Motion Graphics", "Content Repurposing"],
    seo: `
The edit suite is where stories are truly born. Raw footage, no matter how beautifully shot, only becomes compelling content through the skilled hands of an editor, colorist, and sound designer working in harmony. At Thysigma Services, our post-production team brings technical mastery and creative instinct to every project, transforming hours of raw material into polished, audience-ready content that reflects the highest standards of the craft.

Our editing process begins with a thorough understanding of your objectives. Whether we're cutting a two-minute brand film, a feature-length documentary, or a series of social media shorts, our editors approach every project with the same rigour — selecting the best moments, building the right pace, and shaping a narrative arc that keeps viewers engaged from start to finish.

Colour correction and colour grading are arts unto themselves, and our DIT team ensures every frame of your content looks exactly as intended — whether that means naturalistic accuracy, a rich cinematic tone, or a stylised look designed to match your brand palette. Audio treatment is handled with equal care: dialogue clarity, noise removal, music balancing, and sound design all contribute to a viewing experience that feels premium and professional.

Motion graphics add a layer of visual communication that elevates any production. Our design team creates everything from subtle lower thirds and branded title sequences to elaborate animated infographics and full visual effects composites. Content repurposing is another key service — we take long-form content and intelligently re-edit it into social media cuts, teaser trailers, highlight reels, and platform-specific formats, maximising the value of every production.

At Thysigma, post-production is not an afterthought — it is where your vision is realised.
    `,
  },
  {
    title: "Content Creation",
    subtitle: "From ideas to execution, we craft original content.",
    img: img4,
    tag: "Original Production",
    left: ["Web Series", "Mini Series", "Event Concept"],
    right: ["Micro Dramas", "Concept Creation"],
    seo: `
Original content is the currency of the digital age. Audiences are hungry for stories that entertain, challenge, and connect — and brands that invest in authentic, high-quality content production consistently outperform those that don't. Thysigma Services is your end-to-end partner in content creation, from the earliest spark of an idea to a finished production ready for distribution across every platform.

We specialise in web series and mini series development, working with brands, creators, and platforms to develop serialised content that builds loyal audiences over time. Our development process includes concept creation, scripting, casting, and full production management — ensuring creative coherence at every stage.

Micro dramas are a format we've mastered in the age of short-form consumption — compact, emotionally charged narratives designed to stop the scroll and leave a lasting impression. Event concept design rounds out our offering, bringing original creative direction to live and hybrid brand experiences. From the theme and visual identity of an event to its content programme and post-event digital life, Thysigma shapes experiences that are greater than the sum of their parts.
    `,
  },
  {
    title: "Content Distribution",
    subtitle: "Content deserves the right audience.",
    img: img5,
    tag: "Reach & Amplification",
    left: ["Ad Distribution", "Broadcast"],
    right: ["Digital Marketing", "OTT"],
    seo: `
Creating exceptional content is only half the equation. The other half is ensuring it reaches the right people, on the right platforms, at the right time. Thysigma's content distribution services are designed to maximise the reach and impact of every piece of content we produce — or that you bring to us for distribution.

We manage ad distribution campaigns across digital and broadcast channels, using data-driven targeting to ensure your content reaches the audiences most likely to engage and convert. Our digital marketing team operates across social media, search, and display networks, combining paid and organic strategies for sustained visibility and growth.

OTT distribution opens your content to streaming platforms and connected TV audiences, and Thysigma has the relationships and technical expertise to get your productions onto the platforms your audience calls home. Broadcast partnerships round out our distribution capability, giving brands and content creators access to traditional television audiences alongside their digital reach.

From a single campaign to a comprehensive content strategy, Thysigma ensures your content works as hard as it possibly can.
    `,
  },
  {
    title: "Graphic Design",
    subtitle: "Design that speaks before words do.",
    img: img6,
    tag: "Visual Identity",
    left: ["Ad Creatives", "Marketing Materials"],
    right: ["Digital Creatives", "Event Promotion"],
    seo: `
Great design doesn't just look good — it communicates. At Thysigma Services, our graphic design team creates visual assets that are strategic as well as beautiful, ensuring every piece of design work is aligned with your brand identity and your business objectives.

Our ad creative service delivers high-impact visuals for digital and print campaigns — from social media graphics and banner ads to magazine spreads and outdoor formats. We understand the specific requirements of each medium and design accordingly, ensuring your creative assets are optimised for maximum impact wherever they appear.

Marketing materials, event promotion graphics, and digital creatives are all produced in-house by a team that combines design expertise with commercial intelligence. We don't just make things look good — we make things that work. From a single event poster to a comprehensive campaign across multiple formats and channels, Thysigma's design team delivers creative work that is on-brief, on-brand, and always on time.
    `,
  },
];

export default function ServicePage() {
  const router = useRouter();
  const { id } = router.query;
  const service = services[Number(id)];

  if (!service) return <p style={{ padding: 40, color: "#fff", background: "#000" }}>Loading...</p>;

  return (
    <div className="page">

      {/* ───── HERO SECTION ───── */}
      <div className="hero">
        <div className="hero-image-wrap">
          <Image src={service.img} alt={service.title} fill style={{ objectFit: "cover" }} />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="hero-tag">{service.tag}</span>
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-subtitle">{service.subtitle}</p>
        </div>
      </div>

      {/* ───── MAIN BODY ───── */}
      <div className="body-wrap">

        {/* SERVICES GRID */}
        <section className="services-section">
          <div className="section-label">What We Offer</div>
          <div className="services-grid">
            {[...service.left, ...service.right].map((item) => (
              <div className="service-chip" key={item}>
                <span className="chip-arrow">➤</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="divider" />

        {/* SEO TEXT */}
        <section className="seo-section">
          <div className="section-label">About This Service</div>
          <div className="seo-body">
            {service.seo.trim().split("\n\n").map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
        </section>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .page {
          background: #0a0a0a;
          color: #f0ede8;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 62vh;
          min-height: 420px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-image-wrap {
          position: absolute;
          inset: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10,10,10,0.15) 0%,
            rgba(10,10,10,0.5) 50%,
            rgba(10,10,10,0.95) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px 52px;
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #e97820;
          border: 1px solid #e97820;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 14px;
          white-space: nowrap;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 6vw, 78px);
          line-height: 1;
          letter-spacing: 2px;
          color: #fff;
          margin-bottom: 16px;
          cursor: default;
          display: block;
          background: linear-gradient(90deg, #fff 0%, #fff 100%);
          background-size: 0% 3px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          transition: background-size 0.4s ease, color 0.3s ease, letter-spacing 0.3s ease, text-shadow 0.3s ease;
        }

        .hero-title:hover {
          color: #e97820;
          letter-spacing: 4px;
          text-shadow: 0 0 40px rgba(233, 120, 32, 0.45), 0 0 80px rgba(233, 120, 32, 0.2);
          background-image: linear-gradient(90deg, #e97820 0%, #ffb347 100%);
          background-size: 100% 3px;
        }

        .hero-subtitle {
          font-size: 18px;
          font-weight: 300;
          font-style: italic;
          color: rgba(240,237,232,0.7);
          letter-spacing: 0.3px;
        }

        /* ── BODY ── */
        .body-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 80px 100px;
        }

        .section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e97820;
          margin-bottom: 28px;
        }

        /* ── SERVICES GRID ── */
        .services-section {
          margin-bottom: 56px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }

        .service-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 14px 18px;
          font-size: 14px;
          font-weight: 400;
          color: #d8d4ce;
          cursor: default;
          transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease,
                      transform 0.25s ease, box-shadow 0.25s ease;
        }

        .service-chip:hover {
          border-color: #e97820;
          background: rgba(233, 120, 32, 0.1);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(233, 120, 32, 0.18), 0 0 0 1px rgba(233,120,32,0.3);
        }

        .service-chip:hover .chip-arrow {
          transform: translateX(4px);
          color: #ffb347;
        }

        .chip-arrow {
          color: #e97820;
          font-size: 12px;
          flex-shrink: 0;
          display: inline-block;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        /* ── DIVIDER ── */
        .divider {
          height: 1px;
          background: linear-gradient(to right, #e97820, rgba(255,255,255,0.08), transparent);
          margin-bottom: 56px;
        }

        /* ── SEO SECTION ── */
        .seo-section {}

        .seo-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 52px;
          column-gap: 72px;
        }

        .seo-body p {
          font-size: 15px;
          line-height: 1.85;
          font-weight: 300;
          color: rgba(240, 237, 232, 0.72);
          break-inside: avoid;
        }

        .seo-body p:first-child {
          grid-column: 1 / -1;
          font-size: 16.5px;
          font-weight: 400;
          color: rgba(240, 237, 232, 0.88);
          line-height: 1.9;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-content {
            padding: 0 28px 40px;
          }

          .body-wrap {
            padding: 44px 28px 72px;
          }

          .seo-body {
            grid-template-columns: 1fr;
          }

          .seo-body p:first-child {
            grid-column: 1;
          }

          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 560px) {
          .hero {
            height: 75vw;
            min-height: 300px;
          }

          .hero-title {
            font-size: 36px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}