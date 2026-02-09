"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

const GROUPS = [
    {
        title: "Most common reasons patients see us",
        items: [
            { label: "Anxiety & panic", href: "/conditions/anxiety" },
            { label: "Depression & mood concerns", href: "/conditions/depression" },
            { label: "Spravato® (esketamine) treatment", href: "/services/spravato" },
            { label: "ADHD", href: "/conditions/adhd" },
            { label: "Bipolar disorder", href: "/conditions/bipolar" },
            { label: "Sleep concerns", href: "/conditions/sleep" },
        ],
    },
    {
        title: "Stress, trauma, and life challenges",
        items: [
            { label: "PTSD & trauma", href: "/conditions/trauma" },
            { label: "Chronic stress & burnout", href: "/conditions/stress" },
            { label: "Grief & bereavement", href: "/conditions/grief" },
            { label: "Life transitions", href: "/services/life-transitions" },
        ],
    },
    {
        title: "Additional conditions we treat",
        items: [
            { label: "OCD", href: "/conditions/ocd" },
            { label: "Adjustment concerns", href: "/conditions/adjustment" },
            { label: "Stress management", href: "/conditions/stress-management" },
            { label: "And more", href: "/contact" },
        ],
    },
];

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setReduced(mq.matches);
        onChange();
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
    }, []);

    return reduced;
}

export default function ConditionsWeTreat() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    const isMobile = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(max-width: 768px)").matches;
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;
        if (isMobile) return;

        let raf = 0;

        const update = () => {
            raf = 0;
            const section = sectionRef.current;
            const bg = bgRef.current;
            if (!section || !bg) return;

            const rect = section.getBoundingClientRect();
            const viewportH = window.innerHeight;

            // Only animate while near viewport
            if (rect.bottom < -200 || rect.top > viewportH + 200) return;

            // Progress through section (-1..1-ish)
            const mid = rect.top + rect.height / 2;
            const viewportMid = viewportH / 2;
            const delta = mid - viewportMid;

            // Parallax strength (lower = subtler / cleaner)
            const strength = 0.18;

            bg.style.transform = `translate3d(0, ${delta * strength}px, 0) scale(1.06)`;
        };

        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        // Initial paint
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, [prefersReducedMotion, isMobile]);

    return (
        <section
            ref={sectionRef}
            className="py-5 position-relative overflow-hidden"
            aria-labelledby="conditions-title"
            style={{
                // fallback color if image fails
                backgroundColor: "rgba(16,185,129,0.06)",
            }}
        >
            {/* Parallax background layer */}
            <div
                ref={bgRef}
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-hidden="true"
                style={{
                    backgroundImage: `url("/images/conditions-bg.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(1.05) contrast(0.95)",
                    transform: "translate3d(0,0,0) scale(1.06)",
                    willChange: "transform",
                }}
            />

            {/* Soft overlay for readability */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.92) 100%)",
                }}
            />

            <div className="container position-relative">
                <div className="row g-4 align-items-start">
                    {/* Left intro */}
                    <div className="col-12 col-lg-4">
                        <h2 id="conditions-title" className="mb-2">
                            Conditions we treat
                        </h2>
                        <p className="text-secondary mb-3">
                            We support a wide range of mental health concerns with evidence-based care and a personalized plan.
                        </p>

                        <p className="text-secondary small mb-4">
                            If you don’t see your concern listed, reach out. We can help you decide whether our care is a good fit.
                        </p>

                        <Link href="/new-patients" className="btn btn-outline-success">
                            New patients
                        </Link>
                    </div>

                    {/* Grouped list */}
                    <div className="col-12 col-lg-8">
                        <div
                            className="p-4 p-md-5 bg-white"
                            style={{
                                borderRadius: 18,
                                border: "1px solid rgba(0,0,0,0.08)",
                                boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
                            }}
                        >
                            <div className="row g-4">
                                {GROUPS.map((group) => (
                                    <div className="col-12 col-md-6" key={group.title}>
                                        <div className="mb-2 fw-semibold">{group.title}</div>

                                        <div className="d-flex flex-column gap-2">
                                            {group.items.map((item) => (
                                                <Link key={item.label} href={item.href} className="text-decoration-none">
                                                    <div
                                                        className="px-3 py-2"
                                                        style={{
                                                            borderRadius: 12,
                                                            border: "1px solid rgba(0,0,0,0.08)",
                                                            background: "rgba(0,0,0,0.01)",
                                                            transition: "all 150ms ease",
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.borderColor = "rgba(16,185,129,0.6)";
                                                            e.currentTarget.style.background = "rgba(16,185,129,0.04)";
                                                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(16,185,129,0.12)";
                                                            e.currentTarget.style.transform = "translateY(-1px)";
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                                                            e.currentTarget.style.background = "rgba(0,0,0,0.01)";
                                                            e.currentTarget.style.boxShadow = "none";
                                                            e.currentTarget.style.transform = "translateY(0)";
                                                        }}
                                                    >
                                                        <span className="text-body fw-medium">{item.label}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-3 border-top text-secondary small">
                                For urgent or life-threatening situations, call 911 or go to the nearest emergency room.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
