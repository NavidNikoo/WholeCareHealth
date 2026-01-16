import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
            <div className="wc-container py-5">
                <div className="row g-4 align-items-start">
                    {/* Brand + contact */}
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <div
                                aria-hidden
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 14,
                                    background: "var(--accent-soft)",
                                    display: "grid",
                                    placeItems: "center",
                                    color: "var(--primary)",
                                    fontWeight: 900,
                                }}
                            >
                                WC
                            </div>
                            <div style={{ fontWeight: 900, fontSize: 18 }}>WholeCare Health</div>
                        </div>

                        <p className="mb-3" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                            Modern, evidence informed psychiatric care for adults 18+ in Orange County, with telehealth
                            and in person appointments available.
                        </p>

                        <div className="d-flex flex-column gap-2" style={{ fontSize: 14 }}>
                            <div style={{ color: "var(--muted)" }}>
                                Phone{" "}
                                <a href="tel:+17147696090" style={contactLinkStyle}>
                                    (714) 769-6090
                                </a>
                            </div>
                            <div style={{ color: "var(--muted)" }}>
                                Email{" "}
                                <a href="mailto:info@wholecarehealth.com" style={contactLinkStyle}>
                                    info@wholecarehealth.com
                                </a>
                            </div>
                            <div style={{ color: "var(--muted)" }}>
                                Address{" "}
                                <a
                                    href="https://www.google.com/maps?q=23832+Rockfield+Blvd+STE+120,+Lake+Forest,+CA+92630"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={contactLinkStyle}
                                >
                                    23832 Rockfield Blvd STE 120, Lake Forest, CA 92630
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="col-6 col-lg-3">
                        <div style={colTitleStyle}>Explore</div>
                        <div className="d-flex flex-column gap-2">
                            <Link href="/services" style={navLinkStyle}>Services</Link>
                            <Link href="/conditions" style={navLinkStyle}>Conditions</Link>
                            <Link href="/insurance-fees" style={navLinkStyle}>Insurance and fees</Link>
                            <Link href="/new-patients" style={navLinkStyle}>New patients</Link>
                            <Link href="/about" style={navLinkStyle}>About</Link>
                            <Link href="/contact" style={navLinkStyle}>Contact</Link>
                        </div>
                    </div>

                    {/* Office */}
                    <div className="col-6 col-lg-4">
                        <div style={colTitleStyle}>Office</div>

                        <div className="d-flex flex-column gap-2" style={{ fontSize: 14, color: "var(--muted)" }}>
                            <div>
                                <span style={labelStyle}>In person</span>
                                <div style={{ color: "var(--text)", fontWeight: 750 }}>Lake Forest, California</div>
                            </div>

                            <div>
                                <span style={labelStyle}>Telehealth</span>
                                <div style={{ color: "var(--text)", fontWeight: 750 }}>Available throughout California</div>
                            </div>

                            <div>
                                <span style={labelStyle}>Hours</span>
                                <div style={{ color: "var(--text)", fontWeight: 750 }}>By appointment only</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                        <div style={{ color: "var(--muted)", fontSize: 13 }}>
                            © {year} WholeCare Health. All rights reserved.
                        </div>

                        {/* Keep the 911 statement here */}
                        <div style={{ color: "var(--muted)", fontSize: 13, maxWidth: 780 }}>
                            If this is an emergency, call 911 or go to your nearest emergency room. This website does not
                            provide crisis services or medical advice.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const colTitleStyle: React.CSSProperties = {
    fontWeight: 900,
    marginBottom: 10,
    fontSize: 14,
};

const navLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "var(--text)",
    fontWeight: 700,
    fontSize: 14,
    opacity: 0.9,
};

const contactLinkStyle: React.CSSProperties = {
    color: "var(--text)",
    fontWeight: 800,
    textDecoration: "none",
};

const labelStyle: React.CSSProperties = {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 800,
    color: "var(--muted)",
    marginBottom: 4,
};
