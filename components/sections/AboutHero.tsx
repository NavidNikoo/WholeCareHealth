export default function AboutHero() {
    return (
        <section className="container my-5">
            <div
                className="position-relative rounded-4 overflow-hidden"
                style={{
                    minHeight: 360,
                    backgroundImage: "url('/images/about-hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Single, strong overlay */}
                <div
                    className="position-absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.6) 45%, rgba(15,23,42,0.25) 75%, rgba(15,23,42,0) 100%)",
                    }}
                />

                {/* Content */}
                <div
                    className="position-relative h-100 d-flex flex-column justify-content-center p-5"
                    style={{ maxWidth: 560 }}
                >
                    <h1 className="fw-bold text-white mb-3">
                        Thoughtful psychiatric care,<br />
                        grounded in trust
                    </h1>

                    <p
                        className="mb-4"
                        style={{
                            fontSize: "1.05rem",
                            lineHeight: 1.6,
                            color: "rgba(248,250,252,0.95)",
                            maxWidth: 520,
                        }}
                    >
                        WholeCare Health provides evidence-based psychiatric care for adults 18+,
                        with a focus on clarity, collaboration, and long-term support.
                    </p>

                    <div className="d-flex gap-3">
                        <a className="btn btn-success btn-lg">
                            Request appointment
                        </a>
                        <a className="btn btn-outline-light btn-lg">
                            Explore services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
