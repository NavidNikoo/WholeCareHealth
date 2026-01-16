export default function LocationSection() {
    const MAPS_EMBED_SRC =
        "https://www.google.com/maps?q=23832+Rockfield+Blvd+STE+120,+Lake+Forest,+CA+92630&z=16&output=embed";

    const MAPS_LINK =
        "https://www.google.com/maps/search/?api=1&query=23832+Rockfield+Blvd+STE+120,+Lake+Forest,+CA+92630";

    return (
        <section className="wc-section bg-soft">
            <div className="wc-container">
                <div className="row align-items-center g-4">
                    {/* Text */}
                    <div className="col-12 col-lg-5">
                        <h2 className="mb-3">In-person and Telehealth Options</h2>

                        <p className="text-secondary mb-3">
                            Our office is located in Lake Forest, CA. Can’t make it in?
                            Secure telehealth appointments are available throughout California.
                        </p>

                        <div className="mb-3">
                            <div className="fw-semibold">WholeCare Health</div>
                            <div className="text-secondary">
                                23832 Rockfield Blvd STE 120, Lake Forest, CA 92630
                            </div>
                        </div>

                        <div className="d-flex flex-wrap gap-2">
                            <a
                                className="btn btn-dark"
                                href={MAPS_LINK}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Get directions
                            </a>
                            <a className="btn btn-outline-dark" href="/contact">
                                Request an appointment
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="col-12 col-lg-7">
                        <div
                            style={{
                                borderRadius: 18,
                                overflow: "hidden",
                                border: "1px solid rgba(0,0,0,0.08)",
                                boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
                                background: "#fff",
                            }}
                        >
                            <iframe
                                title="WholeCare Health location map"
                                src={MAPS_EMBED_SRC}
                                width="100%"
                                height={380}
                                style={{ border: 0, display: "block" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
