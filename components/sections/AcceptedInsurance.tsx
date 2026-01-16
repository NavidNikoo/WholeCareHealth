const PLANS = [
    "Aetna",
    "Anthem Blue Cross",
    "Blue Shield of California",
    "CalOptima",
    "Cigna",
    "UnitedHealthcare",
    "Optum",
    "Magellan",
    "Medicare",
    "Self-pay (out-of-network / cash pay)",
];

export default function AcceptedInsurance() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                    <h2 className="h3 fw-semibold mb-2">Insurance we work with</h2>
                    <p className="text-muted">
                        Common plans we frequently see. Networks can change — we’ll confirm eligibility for your specific plan.
                    </p>

                    <div className="row g-3">
                        {PLANS.map((p) => (
                            <div key={p} className="col-12 col-md-6">
                                <div className="p-3 rounded-4 border bg-white shadow-sm h-100">
                                    <div className="fw-semibold">{p}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-muted small mt-3">
                        Don’t see your plan? Contact us — we may still be able to help.
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h5 fw-semibold mb-2">Before your first visit</h3>
                        <p className="text-muted mb-3">
                            To help us verify benefits quickly, please be ready with:
                        </p>

                        <ul className="text-muted mb-0">
                            <li>Insurance card (front/back)</li>
                            <li>Date of birth and address</li>
                            <li>Member ID and group number</li>
                            <li>Any referral or authorization info (if required)</li>
                        </ul>

                        <div className="mt-4">
                            <a className="btn btn-outline-secondary w-100" href="/contact">
                                Send insurance info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
