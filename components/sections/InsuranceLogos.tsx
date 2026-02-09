// components/sections/InsuranceLogos.tsx
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

type InsuranceLogosProps = {
    hideHeading?: boolean;
    compact?: boolean;
    align?: "start" | "center";
};

export default function InsuranceLogos({
                                           hideHeading = false,
                                           compact = false,
                                           align = "center",
                                       }: InsuranceLogosProps) {
    const textAlign = align === "start" ? "text-start" : "text-center";
    const justify =
        align === "start" ? "justify-content-start" : "justify-content-center";

    // Tuned so wide logos (UHC/Optum/Medicare) never collide
    const tileMin = compact ? 140 : 160; // min width of each logo tile
    const tileMax = compact ? 180 : 210; // max width of each logo tile
    const logoMaxH = compact ? 40 : 46;

    return (
        <section className={compact ? "" : "py-5"}>
            {!hideHeading && (
                <div className={`container ${textAlign}`}>
                    <h2 className="mb-3">Accepted Insurances</h2>
                    <p className="text-secondary mb-4">
                        We work with many major insurance providers.
                    </p>
                </div>
            )}

            <div className={hideHeading ? "" : "container"}>
                <div
                    className={[
                        "d-flex",
                        "flex-wrap",
                        justify,
                        compact ? "gap-4" : "gap-5",
                        "align-items-center",
                    ].join(" ")}
                >
                    {INSURANCES.map((i) => (
                        <div
                            key={i.name}
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                minWidth: tileMin,
                                maxWidth: tileMax,
                                flex: `1 1 ${tileMin}px`,
                            }}
                        >
                            <img
                                src={i.src}
                                alt={i.name}
                                loading="lazy"
                                className="img-fluid"
                                style={{
                                    maxHeight: logoMaxH,
                                    width: "auto",
                                    maxWidth: "100%",
                                    opacity: 0.9,
                                    display: "block",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
