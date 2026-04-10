'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

const MODAL_DATA: Record<string, { cat: string; title: string; desc: string; videos: { id: string; label: string }[]; gallery: string[] }> = {
  viren: {
    cat: 'Videography · Sports',
    title: 'Viren Memorial Cup 2025',
    desc: 'Full two-day tournament coverage of the Viren Memorial Cup 2025 — one of the most anticipated sporting tournaments of the year. Our professional videography team captured every crucial match, standout performance, and emotional moment across both days of competition.',
    videos: [
      { id: 'xfPqKPusCEU', label: 'Day 1 — Full Highlights' },
      { id: 'YyIOhKrziak', label: 'Day 2 — Finals & Championship Moments' },
    ],
    gallery: [],
  },
  fightclub: {
    cat: 'Live Streaming · Combat Sports',
    title: 'Fight Club | War of the Clubs 2025',
    desc: 'War of the Clubs — where months of rivalry, training, and determination get settled inside the cage. Our live streaming team delivered full real-time coverage with broadcast-quality production across both parts of the event.',
    videos: [
      { id: 'bGoKkIlHaqk', label: 'Part 1 — Opening Bouts' },
      { id: '5rJXRwOyqLM', label: 'Part 2 — Knockouts & Finals' },
    ],
    gallery: [],
  },
  alpha: {
    cat: 'Live Streaming · MMA',
    title: 'Alpha Fighting Series | MMA 2025',
    desc: 'The International Combat Sports Championship 2025 — the most anticipated MMA event of the year. Elite fighters from across the globe. Full broadcast-quality live coverage of the entire event and grand finale.',
    videos: [
      { id: 'FcEiCCJMlQQ', label: 'Full Live Coverage — Alpha Main Event' },
      { id: 'iBj3nOLYSHM', label: 'Grand Finale — Championship Fights' },
    ],
    gallery: [],
  },
  shiv: {
    cat: 'Videography · Cultural Sports',
    title: 'Shivmudra Pratishthan Chashak 2025',
    desc: 'More than a sporting event — a celebration of culture, community, and competitive excellence. Our team documented every highlight, every emotional moment, and every victory across this landmark edition.',
    videos: [{ id: 'Pz_zJi0KbEs', label: 'Full Event Coverage' }],
    gallery: [],
  },
  icff: {
    cat: 'Live Streaming · Combat Sports',
    title: 'ICFF 2025 — International Combat Fighting Federation',
    desc: 'A landmark moment for combat sports in India. Full real-time coverage of the entire ICFF event, giving fans across India and around the world a ringside experience with broadcast-quality production.',
    videos: [{ id: 'wDVWGxi6T7Y', label: 'Full Live Stream Coverage' }],
    gallery: [],
  },
  safetech: {
    cat: 'Photography · Corporate Events',
    title: 'Safetech Awards & Conference 2025',
    desc: 'Premium corporate event photography for the Safetech Awards & Conference 2025. 40+ images capturing keynotes, award ceremonies, networking, and the full arc of this industry event.',
    videos: [],
    gallery: ['safetech1','safetech2','safetech3','safetech4','safetech5','safetech6','safetech7','safetech8','safetech9','safetech10','safetech11','safetech12'],
  },
  ihff: {
    cat: 'Editing · Brand Content',
    title: 'IHFF | Brand Content — National MMA Championship',
    desc: 'Branded content edits, sponsor shoutouts, and social media cuts for the National MMA Championship 2025 at IHFF. From Zandu Fast Relief to Campa Energy and RiteBite MaxProtein — sponsor integrations that delivered visibility.',
    videos: [
      { id: 'T5kPB1fAd7g', label: 'National MMA Championship 2025 — Live Stream' },
      { id: '6yOtCNXrFOA', label: 'Brand Content Edit' },
    ],
    gallery: [],
  },
};

