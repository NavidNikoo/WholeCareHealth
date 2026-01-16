const VALUES = [
    {
        title: "Clarity",
        body: "Straightforward communication so you understand your options and next steps.",
    },
    {
        title: "Respect",
        body: "Care that honors your lived experience and preferences without judgment.",
    },
    {
        title: "Consistency",
        body: "Follow-ups that track progress and adjust treatment thoughtfully over time.",
    },
    {
        title: "Practical care",
        body: "Recommendations that fit real life and focus on meaningful improvement.",
    },
    {
        title: "Privacy",
        body: "We take confidentiality seriously and handle information with care.",
    },
    {
        title: "Evidence-informed",
        body: "Treatment guided by clinical expertise and established best practices.",
    },
];

export default function ValuesGrid() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-start">
                <div className="col-lg-5">
                    <h2 className="h3 fw-semibold mb-2">Our values</h2>
                    <p className="text-muted mb-0">
                        The principles that shape how we communicate, plan care, and support patients.
                    </p>
                </div>

                <div className="col-lg-7">
                    <div className="row g-3">
                        {VALUES.map((v) => (
                            <div key={v.title} className="col-md-6">
                                <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                                    <div className="fw-semibold mb-1">{v.title}</div>
                                    <div className="text-muted">{v.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
