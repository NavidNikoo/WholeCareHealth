const STEPS = [
    {
        title: "1) Request an appointment",
        body: "Send us a message or call. We’ll ask a few quick questions about what you’re looking for and your availability.",
    },
    {
        title: "2) Verify coverage (if using insurance)",
        body: "If you provide insurance details, we can help confirm eligibility and typical out-of-pocket expectations.",
    },
    {
        title: "3) Complete intake forms",
        body: "We’ll send intake paperwork so your clinician can review your history and goals ahead of time.",
    },
    {
        title: "4) First visit (evaluation)",
        body: "We’ll discuss symptoms, history, what’s worked before, and create a plan that fits your goals.",
    },
    {
        title: "5) Follow-ups & adjustments",
        body: "Treatment is collaborative. We’ll monitor response over time and adjust as needed.",
    },
];

export default function NewPatientSteps() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-start">
                <div className="col-lg-5">
                    <h2 className="h3 fw-semibold mb-2">How it works</h2>
                    <p className="text-muted mb-0">
                        A simple, step-by-step process so you know exactly what happens next.
                    </p>
                </div>

                <div className="col-lg-7">
                    <div className="row g-3">
                        {STEPS.map((s) => (
                            <div key={s.title} className="col-12">
                                <div className="p-4 rounded-4 border bg-white shadow-sm">
                                    <div className="fw-semibold mb-1">{s.title}</div>
                                    <div className="text-muted">{s.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex gap-2 flex-wrap mt-4">
                        <a className="btn btn-primary" href="/contact">
                            Get started
                        </a>
                        <a className="btn btn-outline-secondary" href="/services">
                            View services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