const PORTFOLIO_ITEMS: { key: string; tag: string; cat: string; img: string; title: string; role: string }[] = [
  { key: 'viren',     tag: 'Videography',    cat: 'video', img: 'https://www.thysigma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.d4a4c797.jpeg&w=1200&q=75',       title: 'Viren Memorial Cup 2025',             role: 'Full 2-Day Tournament Coverage' },
  { key: 'fightclub', tag: 'Live Streaming', cat: 'live',  img: 'https://www.thysigma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.f55c4eda.jpeg&w=1200&q=75',      title: 'Fight Club | War of the Clubs',       role: 'Combat Sports Live Production' },
  { key: 'alpha',     tag: 'Live Streaming', cat: 'live',  img: 'https://www.thysigma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.af445bbb.jpeg&w=1200&q=75',      title: 'Alpha Fighting Series | MMA 2025',   role: 'International Combat Sports Championship' },
  { key: 'shiv',      tag: 'Videography',    cat: 'video', img: 'https://www.thysigma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.219049a3.jpeg&w=1200&q=75',      title: 'Shivmudra Pratishthan Chashak 2025', role: 'Cultural Sports Tournament Coverage' },
  { key: 'icff',      tag: 'Live Streaming', cat: 'live',  img: 'https://www.thysigma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficff1.ee4dea2c.png&w=1200&q=75',    title: 'ICFF 2025',                          role: 'International Combat Fighting Federation' },
  { key: 'safetech',  tag: 'Photography',    cat: 'photo', img: 'https://www.thysigma.com/_next/image?url=%2Fimages%2Fsafetech%2Fsafetech1.jpeg&w=1200&q=75',             title: 'Safetech Awards & Conference 2025',  role: 'Corporate Event Photography · 40+ Images' },
  { key: 'ihff',      tag: 'Editing',        cat: 'edit',  img: 'https://www.thysigma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fihff5.23a74f28.jpeg&w=1200&q=75',   title: 'IHFF | Brand Content',               role: 'National MMA Championship · Branded Edits' },
];

const VIDEO_CARDS: { id: string; cat: string; title: string; desc: string }[] = [
  { id: 'xfPqKPusCEU', cat: 'Videography · 2025',    title: 'Viren Memorial Cup 2025 | Day 1',     desc: 'Full highlights of Day 1 — electrifying performances, tactical brilliance, and championship-calibre sport.' },
  { id: 'YyIOhKrziak', cat: 'Videography · 2025',    title: 'Viren Memorial Cup 2025 | Day 2',     desc: 'Finals and championship moments — where champions are made and legacies are written.' },
  { id: 'FcEiCCJMlQQ', cat: 'Live Streaming · 2025', title: 'Alpha Main Event | MMA Championship', desc: 'Full broadcast-quality coverage of the International Combat Sports Championship 2025.' },
  { id: 'bGoKkIlHaqk', cat: 'Live Streaming · 2025', title: 'Fight Club | War of the Clubs',       desc: 'Explosive combat sports rivalry event — real-time ringside coverage delivered to fans worldwide.' },
];

const SAFETECH_NUMS: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,24];
const safetechUrl = (n: number): string =>
  `https://www.thysigma.com/_next/image?url=%2Fimages%2Fsafetech%2Fsafetech${n}.jpeg&w=1200&q=75`;

// ─── Cursor ───────────────────────────────────────────────────────────────────
function Cursor(): React.ReactElement {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const mx = useRef<number>(0);
  const my = useRef<number>(0);
  const rx = useRef<number>(0);
  const ry = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent): void => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx.current - 5}px`;
        cursorRef.current.style.top  = `${my.current - 5}px`;
      }
    };
    document.addEventListener('mousemove', onMove);
    let raf: number;
    const anim = (): void => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current - 18}px`;
        ringRef.current.style.top  = `${ry.current - 18}px`;
      }
      raf = requestAnimationFrame(anim);
    };
    raf = requestAnimationFrame(anim);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{ width: 10, height: 10, background: '#c9a84c', borderRadius: '50%', position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999, transition: 'transform .15s ease', mixBlendMode: 'difference' }} />
      <div ref={ringRef}   style={{ width: 36, height: 36, border: '1px solid #c9a84c', borderRadius: '50%', position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998, opacity: 0.5, transition: 'all .25s ease' }} />
    </>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ data, onClose }: { data: typeof MODAL_DATA[string]; onClose: () => void }): React.ReactElement {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent): void => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', esc);
    };
  }, [onClose]);

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(8,8,8,.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}
    >
      <div style={{ background: '#0e0e0e', border: '1px solid #1e1e1e', maxWidth: 900, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: '1px solid #1e1e1e', color: '#888', width: 36, height: 36, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        >✕</button>
        <div style={{ padding: '40px 40px 24px' }}>
          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 8 }}>{data.cat}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: 2, color: '#f5f0e8' }}>{data.title}</div>
        </div>
        <div style={{ padding: '0 40px 40px' }}>
          <p style={{ fontSize: 13, color: '#888', lineHeight: 1.8, marginBottom: 32 }}>{data.desc}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
            {data.videos.map((v: { id: string; label: string }) => (
              <div key={v.id}>
                <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 8 }}>{v.label}</div>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#080808', border: '1px solid #1e1e1e' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
          {data.gallery.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
              {data.gallery.map((name: string) => (
                <img
                  key={name}
                  src={`https://www.thysigma.com/_next/image?url=%2Fimages%2Fsafetech%2F${name}.jpeg&w=800&q=75`}
                  alt={name}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', cursor: 'zoom-in' }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ src, onClose }: { src: string; onClose: () => void }): React.ReactElement {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent): void => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', esc);
    };
  }, [onClose]);

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.95)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: '1px solid #1e1e1e', color: '#f5f0e8', width: 44, height: 44, fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >✕</button>
      <img src={src} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} />
    </div>
  );
}

