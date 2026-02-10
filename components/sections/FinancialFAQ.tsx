"use client";

import React, { useId, useMemo, useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQS: FAQItem[] = [
    {
        question: "How do I know what my visit will cost?",
        answer:
            "Your cost depends on your plan (copay, deductible, coinsurance). We can verify benefits, but the final determination is made by your insurer.",
    },
    {
        question: "Do you offer self-pay?",
        answer:
            "Yes. Self-pay is $300 for the initial evaluation and $150 for follow-up visits. We’ll confirm pricing before scheduling so you can make an informed decision.",
    },
    {
        question: "Can I use a patient portal from the website?",
        answer:
            "If your care team uses Practice Fusion, portal invitations are typically sent from inside the EHR. Our website can link you to the portal login and explain how to access it.",
    },
];

export default function FinancialFAQ() {
    const sectionId = useId();
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? -1 : idx));
    };

    const accStyle = useMemo(
        () =>
            ({
                "--wc-acc-border": "rgba(15, 23, 42, 0.12)",
                "--wc-acc-bg": "#ffffff",
                "--wc-acc-active-bg": "rgba(43, 182, 115, 0.10)",
                "--wc-acc-focus": "0 0 0 .25rem rgba(43, 182, 115, 0.22)",
            }) as React.CSSProperties,
        []
    );


    return (
        <section className="container py-5">
            <div className="row g-4">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-semibold mb-2">Financial FAQs</h2>
                    <p className="text-muted mb-4">
                        Common questions about coverage, billing, and portal logistics.
                    </p>

                    {/* WC-themed accordion */}
                    <div className="accordion wc-accordion" style={accStyle}>
                        {FAQS.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            const headerId = `${sectionId}-faq-h-${idx}`;
                            const panelId = `${sectionId}-faq-p-${idx}`;

                            return (
                                <div className="accordion-item wc-accordion-item" key={item.question}>
                                    <h3 className="accordion-header" id={headerId}>
                                        <button
                                            type="button"
                                            className={`accordion-button wc-accordion-btn ${isOpen ? "" : "collapsed"}`}
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
                </div>

                <div className="col-lg-4">
                    {/* Use your global card + buttons */}
                    <div className="wc-card p-4 h-100">
                        <h3 className="h5 fw-semibold">Need help?</h3>
                        <p className="text-muted">
                            Send us your insurance information and we’ll follow up with next steps.
                        </p>

                        <a className="btn btn-wc btn-wc-primary w-100" href="/contact">
                            Contact
                        </a>
                        <a className="btn btn-wc btn-wc-outline w-100 mt-2" href="/new-patients">
                            New patients
                        </a>

                        <div className="text-muted small mt-3">
                            Tip: Include your plan name + member ID so we can verify faster.
                        </div>
                    </div>
                </div>
            </div>

            {/* Local styles to keep accordion consistent with WC tokens */}
            <style jsx global>{`
        .wc-accordion .accordion-item {
          border: 1px solid var(--wc-acc-border);
          background: var(--wc-acc-bg);
        }

        .wc-accordion .accordion-item:first-child {
          border-top-left-radius: 14px;
          border-top-right-radius: 14px;
          overflow: hidden;
        }

        .wc-accordion .accordion-item:last-child {
          border-bottom-left-radius: 14px;
          border-bottom-right-radius: 14px;
          overflow: hidden;
        }

        .wc-accordion .accordion-button {
          font-weight: 600;
          color: var(--text);
          background: var(--wc-acc-bg);
        }

        .wc-accordion .accordion-button:not(.collapsed) {
          background: var(--wc-acc-active-bg);
          color: var(--text);
          box-shadow: none;
        }

        .wc-accordion .accordion-button:focus {
          box-shadow: var(--wc-acc-focus);
        }

        .wc-accordion .accordion-body {
          line-height: 1.65;
        }
      `}</style>
        </section>
    );
}
