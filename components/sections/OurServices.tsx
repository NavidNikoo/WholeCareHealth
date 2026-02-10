"use client";

// components/sections/OurServices.tsx
import React, { useMemo, useState, useEffect } from "react";

type IconName =
    | "anxiety"
    | "depression"
    | "bipolar"
    | "sleep"
    | "adhd"
    | "trauma"
    | "meds"
    | "transitions";

type ServiceItem = {
    id: string;
    title: string;
    description: string;
    icon: IconName;

    details: string;

    // Expanded content
    bullets?: string[];
    note?: string;
};

const SERVICES: ServiceItem[] = [
    {
        id: "meds",
        title: "Medication Management",
        description: "Personalized prescriptions with ongoing monitoring and adjustments.",
        icon: "meds",
        details:
            "Medication management begins with a comprehensive evaluation of your symptoms, history, and goals. We’ll review prior treatments, discuss options, and build a plan that prioritizes effectiveness and tolerability. Follow-ups focus on how you’re feeling day-to-day, side effects, and steady progress over time.",
        note:
            "If you’re currently taking medication, bring a list of current and past medications (and dosages) to your first visit.",
    },
    {
        id: "anxiety",
        title: "Anxiety & Panic",
        description: "Evidence-based care for generalized anxiety, panic, and phobias.",
        icon: "anxiety",
        details:
            "We help you understand what’s driving your anxiety and how it shows up in your body, thoughts, and daily routines. Treatment may include medication when appropriate, along with supportive strategies that reduce panic intensity and improve your sense of control. We can also coordinate with therapy to reinforce skills and long-term relief.",
    },
    {
        id: "depression",
        title: "Depression",
        description: "Collaborative treatment plans to improve mood, energy, and functioning.",
        icon: "depression",
        details:
            "Depression can affect sleep, motivation, focus, and relationships. We work with you to clarify symptoms and contributing factors, then create a plan that supports mood stability and daily functioning. If medication is part of the plan, we monitor benefits carefully and adjust thoughtfully based on your response.",
    },
    {
        id: "adhd",
        title: "ADHD",
        description: "Evaluation and treatment to support focus, organization, and follow-through.",
        icon: "adhd",
        details:
            "Adult ADHD often shows up as difficulty sustaining attention, staying organized, managing time, or following through—especially under stress. We evaluate symptoms in context and discuss treatment options that fit your lifestyle. Ongoing care focuses on improving focus and reducing overwhelm, with adjustments based on real-world results.",
    },
    {
        id: "bipolar",
        title: "Bipolar Disorder",
        description: "Stabilization-focused care with careful medication strategy and follow-up.",
        icon: "bipolar",
        details:
            "Bipolar symptoms can involve shifts in mood, energy, sleep, and impulse control. We focus on stability first—clarifying patterns, identifying triggers, and building a plan that supports consistent functioning. Follow-ups prioritize safety, relapse prevention, and early recognition of warning signs so you can stay grounded and supported.",
    },
    {
        id: "sleep",
        title: "Sleep Issues",
        description: "Support for insomnia and sleep disruption that impacts daily life.",
        icon: "sleep",
        details:
            "Sleep problems can be both a cause and a result of stress, anxiety, depression, or medical factors. We review your sleep patterns and what may be disrupting them, then recommend a plan that supports more consistent rest. When appropriate, we discuss medication options and coordination for additional evaluation if needed.",
    },
    {
        id: "trauma",
        title: "Trauma & Stress",
        description: "Care for PTSD and chronic stress with a steady, supportive approach.",
        icon: "trauma",
        details:
            "Trauma-related symptoms can affect sleep, mood, concentration, and your sense of safety. Our approach is steady and collaborative, focusing on stabilization and symptom relief while respecting your pace. We can discuss medication options when appropriate and coordinate with trauma-focused therapy if you’d like that support.",
    },
    {
        id: "transitions",
        title: "Life Transitions",
        description: "Guidance during major changes—work, relationships, health, or identity.",
        icon: "transitions",
        details:
            "Major transitions can amplify stress and make symptoms feel more intense. We help you clarify what you’re experiencing, identify practical next steps, and build a plan that supports stability through change. If medication is appropriate, we approach it thoughtfully with close follow-up and adjustments as needed.",
    },
];

