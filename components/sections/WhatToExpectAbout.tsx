export default function WhatToExpectAbout() {
    return (
        <section className="container py-5">
            <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-6">
                        <h2 className="h3 fw-semibold mb-2">What to expect</h2>
                        <p className="text-muted mb-0">
                            If you’re new to psychiatric care, we’ll keep the process clear and low-friction.
                            You can start with an evaluation and we’ll recommend the next best step.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="p-4 rounded-4 border bg-light">
                                    <div className="fw-semibold mb-1">First visit</div>
                                    <div className="text-muted">
                                        We review symptoms, history, and goals, then outline a plan and follow-up schedule.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="p-4 rounded-4 border bg-light">
                                    <div className="fw-semibold mb-1">Ongoing care</div>
                                    <div className="text-muted">
                                        Follow-ups help us monitor progress, side effects (if applicable), and adjust as needed.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap mt-3">
                            <a className="btn btn-primary" href="/new-patients">
                                New patients
                            </a>
                            <a className="btn btn-outline-secondary" href="/contact">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
