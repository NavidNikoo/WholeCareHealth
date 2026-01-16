// components/sections/InsuranceLogos.tsx
// SHINE-inspired accepted insurance section (server-safe)

import React from "react";

const INSURANCES = [
    { name: "Aetna", src: "/images/insurance/aetna.png" },
    { name: "Anthem Blue Cross", src: "/images/insurance/anthem.png" },
    { name: "Blue Cross Blue Shield", src: "/images/insurance/bcbs.png" },
    { name: "CalOptima", src: "/images/insurance/caloptima.png" },
    { name: "Cigna", src: "/images/insurance/cigna.png" },
    { name: "UMR", src: "/images/insurance/umr.png" },
    { name: "Magellan", src: "/images/insurance/magellan.png" },
    { name: "Medicare", src: "/images/insurance/medicare.png" },
    { name: "United Healthcare", src: "/images/insurance/united.png" },
    { name: "Optum", src: "/images/insurance/optum.png" },
];

export default function InsuranceLogos() {
    return (
        <section className="py-5">
            <div className="container text-center">
                <h2 className="mb-3">Accepted Insurances</h2>
                <p className="text-secondary mb-4">
                    We work with many major insurance providers.
                </p>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 align-items-center justify-content-center">
                    {INSURANCES.map((i) => (
                        <div className="col d-flex justify-content-center" key={i.name}>
                            <img
                                src={i.src}
                                alt={i.name}
                                style={{
                                    maxHeight: 42,
                                    maxWidth: 140,
                                    opacity: 0.85,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
