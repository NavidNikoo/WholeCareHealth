export default function Superbills() {
    return (
        <section className="container py-5">
            <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-7">
                        <h2 className="h3 fw-semibold mb-2">Out-of-network & superbills</h2>
                        <p className="text-muted mb-0">
                            If we are out-of-network for your plan, you may still be able to receive reimbursement depending on your benefits.
                            We can provide a superbill upon request.
                        </p>
                    </div>

                    <div className="col-lg-5">
                        <div className="p-3 rounded-4 border bg-light">
                            <div className="fw-semibold mb-2">What a superbill helps with</div>
                            <ul className="text-muted mb-0">
                                <li>Submitting claims to your insurer</li>
                                <li>Requesting reimbursement (if eligible)</li>
                                <li>Keeping clean records of services</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-muted small mt-3">
                    Reimbursement is not guaranteed and depends on your plan.
                </div>
            </div>
        </section>
    );
}
