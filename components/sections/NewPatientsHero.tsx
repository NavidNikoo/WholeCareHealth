// components/sections/NewPatientsHero.tsx
import Image from "next/image";

export default function NewPatientsHero() {
    return (
        <section className="container py-5">
            <div className="row align-items-center g-4">
                {/* LEFT: Copy */}
                <div className="col-lg-6">
                    <div
                        className="mb-2 text-uppercase small text-muted"
                        style={{ letterSpacing: "0.08em" }}
                    >
                        New patients
                    </div>

                    <h1 className="display-5 fw-semibold mb-3">New Patients</h1>

                    <p className="text-muted fs-5 mb-4" style={{ maxWidth: "56ch" }}>
                        Starting care should be simple. Here’s what to share, what to expect,
                        and how to schedule your first appointment.
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        <span className="badge rounded-pill text-bg-light border">Adults 18+</span>
                        <span className="badge rounded-pill text-bg-light border">
              Telehealth &amp; in-person
            </span>
                        <span className="badge rounded-pill text-bg-light border">
              Benefits verified before scheduling
            </span>
                    </div>

                    <div className="d-flex gap-2 flex-wrap">
                        <a className="btn btn-wc-primary" href="/contact">
                            Request appointment
                        </a>
                        <a className="btn btn-wc-outline" href="/insurance-fees">
                            Insurance &amp; fees
                        </a>
                    </div>

                    {/* Mobile note */}
                    <div className="wc-card p-3 mt-4 d-lg-none np-hero__note">
                        <div className="d-flex gap-2 align-items-start">
                            <div className="np-hero__icon" aria-hidden="true">
                                i
                            </div>
                            <div>
                                <div className="fw-semibold mb-1">Quick note</div>
                                <div className="text-muted small">
                                    This page is informational and not medical advice. If you’re in
                                    crisis, call 911 or go to your nearest emergency room.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Image + note */}
                <div className="col-lg-6">
                    <div className="wc-card overflow-hidden np-hero__media">
                        <div className="np-hero__imageWrap">
                            <Image
                                src="/images/patient-hero.jpg"
                                alt=""
                                fill
                                priority
                                sizes="(max-width: 992px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                            <div className="np-hero__overlay" />
                        </div>

                        <div className="p-4 d-none d-lg-block">
                            <div className="d-flex gap-2 align-items-start">
                                <div className="np-hero__icon" aria-hidden="true">
                                    i
                                </div>
                                <div>
                                    <div className="fw-semibold mb-1">Quick note</div>
                                    <div className="text-muted small mb-0">
                                        This page is informational and not medical advice. If you’re in
                                        crisis, call 911 or go to your nearest emergency room.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-muted small mt-2">
                        Prefer to talk by phone? Call{" "}
                        <span className="fw-semibold">(714) 769-6090</span>.
                    </div>
                </div>
            </div>
        </section>
    );
}
