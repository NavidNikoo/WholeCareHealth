export default function WhatToExpectAbout() {
    return (
        <section className="container py-5">
            <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm">
                <div className="row g-4 align-items-start">
                    {/* Left intro */}
                    <div className="col-lg-5">
                        <div className="text-uppercase small text-muted fw-semibold mb-2">
                            What to expect
                        </div>

                        <h2 className="h3 fw-semibold mb-3">A clear, supportive process</h2>

                        <p className="text-muted mb-0" style={{ maxWidth: "42ch" }}>
                            If you’re new to psychiatric care, we keep things straightforward and
                            low-friction. We focus on understanding you first, then recommending
                            the most appropriate next step.
                        </p>
                    </div>

                    {/* Right content */}
                    <div className="col-lg-7">
                        <div className="d-grid gap-3">
                            {/* Step 1 */}
                            <div className="p-4 rounded-4 border bg-light">
                                <div className="d-flex align-items-start gap-3">
                  <span
                      className="rounded-circle"
                      style={{
                          width: 10,
                          height: 10,
                          marginTop: 6,
                          backgroundColor: "rgba(43, 182, 115, 0.7)", // uses your accent
                          flexShrink: 0,
                      }}
                  />
                                    <div>
                                        <div className="fw-semibold mb-1">First visit</div>
                                        <div className="text-muted">
                                            We review symptoms, personal history, and goals, then outline a
                                            thoughtful treatment plan and follow-up schedule.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="p-4 rounded-4 border bg-light">
                                <div className="d-flex align-items-start gap-3">
                  <span
                      className="rounded-circle"
                      style={{
                          width: 10,
                          height: 10,
                          marginTop: 6,
                          backgroundColor: "rgba(43, 182, 115, 0.7)", // uses your accent
                          flexShrink: 0,
                      }}
                  />
                                    <div>
                                        <div className="fw-semibold mb-1">Ongoing care</div>
                                        <div className="text-muted">
                                            Follow-ups allow us to monitor progress, side effects (if
                                            applicable), and make adjustments as your needs evolve.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="d-flex gap-2 flex-wrap pt-2">
                                <a href="/new-patients" className="btn btn-wc btn-wc-primary">
                                    New patients
                                </a>
                                <a href="/contact" className="btn btn-wc btn-wc-outline">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
