export default function InsuranceFeesHero() {
    return (
        <section className="container py-5">
            <div className="row align-items-start g-4">
                <div className="col-lg-7">
                    <h1 className="display-5 fw-semibold mb-3">Insurance & Fees</h1>
                    <p className="text-muted fs-5 mb-4">
                        We accept many insurance plans and offer transparent self-pay options.
                        If you’re not sure what applies to you, contact us and we’ll help you confirm benefits.
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                        <a className="btn btn-primary" href="/new-patients">
                            Request Appointment
                        </a>
                        <a className="btn btn-outline-secondary" href="/contact">
                            Verify coverage
                        </a>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="p-4 rounded-4 border bg-white shadow-sm">
                        <h3 className="h6 fw-semibold mb-2">Quick note</h3>
                        <p className="text-muted mb-0">
                            Coverage and out-of-pocket cost depend on your specific plan, deductible, and network status.
                            We can verify benefits, but final responsibility is determined by your insurer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
