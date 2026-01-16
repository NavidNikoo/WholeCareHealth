export default function WhatToExpect() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h2 className="h4 fw-semibold mb-2">What we’ll cover in your first visit</h2>
                        <ul className="text-muted mb-0">
                            <li>Current concerns and symptoms</li>
                            <li>Relevant medical and mental health history</li>
                            <li>Past treatment and medication history</li>
                            <li>Goals and what “better” looks like for you</li>
                            <li>Initial recommendations and next steps</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h2 className="h4 fw-semibold mb-2">Helpful to have ready</h2>
                        <ul className="text-muted mb-0">
                            <li>A list of current medications (if any)</li>
                            <li>Past diagnoses or treatment notes (if available)</li>
                            <li>Insurance card (if using insurance)</li>
                            <li>Any questions you want answered</li>
                        </ul>
                        <div className="text-muted small mt-3">
                            If you don’t have everything, that’s okay — we can still start.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
