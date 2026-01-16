import Link from "next/link";

export default function TopBar() {
    return (
        <div
            style={{
                background: "rgba(43, 182, 115, 0.10)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <div className="wc-container py-2 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
                <div className="d-flex flex-wrap align-items-center gap-3" style={{ fontSize: 13 }}>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>
            Adults 18+ • Orange County
          </span>
                    <span style={{ color: "var(--muted)" }}>
            Telehealth &amp; In-person appointments
          </span>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-3" style={{ fontSize: 13 }}>
                    <Link
                        href="/new-patients"
                        style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}
                    >
                        New patients →
                    </Link>
                    <span style={{ color: "var(--muted)" }}>
            Call:{" "}
                        <a
                            href="tel:+17147696090"
                            style={{ color: "var(--text)", fontWeight: 700, textDecoration: "none" }}
                        >
              (714) 769-6090
            </a>
          </span>
                </div>
            </div>
        </div>
    );
}
