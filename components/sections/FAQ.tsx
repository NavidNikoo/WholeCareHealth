// components/sections/FAQ.tsx
export default function FAQ() {
    return (
        <section className="container py-5">
            <div className="row g-4">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-semibold mb-2">Frequently asked questions</h2>
                    <p className="text-muted mb-4">
                        Quick answers about appointments, telehealth, insurance, and what to expect.
                    </p>

                    <div className="accordion" id="faq">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="q1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1">
                                    Do you offer telehealth?
                                </button>
                            </h2>
                            <div id="a1" className="accordion-collapse collapse show" data-bs-parent="#faq">
                                <div className="accordion-body text-muted">
                                    Yes — we offer secure telehealth visits for adults 18+ in Orange County and California, when appropriate.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="q2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2">
                                    What happens during the first visit?
                                </button>
                            </h2>
                            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#faq">
                                <div className="accordion-body text-muted">
                                    We’ll review symptoms, history, goals, and create a clear plan (which may include therapy referrals or medication options).
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="q3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3">
                                    Do you take insurance?
                                </button>
                            </h2>
                            <div id="a3" className="accordion-collapse collapse" data-bs-parent="#faq">
                                <div className="accordion-body text-muted">
                                    We work with many plans. Check the Insurance & Fees page or contact us and we’ll confirm benefits.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h5 fw-semibold">Still have a question?</h3>
                        <p className="text-muted">
                            Send us a message and we’ll reply with next steps.
                        </p>
                        <a className="btn btn-primary w-100" href="/contact">Contact</a>
                        <a className="btn btn-outline-secondary w-100 mt-2" href="/new-patients">New patients</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
