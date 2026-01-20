"use client";
import { useEffect, useRef } from "react";

const VALUES = [
    {
        title: "Clarity",
        body: "Straightforward communication so you understand your options and next steps.",
    },
    {
        title: "Respect",
        body: "Care that honors your lived experience and preferences without judgment.",
    },
    {
        title: "Consistency",
        body: "Follow-ups that track progress and adjust treatment thoughtfully over time.",
    },
    {
        title: "Practical care",
        body: "Recommendations that fit real life and focus on meaningful improvement.",
    },
    {
        title: "Privacy",
        body: "We take confidentiality seriously and handle information with care.",
    },
    {
        title: "Evidence-informed",
        body: "Treatment guided by clinical expertise and established best practices.",
    },
];

export default function ValuesGrid() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        if (!section || !bg) return;

        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) return;

        let raf = 0;

        const update = () => {
            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight || 1;

            // progress 0..1 as section passes viewport
            const progress = (vh - rect.top) / (vh + rect.height);
            const p = Math.max(0, Math.min(1, progress));

            // Stronger parallax so it's actually visible
            const travelPx = 300; // try 100–200
            const y = (p - 0.5) * travelPx;

            bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.18)`;
        };

        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(() => {
                raf = 0;
                update();
            });
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (raf) window.cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} className="wc-values py-5">
            {/* Background image layer */}
            <div
                ref={bgRef}
                className="wc-valuesBg"
                aria-hidden="true"
                style={{ backgroundImage: `url("/images/values.jpg")` }}
            />
            {/* Overlay for readability */}
            <div className="wc-valuesOverlay" aria-hidden="true" />

            <div className="wc-container wc-valuesInner">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-5">
                        <div className="wc-valuesIntro">
                            <div className="wc-kicker">Our approach</div>
                            <h2 className="wc-valuesTitle">Our values</h2>
                            <p className="wc-valuesSub">
                                The principles that shape how we communicate, plan care, and support patients.
                            </p>
                            <div className="wc-valuesNote">
                                Calm, practical care — grounded in clarity and respect.
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="row g-3">
                            {VALUES.map((v) => (
                                <div key={v.title} className="col-md-6">
                                    <div className="wc-valueCard h-100">
                                        <div className="wc-valueTitle">{v.title}</div>
                                        <div className="wc-valueBody">{v.body}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .wc-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
        }

        .wc-values {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }

        .wc-valuesInner {
          position: relative;
          z-index: 2;
        }

        .wc-valuesBg {
          position: absolute;
          inset: -40px 0; /* extra room so moving doesn't reveal edges */
          z-index: 0;
          background-size: cover;
          background-repeat: no-repeat;

          /* Aim at the “interesting” part of your desk photo */
          background-position: 18% 12%;

          transform: translate3d(0, 0, 0) scale(1.18);
          transform-origin: center;
          will-change: transform;
          backface-visibility: hidden;
          pointer-events: none;

          filter: saturate(0.92) contrast(0.98);
        }

        .wc-valuesOverlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;

          /* Slightly lighter overlay so movement is easier to notice */
          background:
            radial-gradient(1200px 620px at 12% 30%, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.70) 48%, rgba(255,255,255,0.56) 100%),
            linear-gradient(180deg, rgba(16,185,129,0.05) 0%, rgba(255,255,255,0.10) 100%);
        }

        .wc-valuesIntro { padding-top: 6px; }

        .wc-kicker {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .wc-valuesTitle {
          font-weight: 900;
          font-size: 34px;
          letter-spacing: -0.5px;
          margin: 0 0 10px 0;
          color: var(--text);
        }

        .wc-valuesSub {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.65;
          max-width: 42ch;
        }

        .wc-valuesNote {
          margin-top: 14px;
          font-size: 13px;
          color: rgba(51, 65, 85, 0.75);
          max-width: 46ch;
        }

        .wc-valueCard {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(15, 23, 42, 0.10);
          border-radius: 18px;
          padding: 18px 18px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
          backdrop-filter: blur(6px);
        }

        .wc-valueCard:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 46px rgba(15, 23, 42, 0.10);
          border-color: rgba(16, 185, 129, 0.28);
        }

        .wc-valueTitle {
          font-weight: 850;
          color: var(--text);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .wc-valueTitle::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.22);
          box-shadow: inset 0 0 0 2px rgba(16, 185, 129, 0.22);
          flex: 0 0 auto;
        }

        .wc-valueBody {
          color: var(--muted);
          line-height: 1.6;
          font-size: 15px;
        }

        @media (max-width: 991.98px) {
          .wc-valuesTitle { font-size: 30px; }
          .wc-valuesSub { max-width: 60ch; }
          .wc-valuesBg { inset: -24px 0; }
        }
      `}</style>
        </section>
    );
}
