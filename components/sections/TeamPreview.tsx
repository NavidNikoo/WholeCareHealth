// components/sections/TeamPreview.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function TeamPreview() {
    const [open, setOpen] = useState(false);

    const bio = useMemo(
        () => ({
            name: "Farhad Nikoo",
            creds: "DNP, PMHNP-BC, FNP",
            role: "Psychiatric Nurse Practitioner • Adults 18+",
            paragraphs: [
                "Dr. Farhad Nikoo is dual board-certified as a Psychiatric, Mental Health, and Family Nurse Practitioner. He earned his Doctorate of Nursing Practice and a post-doctorate degree in Psychiatric and Mental Health from Brandman University, affiliated with Chapman University. Additionally, he graduated as a Family Nurse Practitioner from the University of Detroit Mercy.",
                "Dr. Nikoo has worked across emergency departments, intensive care units, family practices, psychiatric and mental health care, and addiction medicine. His experience spans both inpatient and outpatient settings, including addiction medicine, Crisis Stabilization Units, Intensive Outpatient Programs (IOP), and Partial Hospitalization Programs (PHP).",
                "He views psychiatric disorders as conditions of the central nervous system that require a strong understanding of neuroscience, neuropharmacology, genetics, and whole-person health. Assessments include review of medical and psychiatric history, genetic factors, and prior treatment outcomes.",
                "Dr. Nikoo supports thoughtful medication use alongside psychotherapy, emphasizing the lowest effective doses when medication is indicated. His commitment to comprehensive mental health care makes him a steady partner in patients’ paths to wellness.",
            ],
        }),
        []
    );

    // ESC to close
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // Prevent background scroll when modal open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <>
            <section
                className="wc-section"
                style={{
                    paddingTop: "clamp(36px, 4vw, 64px)",
                    paddingBottom: "clamp(36px, 4vw, 64px)",
                    minHeight: 440, // shorter band height
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage: "url('/images/team-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed", // parallax
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Top fade (blend from previous white section into the image band) */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 110,
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />

                {/* Bottom fade (blend image band back into next white section) */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 110,
                        background:
                            "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />

                {/* overlay for readability */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.74) 40%, rgba(255,255,255,0.86) 100%)",
                        zIndex: 1,
                    }}
                />

                <div className="wc-container" style={{ position: "relative", zIndex: 3 }}>
                    {/* Header */}
                    <div className="text-center mb-4">
                        <h2 className="mb-2">Meet Our Team</h2>
                        <p className="text-secondary mb-0">
                            Compassionate, evidence-based care led by an experienced psychiatric provider.
                        </p>
                    </div>

                    {/* Single provider card */}
                    <div className="d-flex justify-content-center">
                        <div
                            className="text-center"
                            style={{
                                width: "min(520px, 100%)",
                                borderRadius: 20,
                                border: "1px solid rgba(0,0,0,0.08)",
                                boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
                                padding: "30px 24px",
                                background: "#fff",
                            }}
                        >
                            {/* Portrait */}
                            <div
                                style={{
                                    width: 210,
                                    height: 210,
                                    margin: "0 auto 16px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    border: "6px solid rgba(0,0,0,0.05)",
                                    boxShadow: "0 12px 26px rgba(0,0,0,0.12)",
                                    background: "#f6f7f9",
                                }}
                            >
                                <Image
                                    src="/images/FarhadNikoo.jpg"
                                    alt="Farhad Nikoo, DNP, PMHNP-BC, FNP-BC"
                                    width={440}
                                    height={440}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    priority
                                />
                            </div>

                            <h3 className="h4 mb-1">{bio.name}</h3>
                            <div className="text-secondary mb-2">{bio.creds}</div>
                            <div className="small text-secondary mb-4">{bio.role}</div>

                            <div className="d-flex gap-2 justify-content-center flex-wrap">
                                <button
                                    type="button"
                                    className="btn btn-wc btn-wc-primary"
                                    onClick={() => setOpen(true)}
                                >
                                    Read Bio
                                </button>

                                <a href="/contact" className="btn btn-wc btn-wc-outline">
                                    Request appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Provider bio"
                    onMouseDown={(e) => {
                        // click outside closes
                        if (e.target === e.currentTarget) setOpen(false);
                    }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        padding: "clamp(16px, 3vw, 28px)",
                        background: "rgba(15, 23, 42, 0.35)",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "min(860px, 100%)",
                            maxHeight: "min(82vh, 780px)",
                            overflow: "auto",
                            borderRadius: 22,
                            background: "#fff",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
                            border: "1px solid rgba(0,0,0,0.08)",
                        }}
                    >
                        {/* header */}
                        <div
                            style={{
                                display: "flex",
                                gap: 16,
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "18px 18px 0 18px",
                            }}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    style={{
                                        width: 54,
                                        height: 54,
                                        borderRadius: 14,
                                        overflow: "hidden",
                                        border: "1px solid rgba(0,0,0,0.08)",
                                        background: "#f6f7f9",
                                        flex: "0 0 auto",
                                    }}
                                >
                                    <Image
                                        src="/images/FarhadNikoo.jpg"
                                        alt="Farhad Nikoo headshot"
                                        width={108}
                                        height={108}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>

                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.1 }}>
                                        {bio.name}
                                    </div>
                                    <div className="text-secondary small">{bio.creds}</div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="btn btn-sm btn-wc btn-wc-outline"
                                onClick={() => setOpen(false)}
                            >
                                Close
                            </button>
                        </div>

                        {/* body */}
                        <div style={{ padding: "14px 22px 22px 22px" }}>
                            <div
                                style={{
                                    height: 1,
                                    background: "rgba(0,0,0,0.08)",
                                    margin: "12px 0 16px",
                                }}
                            />

                            <div style={{ fontWeight: 800, marginBottom: 10 }}>
                                About Dr. Farhad Nikoo
                            </div>

                            <div className="text-secondary" style={{ lineHeight: 1.7 }}>
                                {bio.paragraphs.map((p) => (
                                    <p key={p} style={{ marginBottom: 12 }}>
                                        {p}
                                    </p>
                                ))}
                            </div>

                            <div
                                className="d-flex gap-2 flex-wrap"
                                style={{ marginTop: 14 }}
                            >
                                <a className="btn btn-wc btn-wc-primary" href="/contact">
                                    Send a message
                                </a>
                                <a className="btn btn-wc btn-wc-outline" href="/insurance-fees">
                                    Insurance & fees
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
