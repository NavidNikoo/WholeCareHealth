// components/sections/TelehealthInPerson.tsx
function OptionCard({
                        title,
                        desc,
                        bullets,
                        icon,
                    }: {
    title: string;
    desc: string;
    bullets: string[];
    icon: React.ReactNode;
}) {
    return (
        <div className="tip-card h-100">
            <div className="d-flex gap-3 align-items-start">
                <div className="tip-icon" aria-hidden="true">
                    {icon}
                </div>

                <div className="flex-grow-1">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="h6 fw-semibold mb-1">{title}</h3>
                    </div>
                    <p className="text-muted mb-3" style={{ lineHeight: 1.6 }}>
                        {desc}
                    </p>

                    <ul className="tip-list mb-0">
                        {bullets.map((b) => (
                            <li key={b} className="tip-item">
                                <span className="tip-dot" aria-hidden="true" />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function TelehealthInPerson() {
    return (
        <section className="container py-5">
            <div className="tip-wrap">
                <div className="row g-4 align-items-start">
                    {/* Left copy */}
                    <div className="col-lg-5">
                        <div className="wc-eyebrow mb-2">Visit options</div>
                        <h2 className="mb-2">Telehealth or in-person — your choice</h2>
                        <p className="text-muted mb-3" style={{ maxWidth: "60ch" }}>
                            We offer both telehealth and in-person appointments based on your needs, preferences,
                            and availability.
                        </p>

                        <div className="tip-note">
                            <span className="tip-note__badge">Heads up</span>
                            <span>
                We’ll recommend the best format for your situation — and confirm details before you’re scheduled.
              </span>
                        </div>

                        <div className="d-flex gap-2 flex-wrap mt-4">
                            <a className="btn btn-wc-primary" href="/contact">
                                Ask about availability
                            </a>
                            <a className="btn btn-wc-outline" href="/insurance-fees">
                                Insurance &amp; fees
                            </a>
                        </div>
                    </div>

                    {/* Right cards */}
                    <div className="col-lg-7">
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <OptionCard
                                    title="Telehealth"
                                    desc="Convenient for many follow-ups and ongoing care."
                                    bullets={[
                                        "Join from home (secure video)",
                                        "Simple instructions sent ahead of time",
                                        "Great for busy schedules",
                                    ]}
                                    icon={
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M4.5 7.5A2.5 2.5 0 0 1 7 5h8a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 15 15H7a2.5 2.5 0 0 1-2.5-2.5v-5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M17.5 9.2 21 7.5v7l-3.5-1.7V9.2Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }
                                />
                            </div>

                            <div className="col-12 col-md-6">
                                <OptionCard
                                    title="In-person"
                                    desc="Available when appropriate for your care plan."
                                    bullets={[
                                        "Calm, private setting",
                                        "We confirm location details beforehand",
                                        "We’ll tell you what to bring",
                                    ]}
                                    icon={
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 21s7-4.8 7-10.2C19 7.2 16.3 5 12.9 5c-1.4 0-2.6.6-3.4 1.6C8.7 5.6 7.5 5 6.1 5 2.7 5 0 7.2 0 10.8 0 16.2 7 21 7 21"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M9.5 12h5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    }
                                />
                            </div>
                        </div>

                        <div className="tip-mini mt-3">
                            <div className="tip-mini__title">Not sure which to pick?</div>
                            <div className="text-muted">
                                Tell us what you’re looking for — we’ll guide you to the best option.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
