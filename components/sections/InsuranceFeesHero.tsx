"use client";

import { useEffect, useRef } from "react";

export default function InsuranceFeesHero() {
    const bandRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = bandRef.current;
        if (!el) return;

        const prefersReduced =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) return;

        let raf = 0;

        const update = () => {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight || 1;

            // Progress 0 → 1 while element passes viewport
            const progress = (vh - rect.top) / (vh + rect.height);
            const p = Math.max(0, Math.min(1, progress));

            // Gentle parallax travel
            const travel = 80; // try 60–100
            const y = (p - 0.5) * travel;

            el.style.backgroundPosition = `center calc(50% + ${y}px)`;
        };

        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                update();
            });
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (raf) cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <section className="container py-5">
            {/* Top: Copy + CTAs */}
            <div className="row align-items-start g-4">
                <div className="col-lg-8">
                    <div className="text-uppercase small text-muted fw-semibold mb-2">
                        Insurance &amp; Fees
                    </div>

                    <h1 className="display-5 fw-semibold mb-3">
                        Clear, upfront cost guidance
                    </h1>

                    <p className="text-muted fs-5 mb-4" style={{ maxWidth: "60ch" }}>
                        We accept many insurance plans and offer transparent self-pay options.
                        If you’re unsure what applies to you, we’ll help confirm benefits and
                        outline next steps.
                    </p>

                    <div className="d-flex gap-2 flex-wrap align-items-center">
                        <a href="/new-patients" className="btn btn-wc btn-wc-primary px-4">
                            Request appointment
                        </a>

                        <a href="/contact" className="btn btn-wc btn-wc-outline px-4">
                            Verify coverage
                        </a>

                        <span className="d-inline-flex align-items-center small text-muted ms-0 ms-sm-2">
              <span
                  className="rounded-circle me-2"
                  style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "var(--accent)",
                      boxShadow: "0 0 0 4px var(--accent-soft)",
                  }}
              />
              Most benefits can be confirmed before scheduling.
            </span>
                    </div>
                </div>

                {/* Quick note */}
                <div className="col-lg-4">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <div className="fw-semibold mb-2">Quick note</div>
                        <p className="text-muted mb-0">
                            Coverage and out-of-pocket costs depend on your plan, deductible,
                            and network status. We can verify benefits, but final responsibility
                            is determined by your insurer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Image band with parallax */}
            <div className="row g-4 mt-4">
                <div className="col-12">
                    <div
                        ref={bandRef}
                        className="rounded-4 border shadow-sm overflow-hidden position-relative"
                        style={{
                            minHeight: 220,
                            backgroundImage: `url("/images/insurance-hero.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "background-position",
                        }}
                    >
                        {/* Overlay */}
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 45%, rgba(255,255,255,0.38) 100%)",
                            }}
                            aria-hidden="true"
                        />

                        <div className="position-relative p-4 p-md-5" style={{ maxWidth: 720 }}>
                            <div className="text-uppercase small text-muted fw-semibold mb-2">
                                Support with insurance
                            </div>
                            <h2 className="h3 fw-semibold mb-2">
                                We’ll help you understand your benefits
                            </h2>
                            <p className="text-muted mb-0">
                                Share your insurance details and we’ll confirm eligibility,
                                typical copays (when available), and what to expect before your
                                first visit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
