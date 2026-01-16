import Link from "next/link";

export default function OurApproach() {
    return (
        <section className="mt-16 md:mt-24 py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-4 text-sm font-semibold tracking-wide text-emerald-800/90">

                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        How We Care for You
                    </h2>

                    <div className="mx-auto mt-6 h-px w-16 bg-slate-200" />

                    <div className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600">
                        <p>
                            We provide thoughtful, evidence-based psychiatric care tailored to your unique needs. Visits are collaborative and unhurried, with a focus on listening, understanding your goals, and building a plan that fits your life.
                        </p>

                        <p className="mt-6">
                            Our approach emphasizes clarity, trust, and long-term support so you feel confident at
                            every step of your care.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-900 transition"
                        >
                            Learn more
                            <span className="text-base">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
