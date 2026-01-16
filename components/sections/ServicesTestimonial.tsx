import Image from "next/image";

export default function ServicesTestimonial() {
    return (
        <section className="wc-section">
            <div className="wc-container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div
                            style={{
                                borderRadius: 18,
                                overflow: "hidden",
                                border: "1px solid var(--border)",
                                boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
                            }}
                        >
                            <Image
                                src="/images/services-quote.jpg"
                                alt="Comfortable, calm care environment"
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div
                            style={{
                                borderRadius: 18,
                                border: "1px solid var(--border)",
                                background: "var(--surface)",
                                padding: 28,
                            }}
                        >
                            <div style={{ fontSize: 34, lineHeight: 1.15, fontWeight: 900 }}>
                                “I finally felt heard and left with a plan I understood.”
                            </div>
                            <div className="mt-3 text-secondary" style={{ fontWeight: 700 }}>
                                WholeCare Health patient
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
