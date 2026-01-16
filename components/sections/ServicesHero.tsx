import Link from "next/link";

export default function ServicesHero() {
    return (
        <section className="wc-section">
            <div
                className="wc-container"
                style={{
                    position: "relative",
                    borderRadius: 28,
                    overflow: "hidden",
                    minHeight: 420,
                    boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
                    border: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                {/* Background image */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "url('/images/services-hero.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.05)",
                        filter: "saturate(0.95) contrast(1.02)",
                    }}
                />

                {/* Overlay: strong on left for text + soft vignette */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(10, 20, 30, 0.55)",
                    }}
                />
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.12) 100%)",
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        padding: "78px 52px",
                        maxWidth: 760,
                        color: "#f8fafc",
                        textShadow: "0 1px 2px rgba(0,0,0,0.55)",
                    }}
                >
                    <h1
                        style={{
                            fontWeight: 800,
                            marginBottom: 20,
                            color: "#ffffff",
                            lineHeight: 1.15,
                            maxWidth: 680,
                        }}
                    >
                        Psychiatric care for adults 18+ <br />
                        in Orange County
                    </h1>

                    {/* Subtitle with a soft glass highlight (looks intentional) */}
                    <p
                        style={{
                            fontSize: 18,
                            marginBottom: 26,
                            maxWidth: 640,
                            color: "rgba(248,250,252,0.95)",
                        }}
                    >
            <span
                style={{
                    fontSize: 18,
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: 600,
                    marginBottom: 28,
                }}
            >
              Evidence-based evaluation and medication management, with telehealth and in-person
              appointments tailored to your needs.
            </span>
                    </p>

                    <div className="d-flex gap-2 flex-wrap mb-3">
                        <a
                            href="/contact"
                            className="btn"
                            style={{
                                background: "#0f4d3a",
                                color: "#fff",
                                fontWeight: 700,
                                padding: "12px 20px",
                                borderRadius: 999,
                            }}
                        >
                            Request an appointment
                        </a>


                        {/* More premium than solid white; still high contrast */}
                        <a
                            href="/new-patients"
                            className="btn"
                            style={{
                                border: "1px solid rgba(255,255,255,0.6)",
                                color: "#f5f7f6",
                                fontWeight: 600,
                                padding: "12px 18px",
                                borderRadius: 999,
                                background: "transparent",
                            }}
                        >
                            New patients
                        </a>

                    </div>

                    <div
                        style={{
                            fontSize: 12,
                            opacity: 0.7,
                            marginTop: 12,
                        }}
                    >
                        If this is an emergency, call 911 or go to your nearest ER.
                    </div>

                </div>
            </div>
        </section>
    );
}
