export default function ServicesPreview() {
    return (
        <section className="wc-section bg-soft">
            <div className="wc-container text-center">
                <h2>Our Services</h2>
                <p>
                    Comprehensive psychiatric care designed to support your mental health
                    needs at every stage.
                </p>

                <div className="wc-grid-3 mt-4">
                    <div>
                        <h4>Anxiety & Panic</h4>
                        <p>Support for worry, fear, and panic using therapy and medication.</p>
                    </div>
                    <div>
                        <h4>Depression</h4>
                        <p>Personalized treatment for mood, motivation, and emotional balance.</p>
                    </div>
                    <div>
                        <h4>Bipolar Disorder</h4>
                        <p>Long-term stability through thoughtful medication management.</p>
                    </div>
                </div>

                <a href="/services" className="btn btn-wc-outline mt-4">
                    View all services
                </a>
            </div>
        </section>
    );
}
