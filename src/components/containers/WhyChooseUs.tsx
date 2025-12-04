import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "We understand content",
    desc: "We understand how content actually works across platforms, formats and audiences.",
  },
  {
    title: "Engineer mindset",
    desc: "We plan like engineers and execute like creators — precision meets creativity.",
  },
  {
    title: "End-to-end delivery",
    desc: "You get complete end-to-end execution with zero excuses and clear outcomes.",
  },
  {
    title: "Tech + Creativity",
    desc: "Technology and creativity operate together under one roof for faster results.",
  },
  {
    title: "Partnership mindset",
    desc: "We work like long-term partners, not short-term vendors.",
  },
  {
    title: "Transparent costing",
    desc: "No hidden charges — pricing is clear, honest and predictable.",
  },
  {
    title: "Built for today",
    desc: "Our team is designed for speed, scale and modern content workflows.",
  },
  {
    title: "Execution > noise",
    desc: "We don’t chase trends — we focus on execution that achieves outcomes.",
  },
  {
    title: "One trusted partner",
    desc: "From strategy to delivery, everything is handled by one reliable partner.",
  },
];

const WhyChooseUs = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [visible, setVisible] = useState(false);
  const [shine, setShine] = useState(false);
  const [fullyInView, setFullyInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  /* section reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    boxRef.current && observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  /* full board visibility */
  useEffect(() => {
    const board = document.querySelector(".chess-board");
    if (!board) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFullyInView(entry.intersectionRatio === 1),
      { threshold: 1 }
    );

    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  /* shine timing */
  useEffect(() => {
    if (!fullyInView) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    setShine(true);
    const firstTimeout = setTimeout(() => setShine(false), 3000);

    intervalRef.current = setInterval(() => {
      setShine(true);
      setTimeout(() => setShine(false), 3000);
    }, 4000);

    return () => {
      clearTimeout(firstTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fullyInView]);

  const handleClick = (index: number) => {
    if (!isTouch) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="why-section">
      <div className="container">
        <div
          ref={boxRef}
          className="why-box"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "1s ease",
          }}
        >
          <h2 className="why-title">Why Choose Us</h2>

          <div className={`chess-board ${shine ? "border-shine" : ""}`}>
            <span className="border-light" />

            {data.map((item, i) => (
              <div
                key={i}
                className={`chess-cell ${activeIndex === i ? "active" : ""}`}
                onClick={() => handleClick(i)}
              >
                <div className="cell-content">
                  <div className="cell-title">{item.title}</div>
                  <div className="cell-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-section {
            position: relative;
  padding: 90px 0;
  overflow: hidden;
        }
/* ✅ SAME DARK OVERLAY AS SERVICES */
.why-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(17, 11, 22, 0.75),
    rgba(0, 0, 0, 0.9)
  );
  z-index: 0;
}

/* ✅ CONTENT ABOVE OVERLAY */
.why-section .container {
  position: relative;
  z-index: 2;
}
        // .why-box {
        //   border: 1px solid rgba(145, 20, 20, 0.2);
        //   border-radius: 22px;
        //   padding: 60px;
        // }

        .why-title {
          color: #fff;
          font-size: 38px;
          text-align: center;
          margin-bottom: 36px;
        }

        .chess-board {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 2px solid rgba(255,255,255,0.6);
          border-radius: 16px;
          overflow: hidden;
        }

        .chess-cell {
        position: relative; /* ✅ ADD THIS */
  z-index: 1;  
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(14px);
          text-align: center;
          cursor: pointer;
        }

        .chess-cell:nth-child(odd) {
          background: rgba(0,0,0,0.48);
          color: #b4ada9ff;
        }

        .chess-cell:nth-child(even) {
          background: transparent;
          color: #cc5917ff;//txt
        }

        .cell-content {
          position: relative;
          max-width: 260px;
        }

        .cell-title {
          font-size: 22px;
          font-weight: 600;
          line-height: 1.25;
          transition: opacity 0.25s ease;
        }

        .cell-desc {
          position: absolute;
          inset: 0;
          font-size: 17px;
          line-height: 1.5;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.25s ease;
        }

        /* DESKTOP hover */
        @media (hover: hover) and (pointer: fine) {
          .chess-cell:hover .cell-title {
            opacity: 0;
          }

          .chess-cell:hover .cell-desc {
            opacity: 1;
          }
        }

        /* TOUCH click */
        .chess-cell.active .cell-title {
          opacity: 0;
        }

        .chess-cell.active .cell-desc {
          opacity: 1;
        }

        /* ✅ ✅ iPAD FIX ONLY */
        @media (min-width: 768px) and (max-width: 1024px) {
          .cell-title {
            font-size: 20px;
            line-height: 1.4;
            max-width: 180px;
            word-break: break-word;
          }
        }

        /* border shine */
        .border-light {
          position: absolute;
          inset: -60%;
          background: linear-gradient(
            120deg,
            transparent 47%,
            rgba(255,255,255,0.55) 50%,
            transparent 53%
          );
          transform: translateX(-140%);
          opacity: 0;
          pointer-events: none;
           z-index: 0; /* ✅ ADD THIS */
        }

        .border-shine .border-light {
          opacity: 1;
          animation: borderSweep 3s ease forwards;
        }

        @keyframes borderSweep {
          to {
            transform: translateX(140%);
          }
        }

        /* mobile */
      @media (max-width: 767px) {
  .chess-board {
    grid-template-columns: repeat(2, 1fr);
  }
@media (max-width: 767px) {

  /* DEFAULT = ORANGE */
  .chess-cell {
    background: rgba(255, 116, 37, 0.55);
    color: #000;
  }

  /* BLACK CELLS (chess flip) */
  .chess-cell:nth-child(4n + 2),
  .chess-cell:nth-child(4n + 3) {
    background: rgba(0, 0, 0, 0.48);
    color: #ff7425;
  }
}



  .chess-cell {
    min-height: 160px;
    padding: 18px;
  }

  .cell-title {
    font-size: 16px;
    line-height: 1.3;
  }

  .cell-desc {
    font-size: 13px;
    line-height: 1.4;
  }
}

      `}</style>
    </section>
  );
};

export default WhyChooseUs;
