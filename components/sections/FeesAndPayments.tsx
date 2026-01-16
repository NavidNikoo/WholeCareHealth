export default function FeesAndPayments() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-7">
                    <h2 className="h3 fw-semibold mb-2">Fees & payment</h2>
                    <p className="text-muted">
                        If you’re using insurance, your cost may include copays, deductibles, or coinsurance.
                        If you’re self-pay, we’ll provide clear pricing before scheduling.
                    </p>

                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                                <div className="fw-semibold mb-1">Initial evaluation</div>
                                <div className="text-muted">
                                    A comprehensive intake to understand symptoms, history, and goals.
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                                <div className="fw-semibold mb-1">Follow-up visits</div>
                                <div className="text-muted">
                                    Ongoing care focused on medication management and progress over time.
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="p-4 rounded-4 border bg-white shadow-sm">
                                <div className="fw-semibold mb-1">Payment methods</div>
                                <div className="text-muted">
                                    We accept major credit/debit cards. Payment is typically due at the time of service.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-muted small mt-3">
                        Note: missed appointment and late cancellation policies may apply. Details are provided during scheduling.
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h5 fw-semibold mb-2">Want an estimate?</h3>
                        <p className="text-muted">
                            Tell us your insurance plan and we’ll help verify eligibility and typical out-of-pocket expectations.
                        </p>

                        <div className="d-grid gap-2">
                            <a className="btn btn-primary" href="/contact">
                                Verify benefits
                            </a>
                            <a className="btn btn-outline-secondary" href="/new-patients">
                                New patient steps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
