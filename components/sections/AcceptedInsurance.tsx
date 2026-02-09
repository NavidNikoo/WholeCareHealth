import InsuranceLogos from "./InsuranceLogos";

export default function AcceptedInsurance() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                    <h2 className="h3 fw-semibold mb-2">Insurance we work with</h2>
                    <p className="text-muted">
                        We work with many major plans. Networks can change — we’ll confirm
                        eligibility for your specific plan.
                    </p>

                    {/* Reused logos (no duplicate heading) */}
                    <InsuranceLogos hideHeading compact align="start" />

                    {/* Self-pay / OON callout */}
                    <div className="mt-4 p-4 rounded-4 border bg-white shadow-sm">
                        <div className="fw-semibold mb-1">Self-pay &amp; out-of-network</div>
                        <div className="text-muted">
                            Prefer to pay directly or have out-of-network benefits? We’ll
                            provide clear pricing and can offer a superbill upon request.
                        </div>
                    </div>

                    <div className="text-muted small mt-3">
                        Don’t see your plan?{" "}
                        <a href="/contact" className="link-wc">
                            Contact us
                        </a>{" "}
                        — we may still be able to help.
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
                            <a className="btn btn-wc btn-wc-outline w-100" href="/contact">
                                Send insurance info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
