"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

const FAQS: FAQItem[] = [
    {
        question: "How soon can I be seen?",
        answer:
            "Availability varies. Reach out with your preferred days/times and we’ll share the next openings.",
    },
    {
        question: "Do you take insurance?",
        answer:
            "We work with many plans. Check Insurance & Fees or contact us and we’ll help confirm your coverage.",
    },
    {
        question: "What if I’m not sure what I need?",
        answer:
            "Totally normal. Start with an evaluation and we’ll recommend the next best step based on your goals.",
    },
];

export default function NewPatientsFAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? -1 : idx));
    };

    // Stable IDs (no useId needed)
    const baseId = "np-faq";

    return (
        <section className="container py-5">
            <div className="row g-4 align-items-start">
                {/* LEFT */}
                <div className="col-lg-8">
                    <div className="wc-eyebrow mb-2">FAQs</div>

                    <h2 className="mb-2" style={{ fontWeight: 800 }}>
                        New patient questions
                    </h2>

                    <p className="text-muted mb-4" style={{ maxWidth: "70ch" }}>
                        Quick answers to the most common questions we hear before getting started.
                    </p>

                    <div
                        className="accordion"
                        style={{
                            // @ts-expect-error CSS vars
                            "--bs-accordion-active-bg": "rgba(16,185,129,0.10)",
                            // @ts-expect-error CSS vars
                            "--bs-accordion-active-color": "#0f172a",
                            // @ts-expect-error CSS vars
                            "--bs-accordion-btn-focus-box-shadow": "0 0 0 .25rem rgba(16,185,129,0.25)",
                        }}
                    >
                        {FAQS.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            const headerId = `${baseId}-h-${idx}`;
                            const panelId = `${baseId}-p-${idx}`;

                            return (
                                <div className="accordion-item" key={item.question}>
                                    <h3 className="accordion-header" id={headerId}>
                                        <button
                                            type="button"
                                            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            onClick={() => toggle(idx)}
                                        >
                                            {item.question}
                                        </button>
                                    </h3>

                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={headerId}
                                        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                    >
                                        <div className="accordion-body text-muted">{item.answer}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-muted mt-3">
                        Still have a question?{" "}
                        <a href="/contact" style={{ fontWeight: 600 }}>
                            Send us a message
                        </a>{" "}
                        and we’ll reply with clear next steps.
                    </div>
                </div>

                {/* RIGHT CTA */}
                <div className="col-lg-4">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
                            <h3 className="h5 fw-semibold mb-0">Ready to start?</h3>

                            {/* Use your existing “pill” styling */}
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    padding: "6px 10px",
                                    borderRadius: 999,
                                    color: "#0f4c3a",
                                    background: "rgba(43,182,115,.14)",
                                    border: "1px solid rgba(43,182,115,.28)",
                                }}
                            >
                New patients
              </span>
                        </div>

                        <p className="text-muted mb-4">
                            Request an appointment and we’ll respond with next steps and scheduling options.
                        </p>

                        <div className="d-grid gap-2">
                            {/* If you want to match your new button system, swap these to btn-wc classes */}
                            <a className="btn btn-wc btn-wc-primary" href="/contact">
                                Request appointment
                            </a>
                            <a className="btn btn-wc btn-wc-outline" href="/services">
                                Explore services
                            </a>
                        </div>

                        <div className="text-muted small mt-3">
                            Prefer phone? Call <span className="fw-semibold">(714) 769-6090</span>.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
