export default function ContactHero() {
    return (
        <section className="container py-5">
            <div className="row align-items-center g-4">
                <div className="col-lg-7">
                    <h1 className="display-5 fw-semibold mb-3">Contact</h1>
                    <p className="text-muted fs-5 mb-0">
                        Questions, scheduling, or insurance verification — reach out and we’ll respond with next steps.
                    </p>
                </div>

                <div className="col-lg-5">
                    <div className="p-4 rounded-4 border bg-white shadow-sm">
                        <div className="fw-semibold mb-1">Quick note</div>
                        <div className="text-muted">
                            This page is informational and not medical advice. If you’re in crisis, call 911 or go to your nearest
                            emergency room.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
