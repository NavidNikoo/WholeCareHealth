import Image from "next/image";

export default function TeamPreview() {
    return (
        <section
            className="wc-section"
            style={{
                paddingTop: "clamp(64px, 6vw, 110px)",
            }}
        >
            <div className="wc-container">
                {/* Soft divider / transition */}
                <div
                    aria-hidden
                    style={{
                        height: 1,
                        width: "min(920px, 100%)",
                        margin: "0 auto 48px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)",
                    }}
                />

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="mb-2">Meet Our Team</h2>
                    <p className="text-secondary mb-0">
                        Compassionate, evidence-based care led by an experienced psychiatric provider.
                    </p>
                </div>

                {/* Single provider card */}
                <div className="d-flex justify-content-center">
                    <div
                        className="text-center"
                        style={{
                            width: "min(520px, 100%)",
                            borderRadius: 20,
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                            padding: "32px 24px",
                            background: "#fff",
                        }}
                    >
                        {/* Portrait */}
                        <div
                            style={{
                                width: 220,
                                height: 220,
                                margin: "0 auto 18px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "6px solid rgba(0,0,0,0.05)",
                                boxShadow: "0 12px 26px rgba(0,0,0,0.12)",
                                background: "#f6f7f9",
                            }}
                        >
                            <Image
                                src="/images/FarhadNikoo.jpg"
                                alt="Farhad Nikoo, DNP, PMHNP-BC, FNP-BC"
                                width={440}
                                height={440}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                priority
                            />
                        </div>

                        <h3 className="h4 mb-1">Farhad Nikoo</h3>
                        <div className="text-secondary mb-3">DNP, PMHNP-BC, FNP-BC</div>

                        <div className="small text-secondary mb-4">
                            Psychiatric Nurse Practitioner • Adults 18+
                        </div>

                        <div className="d-flex gap-2 justify-content-center flex-wrap">
                            <a href="/about" className="btn btn-dark">
                                Read Bio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