function ServiceIcon({ name }: { name: IconName }) {
    const common = {
        width: 44,
        height: 44,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "service-icon",
    } as const;

    switch (name) {
        case "anxiety":
            return (
                <svg {...common}>
                    <path
                        d="M12 21c-4.5 0-8-3.6-8-8.2C4 8 7.6 4 12 4s8 4 8 8.8c0 4.6-3.5 8.2-8 8.2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M9 10.5c.7-.7 1.8-1.2 3-1.2s2.3.5 3 1.2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9.2 14.2c.8.8 1.8 1.3 2.8 1.3s2-.5 2.8-1.3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case "depression":
            return (
                <svg {...common}>
                    <path
                        d="M12 21c-4.5 0-8-3.6-8-8.2C4 8 7.6 4 12 4s8 4 8 8.8c0 4.6-3.5 8.2-8 8.2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M9 15c.8-.8 1.8-1.2 3-1.2s2.2.4 3 1.2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9.2 10.5h.01M14.8 10.5h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case "bipolar":
            return (
                <svg {...common}>
                    <path
                        d="M12 3v18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M7 7c1.2-1.2 3-2 5-2s3.8.8 5 2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M7 17c1.2 1.2 3 2 5 2s3.8-.8 5-2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M7.5 12h9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case "sleep":
            return (
                <svg {...common}>
                    <path
                        d="M8.5 16.5h9a2 2 0 0 0 2-2v-3.2a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v3.2a2 2 0 0 0 2 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M7 16.5v1.2M19 16.5v1.2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6.5 10.3c.8-2.7 3.2-4.6 6-4.6 1.2 0 2.3.3 3.3.9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case "adhd":
            return (
                <svg {...common}>
                    <path
                        d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5S16.7 20.5 12 20.5 3.5 16.7 3.5 12 7.3 3.5 12 3.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M12 7v5l3 2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );

        case "trauma":
            return (
                <svg {...common}>
                    <path
                        d="M12 21s-7-4.6-7-10.4C5 7.4 7.4 5 10.3 5c1.5 0 2.9.7 3.7 1.8C14.8 5.7 16.2 5 17.7 5 20.6 5 23 7.4 23 10.6 23 16.4 16 21 16 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9.5 12h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case "meds":
            return (
                <svg {...common}>
                    <path
                        d="M10 7h4a3 3 0 0 1 3 3v7H7v-7a3 3 0 0 1 3-3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 7V6a3 3 0 0 1 6 0v1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M12 11v4M10 13h4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case "transitions":
            return (
                <svg {...common}>
                    <path
                        d="M7 7h10M7 17h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9.5 9.5 7 7l2.5-2.5M14.5 14.5 17 17l-2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
    }
}

export default function OurServices({
                                        showViewAll = true,
                                        title = "Our Services",
                                        subtitle = "A focused set of services for adults 18+, offering both telehealth and in-person care throughout Orange County.",
                                    }: {
    showViewAll?: boolean;
    title?: string;
    subtitle?: string;
}) {
    const [openId, setOpenId] = useState<string | null>(null);

    const openService = useMemo(
        () => SERVICES.find((s) => s.id === openId) || null,
        [openId]
    );

    // ESC closes details card (same vibe as your modal behavior)
    useEffect(() => {
        if (!openId) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenId(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [openId]);

    // Prevent background scroll when modal open
    useEffect(() => {
        if (!openId) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [openId]);

    return (
        <section className="py-5" aria-labelledby="our-services-title">
            <div className="container">
                <div className="row align-items-end g-3 mb-4">
                    <div className="col-12 col-lg-8">
                        <h2 id="our-services-title" className="mb-2">
                            {title}
                        </h2>
                        <p className="mb-0 text-secondary">{subtitle}</p>
                    </div>

                    {showViewAll && (
                        <div className="col-12 col-lg-4 d-flex justify-content-lg-end">
                            <a href="/services" className="btn btn-wc btn-wc-outline">
                                View all services
                            </a>
                        </div>
                    )}
                </div>

                {/* GRID */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {SERVICES.map((s) => {
                        const isOpen = s.id === openId;
                        return (
                            <div className="col" key={s.id}>
                                <button
                                    type="button"
                                    onClick={() => setOpenId(isOpen ? null : s.id)}
                                    className={`card service-card text-reset h-100 w-100 ${
                                        isOpen ? "border-success" : ""
                                    }`}
                                    style={{
                                        aspectRatio: "1 / 1",
                                        borderRadius: 18,
                                        background: "#fff",
                                        cursor: "pointer",
                                        textAlign: "center",
                                    }}
                                    aria-expanded={isOpen}
                                >
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-4">
                                        <div className="mb-3" aria-hidden="true">
                                            <ServiceIcon name={s.icon} />
                                        </div>
                                        <h3 className="h6 fw-semibold mb-2">{s.title}</h3>
                                        <p className="mb-0 text-secondary small">{s.description}</p>

                                        <div
                                            className="mt-3 small fw-semibold"
                                            style={{ color: "var(--wc-green, #0f4d3a)" }}
                                        >
                                            {isOpen ? "Hide details" : "Learn more"}
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* MODAL (centered card) */}
                {openService && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${openService.title} details`}
                        onMouseDown={(e) => {
                            // click outside closes
                            if (e.target === e.currentTarget) setOpenId(null);
                        }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 9999,
                            padding: "clamp(16px, 3vw, 28px)",
                            background: "rgba(15, 23, 42, 0.35)",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            display: "grid",
                            placeItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "min(920px, 100%)",
                                maxHeight: "min(82vh, 780px)",
                                overflow: "auto",
                                borderRadius: 22,
                                background: "#fff",
                                boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
                                border: "1px solid rgba(0,0,0,0.08)",
                            }}
                        >
                            {/* header */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: 16,
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    padding: "18px 18px 0 18px",
                                }}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        style={{
                                            width: 54,
                                            height: 54,
                                            borderRadius: 14,
                                            display: "grid",
                                            placeItems: "center",
                                            border: "1px solid rgba(0,0,0,0.08)",
                                            background: "#f6f7f9",
                                            flex: "0 0 auto",
                                        }}
                                        aria-hidden="true"
                                    >
                                        <ServiceIcon name={openService.icon} />
                                    </div>

                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.1 }}>
                                            {openService.title}
                                        </div>
                                        <div className="text-secondary small">{openService.description}</div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-wc btn-wc-outline"
                                    onClick={() => setOpenId(null)}
                                >
                                    Close
                                </button>
                            </div>

                            {/* divider */}
                            <div
                                style={{
                                    height: 1,
                                    background: "rgba(0,0,0,0.08)",
                                    margin: "12px 18px 0",
                                }}
                            />

                            {/* body */}
                            <div style={{ padding: "16px 22px 22px 22px" }}>
                                <div className="row g-4">
                                    <div className="col-12 col-lg-8">
                                        <h4 className="h6 fw-semibold mb-2">What we can help with</h4>

                                        <h4 className="h6 fw-semibold mb-2">Overview</h4>

                                        <p className="text-secondary mb-0" style={{ lineHeight: 1.75 }}>
                                            {openService.details}
                                        </p>


                                        {openService.note ? (
                                            <div className="mt-3 text-secondary small">
                                                <span className="fw-semibold">Tip:</span> {openService.note}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <div
                                            className="p-3 rounded-3"
                                            style={{ background: "rgba(15, 77, 58, 0.06)" }}
                                        >
                                            <div className="fw-semibold mb-1">Next step</div>
                                            <div className="text-secondary small">
                                                Send us a message and include preferred days/times and whether you plan to use insurance.
                                            </div>
                                        </div>

                                        <div className="d-flex gap-2 flex-wrap mt-3">
                                            <a className="btn btn-wc btn-wc-primary" href="/contact">
                                                Request an appointment
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-wc btn-wc-outline"
                                                onClick={() => setOpenId(null)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
