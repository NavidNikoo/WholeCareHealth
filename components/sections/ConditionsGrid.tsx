import InfoCard from "@/components/ui/InfoCard";

const conditions: { title: string; description: string }[] = [
    {
        title: "Anxiety Disorders",
        description:
            "Generalized anxiety, panic disorder, social anxiety, and related concerns.",
    },
    {
        title: "Depression",
        description:
            "Major depressive disorder and mood-related symptoms impacting daily life.",
    },
    {
        title: "ADHD",
        description:
            "Adult ADHD assessment and treatment planning, including medication options when appropriate.",
    },
    {
        title: "Bipolar Disorder",
        description:
            "Long-term management focused on stability, function, and quality of life.",
    },
    {
        title: "PTSD & Trauma-Related Disorders",
        description:
            "Support for trauma-related symptoms with a careful, individualized approach.",
    },
    {
        title: "Sleep Disorders",
        description:
            "Assessment and treatment of insomnia and sleep-related mental health issues.",
    },
    {
        title: "Obsessive-Compulsive Disorder (OCD)",
        description:
            "Care for intrusive thoughts and compulsive behaviors affecting daily functioning.",
    },
    {
        title: "Stress & Burnout",
        description:
            "Treatment for chronic stress, work strain, and emotional exhaustion.",
    },
    {
        title: "Medication Side Effects",
        description:
            "If meds aren’t feeling right, we adjust thoughtfully and monitor closely.",
    },
];

export default function ConditionsGrid() {
    return (
        <section className="container py-5">
            <div className="d-flex justify-content-between align-items-end gap-3 mb-4">
                <div>
                    <h2 className="h1 mb-2">Common concerns</h2>
                    <p className="text-muted mb-0">
                        We personalize treatment based on your history, goals, and response over time.
                    </p>
                </div>
            </div>

            <div className="row g-4">
                {conditions.map((c) => (
                    <div key={c.title} className="col-md-6 col-lg-4">
                        <InfoCard title={c.title} description={c.description} />
                    </div>
                ))}
            </div>
        </section>
    );
}
