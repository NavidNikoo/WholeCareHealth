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

const CONDITION_CONTENT: Record<
    string,
    {
        title: string;
        subtitle?: string;
        bullets?: string[];
        body: string[];
        ctaPrimary?: { label: string; href: string };
        ctaSecondary?: { label: string; href: string };
    }
> = {
    "/conditions/anxiety": {
        title: "Anxiety & panic",
        subtitle: "Support for worry, panic attacks, and physical symptoms of anxiety.",
        bullets: [
            "Evaluation and diagnosis",
            "Medication management when appropriate",
            "Practical coping strategies and supportive care",
        ],
        body: [
            "Anxiety can show up as persistent worry, restlessness, irritability, difficulty concentrating, or sleep disruption. Panic can include sudden waves of fear with physical symptoms like chest tightness, shortness of breath, or dizziness.",
            "We take time to understand your symptoms, medical history, and stressors to build a clear plan. When appropriate, treatment may include medication management and guidance on skills that help reduce symptom intensity over time.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },

    "/conditions/depression": {
        title: "Depression & mood concerns",
        subtitle: "Care for low mood, loss of interest, fatigue, and emotional heaviness.",
        bullets: [
            "Comprehensive assessment",
            "Evidence-based medication options",
            "Collaborative, goal-oriented treatment planning",
        ],
        body: [
            "Depression can impact sleep, appetite, energy, motivation, and how you think about yourself and the future. It can also make daily responsibilities feel much harder than usual.",
            "We work with you to understand the full picture—symptoms, medical factors, past treatment response, and your goals—then create a plan with clear next steps. When appropriate, we combine thoughtful medication management with support for psychotherapy and healthy routines.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "New patients", href: "/new-patients" },
    },

    "/conditions/adhd": {
        title: "ADHD",
        subtitle: "Support for focus, impulsivity, organization, and executive function.",
        bullets: ["Evaluation and screening", "Medication management when appropriate", "Skill-building for daily structure"],
        body: [
            "ADHD can affect attention, organization, time management, and follow-through. Many adults also experience emotional overwhelm, procrastination, or feeling “stuck” even when they want to get things done.",
            "We assess symptoms carefully and review medical history and any contributing factors. Treatment may include medication management and practical strategies to improve structure, consistency, and productivity.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },

    "/conditions/bipolar": {
        title: "Bipolar disorder",
        subtitle: "Stabilization-focused care with careful medication strategy and follow-up.",
        bullets: ["Accurate diagnosis and mood history review", "Medication optimization and monitoring", "Relapse prevention planning"],
        body: [
            "Bipolar disorder involves shifts in mood and energy that may include depressive episodes and periods of elevated mood or increased activation. Getting the diagnosis right is essential because treatment choices differ from unipolar depression.",
            "We take a careful history, review prior medications and responses, and build a plan focused on stability, safety, and long-term functioning.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "New patients", href: "/new-patients" },
    },

    "/conditions/sleep": {
        title: "Sleep concerns",
        subtitle: "Care for insomnia and sleep disruption that impacts daily life.",
        bullets: ["Sleep history and contributing factors", "Evidence-based options", "Long-term sleep plan"],
        body: [
            "Sleep issues can affect mood, focus, energy, and physical health. Insomnia may involve trouble falling asleep, staying asleep, or waking too early.",
            "We look at the full context—stress, routines, medical factors, and medications—to recommend a plan that supports both short-term relief and long-term sleep quality.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },

    "/conditions/trauma": {
        title: "PTSD & trauma",
        subtitle: "Support for trauma symptoms with a steady, supportive approach.",
        bullets: ["Symptom assessment", "Medication support when appropriate", "Care coordination with therapy"],
        body: [
            "Trauma symptoms may include intrusive memories, hypervigilance, sleep disruption, emotional numbing, or feeling constantly on edge.",
            "We provide compassionate, structured care and can coordinate with psychotherapy approaches that are often central to recovery. Medication may help reduce symptom intensity for some patients.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "New patients", href: "/new-patients" },
    },

    "/conditions/stress": {
        title: "Chronic stress & burnout",
        subtitle: "Support for overwhelm, exhaustion, and chronic stress symptoms.",
        bullets: ["Assessment of symptoms and contributing factors", "Stress-reduction planning", "Medication support when appropriate"],
        body: [
            "Burnout and chronic stress can lead to irritability, poor sleep, low motivation, and physical symptoms like headaches or stomach issues.",
            "We work with you to understand what’s driving the stress and create a plan that improves stability and coping, with clear steps you can implement.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },

    "/conditions/grief": {
        title: "Grief & bereavement",
        subtitle: "Care for grief, loss, and the emotional impact of major change.",
        bullets: ["Supportive assessment", "Care planning and resources", "Medication management when appropriate"],
        body: [
            "Grief affects everyone differently. It can involve sadness, anger, numbness, anxiety, disrupted sleep, or difficulty functioning day-to-day.",
            "We offer a supportive space to assess symptoms and provide guidance. For some patients, medication support may be appropriate—especially when grief overlaps with depression or anxiety.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "New patients", href: "/new-patients" },
    },

    "/conditions/ocd": {
        title: "OCD",
        subtitle: "Support for obsessions, compulsions, and anxiety-driven rituals.",
        bullets: ["Careful assessment", "Evidence-based medication options", "Coordination with ERP therapy when available"],
        body: [
            "OCD can involve intrusive thoughts (obsessions) and repetitive behaviors or mental rituals (compulsions) performed to reduce distress.",
            "We provide assessment and medication management when appropriate, and we can coordinate care with exposure and response prevention (ERP) therapy, which is often a key part of treatment.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },

    "/conditions/adjustment": {
        title: "Adjustment concerns",
        subtitle: "Guidance during major changes—work, relationships, health, or identity.",
        bullets: ["Supportive assessment", "Short-term stabilization planning", "Medication management when appropriate"],
        body: [
            "Adjustment-related symptoms often follow stressful life events and may include anxiety, low mood, sleep disruption, and feeling overwhelmed.",
            "We help you clarify what’s happening, identify supports, and build a plan that improves coping and stability during the transition.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "New patients", href: "/new-patients" },
    },

    "/conditions/stress-management": {
        title: "Stress management",
        subtitle: "Practical strategies and support to reduce stress and improve functioning.",
        bullets: ["Lifestyle + routine planning", "Supportive care", "Medication options when appropriate"],
        body: [
            "Stress management is about reducing overload and building sustainable routines that support your mental health.",
            "We can help you identify the biggest drivers of stress and create practical steps to improve sleep, energy, and daily functioning.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },
    "/services/spravato": {
        title: "Spravato® (esketamine) treatment",
        subtitle: "An FDA-approved option for treatment-resistant depression, offered with careful monitoring.",
        bullets: [
            "In-office administration with observation period",
            "Structured assessment and eligibility screening",
            "Ongoing follow-up as part of a comprehensive plan",
        ],
        body: [
            "Spravato® (esketamine) is a prescription nasal spray used for certain adults with treatment-resistant depression (TRD), and in some cases depression with acute suicidal ideation or behavior, when clinically appropriate.",
            "Treatment is provided in a controlled clinical setting with monitoring after each dose. We’ll review your history, current medications, and treatment goals to determine whether Spravato may be a good fit and how it integrates with your overall care plan.",
            "If you’re exploring options beyond standard antidepressants, we can discuss eligibility, expected timelines, and what to anticipate before and after each visit.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "Insurance & fees", href: "/insurance-fees" },
    },

    "/services/life-transitions": {
        title: "Life transitions",
        subtitle: "Support during major changes—work, relationships, health, or identity.",
        bullets: [
            "Support for anxiety, stress, and mood changes",
            "Clear treatment plan with practical next steps",
            "Medication management when appropriate",
        ],
        body: [
            "Major life changes can affect sleep, motivation, confidence, and emotional balance—especially when several stressors stack up at once.",
            "We help you make sense of what’s changing, identify what’s most impacting you day-to-day, and create a plan that supports stability and forward momentum. When appropriate, medication can be used thoughtfully alongside psychotherapy and lifestyle supports.",
            "Whether you’re navigating a breakup, career change, burnout, health concerns, or a new chapter of life, you don’t have to do it alone.",
        ],
        ctaPrimary: { label: "Request appointment", href: "/contact" },
        ctaSecondary: { label: "New patients", href: "/new-patients" },
    },

};

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

    const [open, setOpen] = useState(false);
    const [activeHref, setActiveHref] = useState<string | null>(null);

    const active = activeHref ? CONDITION_CONTENT[activeHref] : null;

    const isMobile = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(max-width: 768px)").matches;
    }, []);

    // ESC closes modal
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    // lock body scroll when modal open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

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

            if (rect.bottom < -200 || rect.top > viewportH + 200) return;

            const mid = rect.top + rect.height / 2;
            const viewportMid = viewportH / 2;
            const delta = mid - viewportMid;

            const strength = 0.18;
            bg.style.transform = `translate3d(0, ${delta * strength}px, 0) scale(1.06)`;
        };

        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, [prefersReducedMotion, isMobile]);

    const openCondition = (href: string) => {
        setActiveHref(href);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        // optional: keep activeHref so it doesn't flash if re-open quickly
        // setActiveHref(null);
    };

    return (
        <>
            <section
                ref={sectionRef}
                className="py-5 position-relative overflow-hidden"
                aria-labelledby="conditions-title"
                style={{ backgroundColor: "rgba(16,185,129,0.06)" }}
            >
                {/* Parallax background */}
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

                {/* Overlay */}
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

                        {/* List */}
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
                                                {group.items.map((item) => {
                                                    const opensModal =
                                                        item.href.startsWith("/conditions/") ||
                                                        item.href === "/services/spravato" ||
                                                        item.href === "/services/life-transitions";

                                                    const hasModalContent = !!CONDITION_CONTENT[item.href];

                                                    // hover helpers (same look for button + link)
                                                    const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
                                                        e.currentTarget.style.borderColor = "rgba(16,185,129,0.6)";
                                                        e.currentTarget.style.background = "rgba(16,185,129,0.04)";
                                                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(16,185,129,0.12)";
                                                        e.currentTarget.style.transform = "translateY(-1px)";
                                                    };
                                                    const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
                                                        e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                                                        e.currentTarget.style.background = "rgba(0,0,0,0.01)";
                                                        e.currentTarget.style.boxShadow = "none";
                                                        e.currentTarget.style.transform = "translateY(0)";
                                                    };

                                                    // ✅ Conditions open modal (no navigation / no 404)
                                                    if (opensModal && hasModalContent) {
                                                        return (
                                                            <button
                                                                key={item.label}
                                                                type="button"
                                                                className="text-decoration-none text-start"
                                                                onClick={() => openCondition(item.href)}
                                                                style={{
                                                                    padding: 0,
                                                                    border: "none",
                                                                    background: "transparent",
                                                                }}
                                                                aria-haspopup="dialog"
                                                                aria-expanded={open && activeHref === item.href}
                                                            >
                                                                <div
                                                                    className="px-3 py-2"
                                                                    style={{
                                                                        borderRadius: 12,
                                                                        border: "1px solid rgba(0,0,0,0.08)",
                                                                        background: "rgba(0,0,0,0.01)",
                                                                        transition: "all 150ms ease",
                                                                    }}
                                                                    onMouseEnter={onEnter}
                                                                    onMouseLeave={onLeave}
                                                                >
                                                                    <span className="text-body fw-medium">{item.label}</span>
                                                                </div>
                                                            </button>
                                                        );
                                                    }

                                                    // Everything else stays as a normal link
                                                    return (
                                                        <Link key={item.label} href={item.href} className="text-decoration-none">
                                                            <div
                                                                className="px-3 py-2"
                                                                style={{
                                                                    borderRadius: 12,
                                                                    border: "1px solid rgba(0,0,0,0.08)",
                                                                    background: "rgba(0,0,0,0.01)",
                                                                    transition: "all 150ms ease",
                                                                }}
                                                                onMouseEnter={onEnter}
                                                                onMouseLeave={onLeave}
                                                            >
                                                                <span className="text-body fw-medium">{item.label}</span>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
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

            {/* ✅ Condition Modal */}
            {open && active && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.title}
                    onMouseDown={(e) => {
                        // click outside closes
                        if (e.target === e.currentTarget) closeModal();
                    }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        background: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(2px)",
                    }}
                >
                    <div
                        onMouseDown={(e) => e.stopPropagation()}
                        style={{
                            width: "min(840px, 100%)",
                            maxHeight: "min(78vh, 760px)",
                            overflow: "auto",
                            borderRadius: 22,
                            background: "#fff",
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
                            padding: "22px 22px 18px",
                        }}
                    >
                        <div className="d-flex align-items-start justify-content-between gap-3">
                            <div>
                                <div className="h4 mb-1">{active.title}</div>
                                {active.subtitle && <div className="text-secondary">{active.subtitle}</div>}
                            </div>

                            <button
                                type="button"
                                className="btn btn-sm btn-light"
                                onClick={closeModal}
                                aria-label="Close"
                                style={{ borderRadius: 999 }}
                            >
                                ✕
                            </button>
                        </div>

                        <div style={{ height: 1, background: "rgba(0,0,0,0.08)", margin: "16px 0" }} />

                        {active.bullets && active.bullets.length > 0 && (
                            <ul className="text-secondary" style={{ paddingLeft: 18, marginBottom: 14 }}>
                                {active.bullets.map((b) => (
                                    <li key={b} style={{ marginBottom: 6 }}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {active.body.map((p, idx) => (
                            <p key={idx} className="text-secondary" style={{ lineHeight: 1.65, marginBottom: 12 }}>
                                {p}
                            </p>
                        ))}

                        <div className="d-flex gap-2 flex-wrap mt-3">
                            {active.ctaPrimary && (
                                <Link href={active.ctaPrimary.href} className="btn btn-wc btn-wc-primary">
                                    {active.ctaPrimary.label}
                                </Link>
                            )}
                            {active.ctaSecondary && (
                                <Link href={active.ctaSecondary.href} className="btn btn-wc btn-wc-outline">
                                    {active.ctaSecondary.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
