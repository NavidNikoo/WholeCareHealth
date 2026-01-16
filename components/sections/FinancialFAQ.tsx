export default function FinancialFAQ() {
    return (
        <section className="container py-5">
            <div className="row g-4">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-semibold mb-2">Financial FAQs</h2>
                    <p className="text-muted mb-4">
                        Common questions about coverage, billing, and portal logistics.
                    </p>

                    <div className="accordion" id="financialFaq">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="f1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#fa1">
                                    How do I know what my visit will cost?
                                </button>
                            </h2>
                            <div id="fa1" className="accordion-collapse collapse show" data-bs-parent="#financialFaq">
                                <div className="accordion-body text-muted">
                                    Your cost depends on your plan (copay, deductible, coinsurance). We can verify benefits, but the final
                                    determination is made by your insurer.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="f2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fa2">
                                    Do you offer self-pay?
                                </button>
                            </h2>
                            <div id="fa2" className="accordion-collapse collapse" data-bs-parent="#financialFaq">
                                <div className="accordion-body text-muted">
                                    Yes. We can provide pricing information before scheduling so you can make an informed decision.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="f3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fa3">
                                    Can I use a patient portal from the website?
                                </button>
                            </h2>
                            <div id="fa3" className="accordion-collapse collapse" data-bs-parent="#financialFaq">
                                <div className="accordion-body text-muted">
                                    If your care team uses Practice Fusion, portal invitations are typically sent from inside the EHR.
                                    Our website can link you to the portal login and explain how to access it.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                        <h3 className="h5 fw-semibold">Need help?</h3>
                        <p className="text-muted">
                            Send us your insurance information and we’ll follow up with next steps.
                        </p>
                        <a className="btn btn-primary w-100" href="/contact">Contact</a>
                        <a className="btn btn-outline-secondary w-100 mt-2" href="/new-patients">New patients</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
