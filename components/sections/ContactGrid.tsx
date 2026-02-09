"use client";

import React, { useState } from "react";

// components/sections/ContactGrid.tsx
export default function ContactGrid() {
    const DISPLAY_EMAIL = "info@wholecarehealth.com"; // shown on page
    const SEND_TO_EMAIL = "info@allpsychgroup.com"; // where submissions go (server-side)

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [visitType, setVisitType] = useState("Either");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const resetForm = () => {
        setFullName("");
        setEmail("");
        setPhone("");
        setVisitType("Either");
        setMessage("");
    };

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setResult(null);

        // Basic validation
        if (!fullName.trim() || !email.trim() || !message.trim()) {
            setResult({ type: "error", text: "Please fill out Full name, Email, and Message." });
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                    visitType,
                    message,
                    // optional: helps confirm test routing during dev
                    debugTo: SEND_TO_EMAIL,
                }),
            });

            const data = (await res.json().catch(() => null)) as any;

            if (!res.ok) {
                throw new Error(data?.error || "Message failed to send.");
            }

            setResult({ type: "success", text: "Message sent! We’ll get back to you soon." });
            resetForm();
        } catch (err: any) {
            setResult({
                type: "error",
                text: err?.message || "Something went wrong. Please try again in a moment.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="container pb-5" id="contact-form">
            <div className="row g-4 align-items-stretch">
                {/* LEFT: Details */}
                <div className="col-lg-4">
                    <div className="wc-card p-4 h-100">
                        <h2 className="h5 fw-semibold mb-3">Contact details</h2>

                        <div className="mb-3">
                            <div className="text-muted small">Phone</div>
                            <a className="fw-semibold text-decoration-none" href="tel:9496599967">
                                (949) 659-9967
                            </a>
                        </div>

                        <div className="mb-3">
                            <div className="text-muted small">Email</div>
                            <a className="fw-semibold text-decoration-none" href={`mailto:${DISPLAY_EMAIL}`}>
                                {DISPLAY_EMAIL}
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

                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full name</label>
                                    <input
                                        className="form-control"
                                        placeholder="Jane Doe"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        autoComplete="name"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        className="form-control"
                                        placeholder="jane@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Phone (optional)</label>
                                    <input
                                        className="form-control"
                                        placeholder="(949) 555-0123"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        autoComplete="tel"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Preferred visit type</label>
                                    <select className="form-select" value={visitType} onChange={(e) => setVisitType(e.target.value)}>
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
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="d-flex gap-2 flex-wrap mt-4 align-items-center">
                                <button type="submit" className="btn btn-wc-primary" disabled={loading}>
                                    {loading ? "Sending..." : "Send message"}
                                </button>
                                <a className="btn btn-wc-outline" href="/services">
                                    Explore services
                                </a>

                                {/* Status */}
                                {result && (
                                    <div
                                        className={`small ms-1 ${
                                            result.type === "success" ? "text-success" : "text-danger"
                                        }`}
                                        style={{ lineHeight: 1.2 }}
                                    >
                                        {result.text}
                                    </div>
                                )}
                            </div>

                            <div className="text-muted small mt-3">
                                Test mode: Submissions send to <span className="fw-semibold">{SEND_TO_EMAIL}</span>.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
