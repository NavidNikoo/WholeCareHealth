export default function NewPatientsFAQ() {
    return (
        <section className="container py-5">
            <div className="row g-4">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-semibold mb-2">New patient FAQs</h2>
                    <p className="text-muted mb-4">
                        Common questions we hear before getting started.
                    </p>

                    <div className="accordion" id="npFaq">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="np1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#npc1">
                                    How soon can I be seen?
                                </button>
                            </h2>
                            <div id="npc1" className="accordion-collapse collapse show" data-bs-parent="#npFaq">
                                <div className="accordion-body text-muted">
                                    Availability varies. Contact us with your preferred days/times and we’ll share the next openings.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="np2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#npc2">
                                    Do you take insurance?
                                </button>
                            </h2>
                            <div id="npc2" className="accordion-collapse collapse" data-bs-parent="#npFaq">
                                <div className="accordion-body text-muted">
                                    We work with many plans. Visit the Insurance & Fees page or contact us to verify your specific plan.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="np3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#npc3">
                                    What if I’m not sure what I need?
                                </button>
                            </h2>
                            <div id="npc3" className="accordion-collapse collapse" data-bs-parent="#npFaq">
                                <div className="accordion-body text-muted">
                                    That’s common. Start with an evaluation and we’ll recommend the next best step based on your goals.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h5 fw-semibold">Ready?</h3>
                        <p className="text-muted">
                            Request an appointment and we’ll respond with next steps.
                        </p>
                        <a className="btn btn-primary w-100" href="/contact">Request appointment</a>
                        <a className="btn btn-outline-secondary w-100 mt-2" href="/services">Explore services</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
