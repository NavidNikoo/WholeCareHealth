"use client";

import { useState } from "react";

export default function ContactGrid() {
    const [status, setStatus] = useState<"idle" | "sent">("idle");

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = String(form.get("name") || "");
        const email = String(form.get("email") || "");
        const phone = String(form.get("phone") || "");
        const message = String(form.get("message") || "");

        // Simple “works everywhere” behavior (no backend needed):
        // Open the user's mail client with a prefilled email.
        const subject = encodeURIComponent(`Website message from ${name || "New visitor"}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n`
        );

        window.location.href = `mailto:info@wholecarehealth.com?subject=${subject}&body=${body}`;
        setStatus("sent");
        e.currentTarget.reset();
    }

    return (
        <section className="container py-5">
            <div className="row g-4 align-items-stretch">
                {/* Left column */}
                <div className="col-lg-5">
                    <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm h-100">
                        <h2 className="h4 mb-3">Contact</h2>
                        <p className="text-muted mb-4">
                            The fastest way to schedule is to call. For general questions or requests, send a message and we’ll
                            respond with next steps.
                        </p>

                        <div className="mb-3">
                            <div className="text-muted small">Phone</div>
                            <a className="fw-semibold text-decoration-none" href="tel:+17147696090">
                                (714) 769-6090
                            </a>
                        </div>

                        <div className="mb-3">
                            <div className="text-muted small">Email</div>
                            <a className="fw-semibold text-decoration-none" href="mailto:info@wholecarehealth.com">
                                info@wholecarehealth.com
                            </a>
                        </div>

                        <div className="mb-0">
                            <div className="text-muted small">Location</div>
                            <div className="fw-semibold">Orange County, CA</div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex gap-2">
                            <a className="btn btn-primary" href="/new-patients">
                                Request appointment
                            </a>
                            <a className="btn btn-outline-secondary" href="/insurance-fees">
                                Insurance & fees
                            </a>
                        </div>

                        {status === "sent" && (
                            <div className="alert alert-success mt-3 mb-0">
                                Draft email opened — if it didn’t pop up, check your browser’s pop-up/mail settings.
                            </div>
                        )}
                    </div>
                </div>

                {/* Right column (Form) */}
                <div className="col-lg-7">
                    <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h5 mb-3">Send a message</h3>
                        <p className="text-muted mb-4">
                            This form is for scheduling requests and general questions. If you’re in crisis, call 911 or go to your
                            nearest emergency room.
                        </p>

                        <form onSubmit={onSubmit} className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Full name</label>
                                <input name="name" className="form-control" placeholder="Jane Doe" required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input name="email" type="email" className="form-control" placeholder="jane@email.com" required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Phone (optional)</label>
                                <input name="phone" className="form-control" placeholder="(714) 555-0123" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Preferred visit type</label>
                                <select name="visitType" className="form-select" defaultValue="Either">
                                    <option>Either</option>
                                    <option>Telehealth</option>
                                    <option>In-person</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows={5}
                                    placeholder="Tell us what you’re looking for, any timing preferences, and whether you plan to use insurance."
                                    required
                                />
                            </div>

                            <div className="col-12 d-flex gap-2">
                                <button type="submit" className="btn btn-primary">
                                    Send message
                                </button>
                                <a className="btn btn-outline-secondary" href="tel:+17147696090">
                                    Call instead
                                </a>
                            </div>

                            <div className="col-12">
                                <div className="small text-muted">
                                    Note: Submitting opens your email client (no PHI is stored on the website).
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
