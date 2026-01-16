export default function ConditionsHero() {
    return (
        <section className="container py-5">
            <div className="row align-items-center g-4">
                <div className="col-lg-8">
                    <h1 className="display-5 fw-semibold">Conditions We Treat</h1>
                    <p className="text-muted fs-5 mt-3">
                        Evidence-based psychiatric care for adults 18+ in Orange County.
                        Telehealth and in-person appointments available.
                    </p>

                    <div className="d-flex gap-2 mt-4">
                        <a className="btn btn-primary" href="/new-patients">
                            Request Appointment
                        </a>
                        <a className="btn btn-outline-secondary" href="/services">
                            View Services
                        </a>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="p-4 rounded-4 border bg-white shadow-sm">
                        <div className="fw-semibold mb-2">Quick note</div>
                        <p className="text-muted mb-0">
                            This page is informational and not a diagnosis. If you’re in crisis,
                            call 911 or go to your nearest ER.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
