export default function TelehealthInPerson() {
    return (
        <section className="container py-5">
            <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-6">
                        <h2 className="h3 fw-semibold mb-2">Telehealth & in-person options</h2>
                        <p className="text-muted mb-0">
                            We offer both telehealth and in-person appointments, depending on your needs and availability.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="p-4 rounded-4 border bg-light">
                                    <div className="fw-semibold mb-1">Telehealth</div>
                                    <div className="text-muted">
                                        Convenient for many follow-ups and ongoing care. You’ll receive simple instructions before your visit.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="p-4 rounded-4 border bg-light">
                                    <div className="fw-semibold mb-1">In-person</div>
                                    <div className="text-muted">
                                        Available when appropriate. We’ll confirm location details and what to bring when scheduling.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <a className="btn btn-primary" href="/contact">
                                Ask about availability
                            </a>
                            <a className="btn btn-outline-secondary" href="/insurance-fees">
                                Check insurance & fees
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
