export default function WhenToReachOut() {
    return (
        <section className="container pb-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-7">
                    <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm h-100">
                        <h2 className="h3 mb-3">When to reach out</h2>
                        <p className="text-muted mb-4">
                            If symptoms are affecting your work, relationships, sleep, or daily functioning,
                            it may be a good time to talk with a provider.
                        </p>

                        <ul className="text-muted mb-0">
                            <li>Symptoms lasting 2+ weeks</li>
                            <li>Trouble focusing, sleeping, or managing stress</li>
                            <li>Panic, intrusive thoughts, or persistent low mood</li>
                            <li>Medication questions or side effects</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h4 mb-2">Not sure what you need?</h3>
                        <p className="text-muted mb-4">
                            Start with an evaluation and we’ll recommend the next best step.
                        </p>
                        <a className="btn btn-primary w-100" href="/new-patients">
                            Request Appointment
                        </a>
                        <a className="btn btn-outline-secondary w-100 mt-2" href="/contact">
                            Ask a question
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
