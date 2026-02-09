// components/sections/ContactHero.tsx
export default function ContactHero() {
    return (
        <section className="container py-5">
            <div className="wc-card overflow-hidden" style={{ borderRadius: 28 }}>
                <div className="row g-0 align-items-stretch">
                    {/* IMAGE (Shine-inspired) */}
                    <div className="col-lg-5">
                        <div
                            style={{
                                minHeight: 520,
                                backgroundImage: "url('/images/contact-hero.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                            }}
                            aria-hidden
                        >
                            {/* subtle vignette */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(90deg, rgba(15,23,42,0.18) 0%, rgba(15,23,42,0.06) 55%, rgba(15,23,42,0.02) 100%)",
                                }}
                            />
                        </div>
                    </div>

                    {/* CONTENT (minimal) */}
                    <div className="col-lg-7">
                        <div className="p-4 p-md-5 d-flex flex-column justify-content-center h-100">
                            <div className="wc-eyebrow mb-2">Contact</div>

                            <h1
                                className="mb-3"
                                style={{
                                    fontWeight: 900,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.05,
                                    maxWidth: "22ch",
                                }}
                            >
                                Let’s get in touch.
                            </h1>

                            <p className="text-muted fs-5 mb-4" style={{ maxWidth: "60ch" }}>
                                Send a message and we’ll respond with clear next steps for scheduling,
                                questions, or insurance verification.
                            </p>

                            <div className="d-flex gap-2 flex-wrap align-items-center">
                                <a className="btn btn-wc-primary" href="#contact-form">
                                    Send a message
                                </a>
                                <a className="btn btn-wc-outline" href="/insurance-fees">
                                    Insurance & fees
                                </a>
                            </div>

                            <div className="text-muted small mt-3" style={{ maxWidth: "70ch" }}>
                                If you’re in crisis, call <span className="fw-semibold">911</span> or go
                                to your nearest emergency room.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
