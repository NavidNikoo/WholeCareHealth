// components/sections/ContactGrid.tsx
export default function ContactGrid() {
    return (
        <section className="container pb-5" id="contact-form">
            <div className="row g-4 align-items-stretch">
                {/* LEFT: Details */}
                <div className="col-lg-4">
                    <div className="wc-card p-4 h-100">
                        <h2 className="h5 fw-semibold mb-3">Contact details</h2>

                        <div className="mb-3">
                            <div className="text-muted small">Phone</div>
                            <a className="fw-semibold text-decoration-none" href="tel:7147696090">
                                (714) 769-6090
                            </a>
                        </div>

                        <div className="mb-3">
                            <div className="text-muted small">Email</div>
                            <a className="fw-semibold text-decoration-none" href="mailto:info@wholecarehealth.com">
                                info@wholecarehealth.com
                            </a>
                        </div>

                        <div className="mb-4">
                            <div className="text-muted small">Location</div>
                            <div className="fw-semibold">Orange County, CA</div>
                            <div className="text-muted small mt-1">Telehealth & in-person appointments</div>
                        </div>

                        <div className="d-grid gap-2 mt-auto">
                            <a className="btn btn-wc-primary" href="/contact">
                                Request appointment
                            </a>
                            <a className="btn btn-wc-outline" href="/new-patients">
                                New patients
                            </a>
                        </div>

                        <div className="text-muted small mt-3">
                            Tip: Include preferred days/times and whether you plan to use insurance.
                        </div>
                    </div>
                </div>

                {/* RIGHT: Form */}
                <div className="col-lg-8">
                    <div className="wc-card p-4 p-md-5 h-100">
                        <h2 className="h4 fw-semibold mb-2">Send a message</h2>
                        <p className="text-muted mb-4">
                            For scheduling requests and general questions. If you’re in crisis, call 911 or go to your nearest ER.
                        </p>

                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full name</label>
                                    <input className="form-control" placeholder="Jane Doe" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" placeholder="jane@email.com" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone (optional)</label>
                                    <input className="form-control" placeholder="(714) 555-0123" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Preferred visit type</label>
                                    <select className="form-select">
                                        <option>Either</option>
                                        <option>Telehealth</option>
                                        <option>In-person</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        placeholder="Tell us what you’re looking for, any timing preferences, and whether you plan to use insurance."
                                    />
                                </div>
                            </div>

                            <div className="d-flex gap-2 flex-wrap mt-4">
                                <button type="button" className="btn btn-wc-primary">
                                    Send message
                                </button>
                                <a className="btn btn-wc-outline" href="/services">
                                    Explore services
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
