import React from "react";

type Item = {
    title: string;
    body: string;
    meta?: string; // small supporting line
};

const items: Item[] = [
    {
        title: "Clarity",
        body: "Straightforward communication so you understand your options and next steps.",
        meta: "Clear plan after each visit"
    },
    {
        title: "Collaboration",
        body: "Visits are collaborative and unhurried, with time for questions and priorities.",
        meta: "Your goals lead the plan"
    },
    {
        title: "Evidence-based care",
        body: "Care plans grounded in current best practices and tailored to your goals.",
        meta: "Modern psychiatry, practical"
    },
    {
        title: "Consistency",
        body: "Follow-ups that track progress and adjust treatment thoughtfully over time.",
        meta: "Steady support over time"
    }
];

export default function HowWeCareForYou() {
    return (
        <section className="how-we-care py-5 py-lg-6">
            <div className="container">
                <div className="text-center mx-auto how-we-care__header">
                    <p className="how-we-care__eyebrow mb-2">Our approach</p>
                    <h2 className="how-we-care__title mb-3">How We Care for You</h2>
                    <p className="how-we-care__subtitle mb-0">
                        Thoughtful, evidence-based psychiatry tailored to your needs — with a focus on listening,
                        understanding your goals, and building a plan that fits your life.
                    </p>
                </div>

                <div className="row g-3 g-md-4 mt-4 mt-lg-5">
                    {items.map((item, idx) => (
                        <div className="col-12 col-md-6" key={item.title}>
                            <div className="how-we-care__card h-100 p-4 p-lg-4">
                                <div className="d-flex align-items-start gap-3">
                                    <div className="how-we-care__chip" aria-hidden="true">
                                        {String(idx + 1).padStart(2, "0")}
                                    </div>

                                    <div className="flex-grow-1">
                                        <div className="d-flex flex-column">
                                            <h3 className="how-we-care__cardTitle mb-1">{item.title}</h3>
                                            {item.meta && (
                                                <div className="how-we-care__meta mb-2">{item.meta}</div>
                                            )}
                                        </div>
                                        <p className="how-we-care__cardBody mb-0">{item.body}</p>
                                    </div>
                                </div>

                                <div className="how-we-care__accent" aria-hidden="true" />
                            </div>
                        </div>
                    ))}
                </div>

                <p className="how-we-care__footnote text-center mt-4 mt-lg-5 mb-0">
                    Adults 18+ • Telehealth across California • In-person in Orange County
                </p>
            </div>
        </section>
    );
}
