// components/sections/NewPatientSteps.tsx
import Link from "next/link";

const STEPS = [
    { title: "Request an appointment", body: "Send us a message or call. We’ll ask a few quick questions about what you’re looking for and your availability." },
    { title: "Verify coverage", body: "If you provide insurance details, we can help confirm eligibility and typical out-of-pocket expectations." },
    { title: "Complete intake forms", body: "We’ll send intake paperwork so your clinician can review your history and goals ahead of time." },
    { title: "First visit (evaluation)", body: "We’ll discuss symptoms, history, what’s worked before, and create a plan that fits your goals." },
    { title: "Follow-ups & adjustments", body: "Treatment is collaborative. We’ll monitor response over time and adjust as needed." },
];

export default function NewPatientSteps() {
    return (
        <section className="container py-5">
            <div className="np-steps wc-card p-4 p-lg-5">
                <div className="row g-4 align-items-start">
                    {/* Left: heading + CTAs */}
                    <div className="col-lg-4">
                        <div className="np-steps__eyebrow mb-2">How it works</div>
                        <h2 className="np-steps__title mb-2">What happens next</h2>
                        <p className="text-muted mb-4">
                            A simple, step-by-step process so you know exactly what to expect.
                        </p>

                        <div className="d-flex flex-wrap gap-2">
                            <Link className="btn btn-wc-primary" href="/contact">Get started</Link>
                            <Link className="btn btn-wc-outline" href="/services">View services</Link>
                        </div>

                        <div className="text-muted small mt-3">
                            Prefer phone? Call <span className="fw-semibold">(949) 659-9967</span>.
                        </div>
                    </div>

                    {/* Right: steps grid */}
                    <div className="col-lg-8">
                        <div className="row g-3">
                            {STEPS.map((s, i) => (
                                <div className="col-12 col-md-6" key={s.title}>
                                    <div className="np-step">
                                        <div className="np-step__num">{i + 1}</div>
                                        <div>
                                            <div className="np-step__title">{s.title}</div>
                                            <div className="np-step__body">{s.body}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="np-steps__foot text-muted small mt-3">
                            If this is an emergency, call 911 or go to your nearest ER.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
