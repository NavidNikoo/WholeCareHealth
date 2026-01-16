// components/sections/OurServices.tsx
import React from "react";

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
    title: string;
    description: string;
    href: string;
    icon: IconName;
};

const SERVICES: ServiceItem[] = [
    {
        title: "Medication Management",
        description: "Personalized prescriptions with ongoing monitoring and adjustments.",
        href: "/services/medication-management",
        icon: "meds",
    },
    {
        title: "Anxiety & Panic",
        description: "Evidence-based care for generalized anxiety, panic, and phobias.",
        href: "/conditions/anxiety",
        icon: "anxiety",
    },
    {
        title: "Depression",
        description: "Collaborative treatment plans to improve mood, energy, and functioning.",
        href: "/conditions/depression",
        icon: "depression",
    },
    {
        title: "ADHD",
        description: "Evaluation and treatment to support focus, organization, and follow-through.",
        href: "/conditions/adhd",
        icon: "adhd",
    },
    {
        title: "Bipolar Disorder",
        description: "Stabilization-focused care with careful medication strategy and follow-up.",
        href: "/conditions/bipolar",
        icon: "bipolar",
    },
    {
        title: "Sleep Issues",
        description: "Support for insomnia and sleep disruption that impacts daily life.",
        href: "/conditions/sleep",
        icon: "sleep",
    },
    {
        title: "Trauma & Stress",
        description: "Care for PTSD and chronic stress with a steady, supportive approach.",
        href: "/conditions/trauma",
        icon: "trauma",
    },
    {
        title: "Life Transitions",
        description: "Guidance during major changes—work, relationships, health, or identity.",
        href: "/services/life-transitions",
        icon: "transitions",
    },
];

function ServiceIcon({ name }: { name: IconName }) {
    const common = {
        width: 44,
        height: 44,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: { color: "rgba(0,0,0,0.75)" } as React.CSSProperties,
    };

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
                    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
                    <path d="M7.5 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
                    <path d="M7 16.5v1.2M19 16.5v1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
                    <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
                    <path d="M9 7V6a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 11v4M10 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );

        case "transitions":
            return (
                <svg {...common}>
                    <path d="M7 7h10M7 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
                            <a href="/services" className="btn btn-outline-dark">
                                View all services
                            </a>
                        </div>
                    )}
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {SERVICES.map((s) => (
                        <div className="col" key={s.title}>
                            <a
                                href={s.href}
                                className="card service-card text-decoration-none text-reset h-100"
                                style={{
                                    aspectRatio: "1 / 1",
                                    borderRadius: 18,
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                                }}
                            >
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 text-center">
                                    <div className="mb-3" aria-hidden="true">
                                        <ServiceIcon name={s.icon} />
                                    </div>
                                    <h3 className="h6 fw-semibold mb-2">{s.title}</h3>
                                    <p className="mb-0 text-secondary small">{s.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
