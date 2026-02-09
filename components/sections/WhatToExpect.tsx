// components/sections/WhatToExpect.tsx
export default function WhatToExpect() {
    const visit = [
        "Current concerns and symptoms",
        "Relevant medical and mental health history",
        "Past treatment and medication history",
        "Goals and what “better” looks like for you",
        "Initial recommendations and next steps",
    ];

    const ready = [
        "A list of current medications (if any)",
        "Past diagnoses or treatment notes (if available)",
        "Insurance card (if using insurance)",
        "Any questions you want answered",
    ];

    return (
        <section className="container py-5">
            <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
                <div>
                    <div className="wc-eyebrow mb-2">What to expect</div>
                    <h2 className="mb-1">Your first visit, made simple</h2>
                    <p className="text-muted mb-0" style={{ maxWidth: "70ch" }}>
                        We’ll focus on understanding what’s going on, what’s worked before, and what you want to feel
                        different — then we’ll map out clear next steps.
                    </p>
                </div>
            </div>

            <div className="row g-4 align-items-stretch">
                {/* Card 1 */}
                <div className="col-lg-6">
                    <div className="wc-card p-4 p-lg-5 h-100 what-card">
                        <div className="d-flex gap-3 align-items-start mb-3">
                            <div className="what-icon" aria-hidden="true">
                                {/* clipboard icon */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M9 4h6m-6 0a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path d="M9 10h6M9 14h6M9 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="h5 fw-semibold mb-1">What we’ll cover</h3>
                                <div className="text-muted">A structured conversation to understand your needs.</div>
                            </div>
                        </div>

                        <ul className="what-list mb-0">
                            {visit.map((item) => (
                                <li className="what-item" key={item}>
                                    <span className="what-check" aria-hidden="true">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-6">
                    <div className="wc-card p-4 p-lg-5 h-100 what-card">
                        <div className="d-flex gap-3 align-items-start mb-3">
                            <div className="what-icon" aria-hidden="true">
                                {/* bag icon */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M7 8V7a5 5 0 0 1 10 0v1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M6.5 8h11l1 13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2l1-13Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="h5 fw-semibold mb-1">Helpful to have ready</h3>
                                <div className="text-muted">Optional — bring what you can.</div>
                            </div>
                        </div>

                        <ul className="what-list mb-3">
                            {ready.map((item) => (
                                <li className="what-item" key={item}>
                                    <span className="what-check" aria-hidden="true">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="what-foot">
                            If you don’t have everything, that’s okay — we can still start.
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional CTA row */}
            <div className="d-flex flex-wrap gap-2 mt-4">
                <a className="btn btn-wc btn-wc-primary btn-lg" href="/contact">
                    Request appointment
                </a>
                <a className="btn btn-wc btn-wc-outline btn-lg" href="/insurance-fees">
                    Insurance &amp; fees
                </a>
            </div>
        </section>
    );
}