// ─── VideoCard ────────────────────────────────────────────────────────────────
function VideoCard({ id, cat, title, desc }: { id: string; cat: string; title: string; desc: string }): React.ReactElement {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div style={{ background: '#131313' }}>
      <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setLoaded(true)}>
        {loaded ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            allowFullScreen
            style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }}
            />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(8,8,8,.4)' }}>
              <div style={{ width: 56, height: 56, background: '#c9a84c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#080808' }}>▶</div>
            </div>
          </>
        )}
      </div>
      <div style={{ padding: '24px 28px' }}>
        <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 6 }}>{cat}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#f5f0e8', fontWeight: 400, marginBottom: 8 }}>{title}</div>
        <div style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PortfolioPage(): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [modalKey,     setModalKey]     = useState<string | null>(null);
  const [lightboxSrc,  setLightboxSrc]  = useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) (entry.target as HTMLElement).classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el: HTMLElement) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const modalData = modalKey ? MODAL_DATA[modalKey] : null;

  return (
    <>
      <Head>
        <title>Thy Sigma Media Services — Portfolio 2025</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ── Global styles (identical to original HTML) ── */}
      <style suppressHydrationWarning>{`
        :root{--black:#080808;--deep:#0e0e0e;--card:#131313;--border:#1e1e1e;--gold:#c9a84c;--gold-light:#e8c97a;--white:#f5f0e8;--muted:#888;}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:var(--black);color:var(--white);font-family:'DM Sans',sans-serif;font-weight:300;line-height:1.6;overflow-x:hidden;cursor:none;}
        body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");opacity:.025;pointer-events:none;z-index:9990;}

        @keyframes lineGrow{from{transform:scaleY(0);opacity:0}to{transform:scaleY(1);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        .hero-line{width:1px;height:80px;background:linear-gradient(to bottom,transparent,var(--gold));margin-bottom:40px;animation:lineGrow 1.2s ease forwards;transform-origin:top;}
        .hero-tag{font-size:10px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;opacity:0;animation:fadeUp .8s ease .3s forwards;}
        .hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(72px,12vw,180px);line-height:.9;letter-spacing:2px;color:var(--white);opacity:0;animation:fadeUp .8s ease .5s forwards;}
        .hero-title span{color:var(--gold);}
        .hero-sub{margin-top:32px;font-size:15px;color:var(--muted);max-width:440px;line-height:1.7;opacity:0;animation:fadeUp .8s ease .8s forwards;}
        .hero-cta{margin-top:48px;display:flex;align-items:center;gap:32px;opacity:0;animation:fadeUp .8s ease 1s forwards;}
        .hero-stats{position:absolute;right:60px;bottom:80px;display:flex;flex-direction:column;gap:32px;opacity:0;animation:fadeIn 1s ease 1.2s forwards;}
        .marquee-track{display:flex;animation:marquee 32s linear infinite;white-space:nowrap;}

        .btn-gold{padding:14px 36px;background:var(--gold);color:var(--black);font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-weight:500;text-decoration:none;transition:all .3s ease;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));display:inline-block;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;}
        .btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}

        .service-card{background:var(--card);padding:48px 36px;transition:background .3s;position:relative;overflow:hidden;cursor:default;}
        .service-card::before{content:'';position:absolute;top:0;left:0;width:2px;height:0;background:var(--gold);transition:height .4s ease;}
        .service-card:hover{background:#161616;}
        .service-card:hover::before{height:100%;}

        .portfolio-item{background:var(--card);position:relative;overflow:hidden;cursor:pointer;}
        .portfolio-item img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block;transition:transform .5s ease,filter .5s ease;filter:grayscale(20%);}
        .portfolio-item:hover img{transform:scale(1.05);filter:grayscale(0%);}
        .portfolio-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(8,8,8,.9) 0%,rgba(8,8,8,.3) 50%,transparent 100%);opacity:0;transition:opacity .4s ease;display:flex;flex-direction:column;justify-content:flex-end;padding:28px;}
        .portfolio-item:hover .portfolio-overlay{opacity:1;}

        .filter-btn{padding:10px 24px;background:transparent;border:1px solid var(--border);color:var(--muted);font-size:10px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;transition:all .3s;font-family:'DM Sans',sans-serif;}
        .filter-btn:hover,.filter-btn.active{background:var(--gold);border-color:var(--gold);color:var(--black);}

        .client-logo{background:var(--card);padding:36px 24px;display:flex;align-items:center;justify-content:center;transition:background .3s;}
        .client-logo:hover{background:#161616;}
        .client-name{font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:2px;color:var(--muted);text-align:center;transition:color .3s;}
        .client-logo:hover .client-name{color:var(--gold);}

        .why-card{background:var(--card);padding:48px;position:relative;overflow:hidden;}
        .why-card::after{content:'';position:absolute;bottom:0;right:0;width:80px;height:80px;background:radial-gradient(circle,rgba(201,168,76,.06),transparent);}

        .testimonial-card{background:var(--card);padding:36px;position:relative;}
        .testimonial-card::before{content:'"';font-family:'Playfair Display',serif;font-size:80px;color:var(--gold);opacity:.1;position:absolute;top:16px;left:24px;line-height:1;}

        .gallery-masonry img{width:100%;display:block;margin-bottom:8px;break-inside:avoid;transition:transform .4s ease,filter .4s ease;filter:grayscale(15%);cursor:zoom-in;}
        .gallery-masonry img:hover{transform:scale(1.02);filter:grayscale(0%);}

        .nav-logo{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:4px;color:var(--gold);text-decoration:none;}
        .nav-links{display:flex;gap:32px;list-style:none;}
        .nav-links a{font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .3s;}
        .nav-links a:hover{color:var(--gold);}

        .tl-item{padding:0 0 28px 28px;position:relative;}
        .tl-item::before{content:'';position:absolute;left:-3px;top:6px;width:7px;height:7px;border-radius:50%;background:var(--gold);box-shadow:0 0 8px rgba(201,168,76,.6);}

        .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease;}
        .reveal.visible{opacity:1;transform:translateY(0);}
        .reveal-delay-1{transition-delay:.1s;}
        .reveal-delay-2{transition-delay:.2s;}
        .reveal-delay-3{transition-delay:.3s;}
        .reveal-delay-4{transition-delay:.4s;}

        section{padding:120px 60px;position:relative;}

        @media(max-width:900px){
          nav{padding:20px 24px!important;}
          .nav-links{display:none!important;}
          section{padding:80px 24px!important;}
          .hero{padding:100px 24px 60px!important;}
          .hero-stats{display:none!important;}
          .about-grid,.kd-profile{grid-template-columns:1fr!important;gap:40px!important;}
          .services-grid,.portfolio-grid,.video-showcase,.testimonial-grid{grid-template-columns:1fr!important;}
          .clients-logos{grid-template-columns:repeat(2,1fr)!important;}
          .why-grid{grid-template-columns:1fr!important;}
          .cred-strip{grid-template-columns:repeat(2,1fr)!important;}
          .gallery-masonry{columns:2!important;}
          .gallery-hero{grid-template-columns:1fr!important;}
          footer{flex-direction:column!important;gap:16px!important;text-align:center!important;}
        }
      `}</style>

      <Cursor />
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
      {modalData   && <Modal data={modalData}     onClose={() => setModalKey(null)} />}

      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '24px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to bottom,rgba(8,8,8,.97),transparent)' }}>
        <a className="nav-logo" href="#">THY SIGMA</a>
        <ul className="nav-links">
          {(['about','services','team','portfolio','contact'] as string[]).map((s: string) => (
            <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 60px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 50%,rgba(201,168,76,.08),transparent 70%),radial-gradient(ellipse 40% 60% at 10% 80%,rgba(201,168,76,.04),transparent 70%)' }} />
        <div className="hero-line" />
        <p className="hero-tag">Mumbai · Premium Media Services · Est. 2023</p>
        <h1 className="hero-title">THY<br /><span>SIGMA</span></h1>
        <p className="hero-sub">Cinematic event coverage. Broadcast-grade production. Built for the industry's most demanding stages.</p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn-gold">View Our Work</a>
          <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#888' }}>↓ Scroll to explore</span>
        </div>
        <div className="hero-stats">
          {([['15+','Years Experience'],['30+','Major Projects'],['OTT','Platform Expertise']] as [string,string][]).map(([n,l]) => (
            <div key={l} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: '#c9a84c', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#888' }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right,transparent,#1e1e1e,transparent)' }} />
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e', overflow: 'hidden', padding: '20px 0', background: '#131313' }}>
        <div className="marquee-track">
          {(['Event Coverage','Live Streaming','Post Production','Content Creation','OTT Delivery','Brand Films','Digital Distribution','Workflow Automation',
             'Event Coverage','Live Streaming','Post Production','Content Creation','OTT Delivery','Brand Films','Digital Distribution','Workflow Automation'] as string[]).map((item: string, i: number) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '0 32px', fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: 3, color: '#888', textTransform: 'uppercase' }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c9a84c', flexShrink: 0, display: 'inline-block' }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: '#0e0e0e', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Who We Are</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            WE BUILD<br /><span style={{ color: '#c9a84c' }}>MEDIA SYSTEMS</span><br />THAT WIN
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginTop: 64 }}>
          <div className="about-text reveal reveal-delay-1">
            <p style={{ fontSize: 15, color: '#aaa', marginBottom: 20, lineHeight: 1.8 }}>Thy Sigma Media Services is <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>Mumbai's premier cinematic media production company</strong> — built for the stages that matter. We operate at the intersection of creative storytelling and technical precision.</p>
            <p style={{ fontSize: 15, color: '#aaa', marginBottom: 20, lineHeight: 1.8 }}>From high-profile conclaves and corporate summits to large-scale expos and OTT productions, we don't just cover events — we <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>engineer their entire media lifecycle</strong>. Shoot. Edit. Distribute. Amplify.</p>
            <p style={{ fontSize: 15, color: '#aaa', marginBottom: 20, lineHeight: 1.8 }}>Led by a team with deep roots in <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>broadcast, OTT, and live production</strong>, we bring infrastructure-level thinking to every creative brief. When you work with Thy Sigma, you're not hiring a crew — you're gaining a <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>strategic media partner.</strong></p>
          </div>
          <div className="about-visual reveal reveal-delay-2" style={{ position: 'relative', height: 400 }}>
            <div className="about-box about-box-main" style={{ position: 'absolute', inset: 0, border: '1px solid #1e1e1e', background: '#131313', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 64, filter: 'drop-shadow(0 0 20px rgba(201,168,76,.4))' }}>🎬</div>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: 3, color: '#c9a84c', margin: 0 }}>COMPREHENSIVE MEDIA SOLUTIONS</p>
              <p style={{ fontSize: 11, color: '#888', letterSpacing: 1, fontFamily: "'DM Sans', sans-serif", margin: 0, fontWeight: 300 }}>From Creation to Global Delivery</p>
            </div>
            <div style={{ position: 'absolute', width: 120, height: 120, bottom: -20, right: -20, background: '#c9a84c', opacity: 0.08, border: '1px solid #1e1e1e' }} />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: '#080808', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>What We Do</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            OUR<br /><span style={{ color: '#c9a84c' }}>SERVICES</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#1e1e1e', marginTop: 64, border: '1px solid #1e1e1e' }}>
          {([
            ['01','📽️','Event Coverage','Broadcast-grade, multi-camera video and photography for conclaves, summits, expos, and institutional events. Every frame engineered to carry weight.','reveal-delay-1'],
            ['02','🎞️','Post-Production','Precision editing, colour grading, motion graphics, and sound design. We transform raw footage into assets your brand will proudly own for years.','reveal-delay-2'],
            ['03','📡','Live Streaming','Seamless, broadcast-quality live coverage with technical infrastructure built for scale. Zero tolerance for downtime on the stages that matter most.','reveal-delay-3'],
            ['04','✂️','Content Creation','Platform-optimised reels, brand films, highlight cuts and short-form content for LinkedIn, Instagram, and YouTube. Built to travel.','reveal-delay-1'],
            ['05','🔄','Content Repurposing','Every event produces a content goldmine. We extract, reformat, and redistribute your footage to maximise reach across every platform and audience.','reveal-delay-2'],
            ['06','📊','Content Distribution','Strategic content delivery and workflow automation that ensures your media gets where it needs to go — on time, on spec, at scale.','reveal-delay-3'],
          ] as [string,string,string,string,string][]).map(([num,icon,name,desc,delay]) => (
            <div key={num} className={`service-card reveal ${delay}`}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: 3, color: '#c9a84c', opacity: 0.4, marginBottom: 24 }}>{num}</div>
              <div style={{ fontSize: 32, marginBottom: 20 }}>{icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#f5f0e8', marginBottom: 12, fontWeight: 400 }}>{name}</div>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section id="team" style={{ background: '#0e0e0e', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Leadership</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            THE MIND<br /><span style={{ color: '#c9a84c' }}>BEHIND IT</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="kd-profile" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start', marginTop: 64 }}>
          <div className="reveal reveal-delay-1">
            <div style={{ width: '100%', aspectRatio: '3/4', background: '#131313', border: '1px solid #1e1e1e', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
              <div style={{ position: 'absolute', top: 12, left: 12, width: 40, height: 40, borderTop: '1px solid #c9a84c', borderLeft: '1px solid #c9a84c', opacity: 0.4 }} />
              <div style={{ position: 'absolute', bottom: 12, right: 12, width: 40, height: 40, borderBottom: '1px solid #c9a84c', borderRight: '1px solid #c9a84c', opacity: 0.4 }} />
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,rgba(201,168,76,.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#080808', letterSpacing: 2 }}>KD</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 3, color: '#f5f0e8' }}>KUMARESH</div>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#c9a84c' }}>CEO & Founder</div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top,rgba(201,168,76,.06),transparent)' }} />
            </div>
            <div style={{ background: '#c9a84c', color: '#080808', padding: '10px 20px', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, marginTop: 0, display: 'inline-block', position: 'relative', right: -16 }}>15+ Yrs · OTT · Broadcast · Live</div>
          </div>
          <div className="reveal reveal-delay-2">
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, letterSpacing: 3, color: '#f5f0e8', lineHeight: 1 }}>KUMARESH<br />DEVENDRAN</h3>
            <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#c9a84c', margin: '8px 0 24px' }}>CEO & Founder — Thy Sigma Media Services</p>
            <p style={{ fontSize: 14, color: '#999', lineHeight: 1.85, marginBottom: 40 }}>
              I have spent over a decade not on the sidelines of India's media industry — <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>but at its infrastructure core.</strong> As Technical & Operations Manager at <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>MX Player</strong>, I architected the MAM and archiving systems behind shows like <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>Aashram Season 3, Dharavi Bank,</strong> and <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>Lock Upp.</strong> I've driven technical delivery for <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>Netflix content processing</strong>, led live OPS for the <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>ICC Champions Trophy and IPL</strong> on Star Sports, and served as Tech Head for the <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>Poker Sports League</strong> across four seasons. That is the foundation <strong style={{ color: '#f5f0e8', fontWeight: 500 }}>Thy Sigma</strong> is built on.
            </p>
            <div className="timeline" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom,#c9a84c,transparent)' }} />
              {([
                ['2022 – 2023','MX Player','Technical & Operations Manager · 15+ original shows · MAM & OTT delivery'],
                ['2017 – 2020','Poker Sports League','Tech Head · Live production · RFID · Real-time graphics · OTT & broadcast'],
                ['2017 – 2019','Adda52 Live','Head of Streaming & OTT · Live systems · RFID + graphics overlays'],
                ['2015 – 2017','iCastX Technologies','Solution Architecture · OTT · MAM · Live Media Technologies'],
                ['2013','Netflix','Content Operations & Processing · 50+ Movies · 20+ Shows'],
                ['2012 – 2013','Sony Music · ZEE · STAR Gold & Movies HD','Broadcast QA · HD workflow design · Content delivery'],
                ['2010 – 2013','Star Sports — ICC Champions Trophy & IPL','OPS Supervisor · Live streaming · VoD workflow management'],
              ] as [string,string,string][]).map(([year,title,role]) => (
                <div key={year} className="tl-item">
                  <div style={{ fontSize: 10, letterSpacing: 2, color: '#c9a84c', textTransform: 'uppercase', marginBottom: 4 }}>{year}</div>
                  <div style={{ fontSize: 14, color: '#f5f0e8', fontWeight: 500, marginBottom: 2 }}>{title}</div>
                  <div style={{ fontSize: 12, color: '#888' }}>{role}</div>
                </div>
              ))}
            </div>
            <div className="cred-strip" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#1e1e1e', border: '1px solid #1e1e1e' }}>
              {([['15+','Years in Industry'],['30+','Major Projects'],['OTT','Platform Expert']] as [string,string][]).map(([n,l]) => (
                <div key={l} style={{ background: '#131313', padding: '20px 24px', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: '#c9a84c', letterSpacing: 2 }}>{n}</span>
                  <p style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#888', marginTop: 4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" style={{ background: '#080808', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Our Work</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            PORTFOLIO<br /><span style={{ color: '#c9a84c' }}>SHOWCASE</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
          <p style={{ fontSize: 14, color: '#888', maxWidth: 500, lineHeight: 1.7 }}>A showcase of event films, branded content, sports coverage, and live stream projects — crafted with sharp execution and creative intent.</p>
        </div>
        <div className="portfolio-filter reveal reveal-delay-1" style={{ display: 'flex', gap: 4, marginTop: 48, flexWrap: 'wrap' }}>
          {([['all','All'],['live','Live Streaming'],['video','Videography'],['photo','Photography'],['edit','Editing']] as [string,string][]).map(([val,label]) => (
            <button key={val} className={`filter-btn${activeFilter === val ? ' active' : ''}`} onClick={() => setActiveFilter(val)}>{label}</button>
          ))}
        </div>
        <div className="portfolio-grid" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#1e1e1e', border: '1px solid #1e1e1e' }}>
          {PORTFOLIO_ITEMS.filter((p) => activeFilter === 'all' || p.cat === activeFilter).map((p) => (
            <div key={p.key} className="portfolio-item" onClick={() => setModalKey(p.key)}>
              <div style={{ position: 'absolute', top: 16, left: 16, background: '#c9a84c', color: '#080808', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', padding: '5px 12px', fontWeight: 500, zIndex: 1 }}>{p.tag}</div>
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="portfolio-overlay">
                <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 8 }}>{p.tag} · 2025</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#f5f0e8', fontWeight: 400, lineHeight: 1.3, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: '#aaa' }}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SAFETECH GALLERY ── */}
      <section id="gallery" style={{ background: '#0e0e0e', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Photography Work</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            SAFETECH AWARDS<br /><span style={{ color: '#c9a84c' }}>& CONFERENCE 2025</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
          <p style={{ fontSize: 14, color: '#888', maxWidth: 500, lineHeight: 1.7 }}>Corporate event photography — capturing keynotes, award moments, and the energy of industry's most important gatherings.</p>
        </div>
        <div className="gallery-hero reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 8, marginTop: 48 }}>
          <img src={safetechUrl(1)} alt="Safetech 1" style={{ width: '100%', objectFit: 'cover', display: 'block', height: 500, cursor: 'zoom-in' }} onClick={() => setLightboxSrc(safetechUrl(1))} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <img src={safetechUrl(2)} alt="Safetech 2" style={{ flex: 1, width: '100%', objectFit: 'cover', display: 'block', cursor: 'zoom-in' }} onClick={() => setLightboxSrc(safetechUrl(2))} />
            <img src={safetechUrl(3)} alt="Safetech 3" style={{ flex: 1, width: '100%', objectFit: 'cover', display: 'block', cursor: 'zoom-in' }} onClick={() => setLightboxSrc(safetechUrl(3))} />
          </div>
        </div>
        <div className="gallery-masonry reveal reveal-delay-2" style={{ marginTop: 8, columns: 3, gap: 8 }}>
          {SAFETECH_NUMS.slice(3).map((n: number) => (
            <img key={n} src={safetechUrl(n)} alt={`Safetech ${n}`} loading="lazy" onClick={() => setLightboxSrc(safetechUrl(n))} />
          ))}
        </div>
      </section>

      {/* ── VIDEO SHOWCASE ── */}
      <section id="videos" style={{ background: '#080808', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Video Work</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            LIVE &<br /><span style={{ color: '#c9a84c' }}>IN ACTION</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="video-showcase reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#1e1e1e', border: '1px solid #1e1e1e', marginTop: 48 }}>
          {VIDEO_CARDS.map((v) => <VideoCard key={v.id} {...v} />)}
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section id="clients" style={{ background: '#0e0e0e', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Clientele</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            TRUSTED<br /><span style={{ color: '#c9a84c' }}>BY THE BEST</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="clients-logos" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: '#1e1e1e', border: '1px solid #1e1e1e' }}>
          {(['MX Player','Netflix','Star Sports','Sony Music','ZEE Network','Alpha Fighting Series','MMA Federation India','NMIMS','WAKO India','Kings Expo Media'] as string[]).map((name: string) => (
            <div key={name} className="client-logo"><div className="client-name">{name}</div></div>
          ))}
        </div>
      </section>

      {/* ── WHY ── */}
      <section id="why" style={{ background: '#080808', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Why Us</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            THE THY SIGMA<br /><span style={{ color: '#c9a84c' }}>DIFFERENCE</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: '#1e1e1e', border: '1px solid #1e1e1e', marginTop: 64 }}>
          {([
            ['01','🏗️','OTT-Grade Infrastructure',"Our leadership has built and operated the media infrastructure behind India's largest OTT platforms. Platform-level technical precision on every project.",'reveal-delay-1'],
            ['02','🎯','Full Lifecycle Ownership','From shoot to screen — we manage every stage. Coverage, post-production, distribution, and amplification. One team. One standard. No gaps.','reveal-delay-2'],
            ['03','⚡','Zero Margin for Error','Forged in live broadcast environments where failure is not an option. That discipline is the standard we bring to every client and every deadline.','reveal-delay-3'],
            ['04','🌐','Content That Travels',"We don't just produce content — we engineer it for reach. Platform-optimised, distribution-ready assets that perform long after the event is over.",'reveal-delay-4'],
          ] as [string,string,string,string,string][]).map(([num,icon,title,text,delay]) => (
            <div key={num} className={`why-card reveal ${delay}`}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 72, color: '#c9a84c', opacity: 0.07, position: 'absolute', top: 16, right: 24, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 28, marginBottom: 20 }}>{icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#f5f0e8', marginBottom: 12, fontWeight: 400 }}>{title}</div>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ background: '#0e0e0e', padding: '120px 60px' }}>
        <div className="reveal">
          <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>What Clients Say</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: 2, color: '#f5f0e8' }}>
            CLIENT<br /><span style={{ color: '#c9a84c' }}>TESTIMONIALS</span>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c9a84c', margin: '24px 0' }} />
        </div>
        <div className="testimonial-grid" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#1e1e1e', border: '1px solid #1e1e1e' }}>
          {([
            { logo:'https://www.thysigma.com/images/sponsor/logo/afs.png',   text:'"Thy Sigma delivered broadcast-quality live coverage for our MMA events with precision and professionalism. The production quality was exceptional."', name:'Alpha Fighting Series', delay:'reveal-delay-1' },
            { logo:'https://www.thysigma.com/images/sponsor/logo/mmafi.png', text:'"From live streaming to post-production, Thy Sigma elevated our National Championship coverage to a world-class standard. Highly recommended."',      name:'MMA Federation India', delay:'reveal-delay-2' },
            { logo:'https://www.thysigma.com/images/sponsor/logo/lion.png',  text:'"The team at Thy Sigma understood our vision and executed it flawlessly. Their technical expertise in live production is unmatched in Mumbai."',         name:'Lion Heart MMA',       delay:'reveal-delay-3' },
          ] as { logo:string; text:string; name:string; delay:string }[]).map(({ logo, text, name, delay }) => (
            <div key={name} className={`testimonial-card reveal ${delay}`}>
              <img src={logo} alt={name} style={{ height: 32, marginBottom: 20, filter: 'brightness(0) invert(.5)' }} />
              <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>{text}</p>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#c9a84c' }}>{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{ padding: '120px 60px', background: '#0e0e0e', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(201,168,76,.06),transparent)' }} />
        <div className="reveal">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px,8vw,100px)', letterSpacing: 4, color: '#f5f0e8', lineHeight: 1, marginBottom: 24 }}>
            LET'S<br /><span style={{ color: '#c9a84c' }}>BUILD TOGETHER</span>
          </h2>
          <p style={{ fontSize: 14, color: '#888', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>Whether you're a production house, OTT platform, or event organiser — if your standard is exceptional, we're the team for you.</p>
          <a href="mailto:kd@thysigma.com" className="btn-gold">Get In Touch</a>
        </div>
        <div className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 48, flexWrap: 'wrap' }}>
          {([['Email','kd@thysigma.com'],['Phone','+91 90820 83273'],['Location','Navi Mumbai, India'],['Website','www.thysigma.com']] as [string,string][]).map(([label,val]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#c9a84c', marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 14, color: '#f5f0e8' }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '32px 60px', borderTop: '1px solid #1e1e1e', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#080808' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 4, color: '#c9a84c' }}>THY SIGMA</div>
        <p style={{ fontSize: 11, color: '#888', letterSpacing: 1 }}>© 2026 Thy Sigma Media Services. All rights reserved.</p>
        <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: 2 }}>MUMBAI · INDIA</p>
      </footer>
    </>
  );
}