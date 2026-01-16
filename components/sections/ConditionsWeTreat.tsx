import Link from "next/link";

const GROUPS = [
    {
        title: "Most common reasons patients see us",
        items: [
            { label: "Anxiety & panic", href: "/conditions/anxiety" },
            { label: "Depression & mood concerns", href: "/conditions/depression" },
            { label: "ADHD", href: "/conditions/adhd" },
            { label: "Bipolar disorder", href: "/conditions/bipolar" },
            { label: "Sleep concerns", href: "/conditions/sleep" },
        ],
    },
    {
        title: "Stress, trauma, and life challenges",
        items: [
            { label: "PTSD & trauma", href: "/conditions/trauma" },
            { label: "Chronic stress & burnout", href: "/conditions/stress" }, // or change/remove if you don’t have this page
            { label: "Grief & bereavement", href: "/conditions/grief" }, // same note
            { label: "Life transitions", href: "/services/life-transitions" },
        ],
    },
    {
        title: "Additional conditions we treat",
        items: [
            { label: "OCD", href: "/conditions/ocd" }, // same note
            { label: "Adjustment concerns", href: "/conditions/adjustment" }, // same note
            { label: "Stress management", href: "/conditions/stress-management" }, // same note
            { label: "And more", href: "/contact" }, // or /new-patients
        ],
    },
];

export default function ConditionsWeTreat() {
    return (
        <section className="py-5" aria-labelledby="conditions-title">
            <div className="container">
                <div className="row g-4 align-items-start">
                    {/* Left intro */}
                    <div className="col-12 col-lg-4">
                        <h2 id="conditions-title" className="mb-2">
                            Conditions we treat
                        </h2>
                        <p className="text-secondary mb-3">
                            We support a wide range of mental health concerns with evidence-based care and a personalized plan.
                        </p>

                        <p className="text-secondary small mb-4">
                            If you don’t see your concern listed, reach out. We can help you decide whether our care is a good fit.
                        </p>

                        <Link href="/new-patients" className="btn btn-outline-dark">
                            New patients
                        </Link>
                    </div>

                    {/* Grouped list */}
                    <div className="col-12 col-lg-8">
                        <div
                            className="p-4 p-md-5 bg-white"
                            style={{
                                borderRadius: 18,
                                border: "1px solid rgba(0,0,0,0.08)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                            }}
                        >
                            <div className="row g-4">
                                {GROUPS.map((group) => (
                                    <div className="col-12 col-md-6" key={group.title}>
                                        <div className="mb-2 fw-semibold">{group.title}</div>

                                        <div className="d-flex flex-column gap-2">
                                            {group.items.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="text-decoration-none"
                                                >
                                                    <div
                                                        className="px-3 py-2"
                                                        style={{
                                                            borderRadius: 12,
                                                            border: "1px solid rgba(0,0,0,0.08)",
                                                            background: "rgba(0,0,0,0.01)",
                                                        }}
                                                    >
                                                        <span className="text-body fw-medium">{item.label}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-3 border-top text-secondary small">
                                For urgent or life-threatening situations, call 911 or go to the nearest emergency room.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
