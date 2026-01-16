export default function NewPatientsHero() {
    return (
        <section className="container py-5">
            <div className="row align-items-start g-4">
                <div className="col-lg-7">
                    <h1 className="display-5 fw-semibold mb-3">New Patients</h1>
                    <p className="text-muted fs-5 mb-4">
                        Starting care should be simple. Here’s what to explain, what to expect,
                        and how to schedule your first appointment.
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                        <a className="btn btn-primary" href="/contact">
                            Request appointment
                        </a>
                        <a className="btn btn-outline-secondary" href="/insurance-fees">
                            Insurance & fees
                        </a>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="p-4 rounded-4 border bg-white shadow-sm">
                        <h3 className="h6 fw-semibold mb-2">Quick note</h3>
                        <p className="text-muted mb-0">
                            This page is informational and not medical advice. If you’re in crisis,
                            call 911 or go to your nearest emergency room.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
