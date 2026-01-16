import InfoCard from "@/components/ui/InfoCard";

const services = [
    {
        title: "Psychiatric Evaluation",
        description:
            "Comprehensive assessments to understand your symptoms, history, and treatment goals.",
    },
    {
        title: "Medication Management",
        description:
            "Personalized medication plans with careful monitoring and follow-up.",
    },
    {
        title: "Anxiety Disorders",
        description:
            "Treatment for generalized anxiety, panic disorder, social anxiety, and related conditions.",
    },
    {
        title: "Depression",
        description:
            "Evidence-based care for major depressive disorder and mood-related concerns.",
    },
    {
        title: "ADHD",
        description:
            "Evaluation and treatment for adult ADHD, including medication options when appropriate.",
    },
    {
        title: "Bipolar Disorder",
        description:
            "Long-term management focused on mood stabilization and quality of life.",
    },
    {
        title: "PTSD & Trauma",
        description:
            "Care for trauma-related symptoms with a focus on safety and stabilization.",
    },
    {
        title: "Sleep Disorders",
        description:
            "Assessment and treatment of insomnia and sleep-related mental health issues.",
    },
];

export default function ServicesGrid() {
    return (
        <section className="container py-5">
            <div className="row g-4">
                {services.map((service) => (
                    <div key={service.title} className="col-md-6 col-lg-4">
                        <InfoCard
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
