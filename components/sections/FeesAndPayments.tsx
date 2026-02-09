export default function FeesAndPayments() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-stretch">
                {/* Left column */}
                <div className="col-lg-7">
                    <h2 className="h3 fw-semibold mb-2">Fees &amp; payment</h2>
                    <p className="text-muted mb-4">
                        If you’re using insurance, your cost may include copays, deductibles, or coinsurance.
                        For self-pay patients, we offer clear, upfront pricing.
                    </p>

                    {/* Self-pay pricing */}
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-md-6">
                            <div className="wc-card p-4 h-100">
                                <div className="fw-semibold mb-1">Initial evaluation</div>
                                <div className="text-muted mb-1">
                                    Comprehensive intake to understand symptoms, history, and goals.
                                </div>
                                <div className="fw-semibold">$300</div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="wc-card p-4 h-100">
                                <div className="fw-semibold mb-1">Follow-up visits</div>
                                <div className="text-muted mb-1">
                                    Ongoing care focused on medication management and progress.
                                </div>
                                <div className="fw-semibold">$150</div>
                            </div>
                        </div>
                    </div>

                    {/* Payment methods */}
                    <div className="wc-card p-4 mb-3">
                        <div className="fw-semibold mb-1">Payment methods</div>
                        <div className="text-muted">
                            We accept major credit and debit cards. Payment is typically due at the time of service.
                        </div>
                    </div>

                    <div className="text-muted small">
                        Insurance coverage varies by plan. We’ll verify benefits and share your expected
                        out-of-pocket cost before your visit.
                    </div>
                </div>

                {/* Right column */}
                <div className="col-lg-5">
                    <div className="wc-card p-4 h-100">
                        <h3 className="h5 fw-semibold mb-2">Want an estimate?</h3>
                        <p className="text-muted">
                            Tell us your insurance plan and we’ll help verify eligibility and typical
                            out-of-pocket expectations before scheduling.
                        </p>

                        <div className="d-grid gap-2">
                            <a className="btn btn-wc btn-wc-primary" href="/contact">
                                Verify benefits
                            </a>
                            <a className="btn btn-wc btn-wc-outline" href="/new-patients">
                                New patient steps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
