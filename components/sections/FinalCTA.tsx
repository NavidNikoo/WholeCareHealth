// components/sections/FinalCTA.tsx
export default function FinalCTA() {
    return (
        <section className="container py-5">
            <div className="p-4 p-md-5 rounded-4 border shadow-sm bg-white">
                <div className="row align-items-center g-4">
                    <div className="col-lg-7">
                        <h2 className="display-6 fw-semibold mb-2">Ready to get started?</h2>
                        <p className="text-muted mb-0">
                            We offer both telehealth and in person psychiatric care for adults 18+ in Orange County.
                            Tell us what you’re looking for and we’ll respond with clear next steps.
                        </p>
                    </div>

                    <div className="col-lg-5">
                        <div className="d-grid gap-2 d-sm-flex justify-content-lg-end">
                            <a className="btn btn-primary btn-lg" href="/new-patients">Request appointment</a>
                            <a className="btn btn-outline-secondary btn-lg" href="/contact">Ask a question</a>
                        </div>
                        <div className="small text-muted mt-2 text-lg-end">
                            If this is an emergency, call 911 or go to your nearest ER.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
