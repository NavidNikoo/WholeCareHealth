"use client";

import Link from "next/link";

type PageHeroProps = {
    title: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaHref?: string;
    backgroundImage: string;
};

export default function PageHero({
                                     title,
                                     subtitle,
                                     ctaLabel,
                                     ctaHref,
                                     backgroundImage,
                                 }: PageHeroProps) {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "70vh",
                display: "flex",
                alignItems: "center",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65))",
                }}
            />

            {/* Content */}
            <div
                className="wc-container"
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: 700,
                    color: "#fff",
                }}
            >
                <h1
                    style={{
                        fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                        fontWeight: 800,
                        lineHeight: 1.15,
                        marginBottom: 16,
                        textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                    }}
                >
                    {title}
                </h1>

                {subtitle && (
                    <p
                        style={{
                            fontSize: 18,
                            color: "#ffffff",
                            lineHeight: 1.6,
                            marginBottom: 28,
                            textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                        }}
                    >
                        {subtitle}
                    </p>
                )}

                {ctaLabel && ctaHref && (
                    <Link
                        href={ctaHref}
                        className="btn btn-wc-primary"
                        style={{ padding: "14px 22px", fontSize: 15 }}
                    >
                        {ctaLabel}
                    </Link>
                )}
            </div>
        </section>
    );
}
