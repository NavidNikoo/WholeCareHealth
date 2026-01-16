"use client";

import React, { useEffect, useMemo, useState } from "react";

type Review = {
    quote: string;
    author: string;
    source?: string; // e.g. "Google Reviews"
    rating?: number; // 1-5
};

const DEFAULT_REVIEWS: Review[] = [
    {
        quote:
            "Dr. Nikoo takes the time to listen and genuinely cares. I always felt heard, respected, and supported.",
        author: "Patient of Dr. Nikoo",
        source: "Google Reviews",
        rating: 5,
    },
    {
        quote:
            "Excellent facility and staff. Dr. Nikoo truly cares about his patients’ well-being and it shows.",
        author: "Patient of Dr. Nikoo",
        source: "Google Reviews",
        rating: 5,
    },
    {
        quote:
            "After years of ineffective treatment, I finally felt understood and received care that worked. I’m grateful.",
        author: "Patient of Dr. Nikoo",
        source: "Google Reviews",
        rating: 5,
    },
    {
        quote:
            "He listens carefully, explains options clearly, and makes you feel supported at every step.",
        author: "Patient of Dr. Nikoo",
        source: "Google Reviews",
        rating: 5,
    },
    {
        quote:
            "Dr. Nikoo is an exceptional physician who truly cares about their patients. From the very first visit, I felt heard, respected, and genuinely supported. They take the time to listen carefully, explain everything clearly, and make sure you feel comfortable and confident about your treatment.",
        author: "Patient of Dr. Nikoo",
        source: "Google Reviews",
        rating: 5,
    },
    {
        quote:
            "Dr. Nikoo is a rare gem of a doctor. He is extremely patient, caring, knowledgeable, and has a genuinely warm demeanor. I would absolutely recommend him to anyone looking for thoughtful and compassionate care.",
        author: "Patient of Dr. Nikoo",
        source: "Google Reviews",
        rating: 5,
    },
];

function clampIndex(i: number, n: number) {
    return (i + n) % n;
}

function Stars({ rating = 5 }: { rating?: number }) {
    const r = Math.max(0, Math.min(5, rating));
    return (
        <div className="d-flex align-items-center gap-1" aria-label={`${r} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i < r ? "currentColor" : "none"}
                    style={{ color: i < r ? "rgba(245, 158, 11, .95)" : "rgba(0,0,0,.15)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M12 17.3 6.5 20.5l1.2-6.3-4.7-4.1 6.4-.8L12 3.5l2.6 5.8 6.4.8-4.7 4.1 1.2 6.3L12 17.3Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({
                        review,
                        variant,
                    }: {
    review: Review;
    variant: "center" | "side";
}) {
    const isCenter = variant === "center";

    return (
        <div
            className="rounded-4 border p-4 p-md-5 h-100"
            style={{
                background:
                    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)",
                borderColor: "rgba(0,0,0,0.08)",
                boxShadow: isCenter ? "0 14px 40px rgba(0,0,0,0.10)" : "0 8px 24px rgba(0,0,0,0.06)",
            }}
        >
            <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <div className="text-uppercase small fw-semibold text-secondary" style={{ letterSpacing: ".12em" }}>
                    Patient review
                </div>
                <span className="small text-secondary">{review.source ?? ""}</span>
            </div>

            <div className="mb-3">
                <Stars rating={review.rating ?? 5} />
            </div>

            <div
                style={{
                    fontSize: isCenter ? "clamp(1.05rem, 1.35vw, 1.45rem)" : "1rem",
                    lineHeight: 1.45,
                    color: "rgba(15, 23, 42, 0.95)",
                }}
            >
        <span aria-hidden="true" style={{ color: "rgba(0,0,0,0.25)", marginRight: 6 }}>
          “
        </span>
                {review.quote}
                <span aria-hidden="true" style={{ color: "rgba(0,0,0,0.25)", marginLeft: 4 }}>
          ”
        </span>
            </div>

            <div className="mt-3 small text-secondary">
                <span className="fw-semibold text-dark">{review.author}</span>
                {review.source ? <span> • {review.source}</span> : null}
            </div>
        </div>
    );
}

export default function ReviewsCarousel3Up({ reviews }: { reviews?: Review[] }) {
    const items = useMemo(() => (reviews?.length ? reviews : DEFAULT_REVIEWS), [reviews]);
    const n = items.length;

    const [active, setActive] = useState(0);

    // Desktop: 3 cards, Mobile: 1 card
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        const update = () => setIsDesktop(window.innerWidth >= 992);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Sliding state
    const [offset, setOffset] = useState<0 | 1 | -1>(0); // -1, 0, +1 (track movement direction)
    const [isAnimating, setIsAnimating] = useState(false);

    const DURATION_MS = 560;
    const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

    const go = (dir: -1 | 1) => {
        if (n <= 1) return;
        if (isAnimating) return;

        // IMPORTANT:
        // We want "next" (dir=+1) to slide LEFT so the right card moves into center.
        // That means the TRACK moves left by 1 step => offset = -dir.
        const trackDir = (-dir) as -1 | 1;

        setIsAnimating(true);
        setOffset(trackDir);

        window.setTimeout(() => {
            setActive((v) => clampIndex(v + dir, n)); // commit new active after slide completes
            setOffset(0); // snap back to base position with new window
            setIsAnimating(false);
        }, DURATION_MS);
    };

    const prev = () => go(-1);
    const next = () => go(1);

    // 5-card window around active: [prev2, prev1, active, next1, next2]
    const window5 = useMemo(() => {
        if (!n) return [];
        return [
            items[clampIndex(active - 2, n)],
            items[clampIndex(active - 1, n)],
            items[clampIndex(active, n)],
            items[clampIndex(active + 1, n)],
            items[clampIndex(active + 2, n)],
        ];
    }, [items, active, n]);

    // Visual layout config
    const gap = 18;

    const cardWidthDesktop = "calc((100% - 36px) / 3)"; // 3 visible cards (2 gaps)
    const cardWidthMobile = "100%";

    // Base shows [1,2,3] in desktop (centered), and [2] in mobile.
    const baseTranslateDesktop = `calc(-1 * (${cardWidthDesktop} + ${gap}px))`;
    const stepTranslateDesktop = `calc(${offset} * (${cardWidthDesktop} + ${gap}px))`;

    const baseTranslateMobile = `calc(-2 * (${cardWidthMobile} + ${gap}px))`;
    const stepTranslateMobile = `calc(${offset} * (${cardWidthMobile} + ${gap}px))`;

    const trackTransform = isDesktop
        ? `translateX(calc(${baseTranslateDesktop} + ${stepTranslateDesktop}))`
        : `translateX(calc(${baseTranslateMobile} + ${stepTranslateMobile}))`;

    const trackStyle: React.CSSProperties = {
        display: "flex",
        gap,
        transform: trackTransform,
        willChange: "transform",
        transition: isAnimating ? `transform ${DURATION_MS}ms ${EASING}` : "none",
        // perf
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
    };


    // Which offscreen card is ENTERING during the animation?
    // If track moves LEFT (offset = -1), the right-most extra (idx 4) enters.
    // If track moves RIGHT (offset = +1), the left-most extra (idx 0) enters.
    const enteringIdx = offset === -1 ? 4 : offset === 1 ? 0 : null;

    return (
        <section className="py-4" aria-label="Patient reviews">
            <div className="container">
                <div className="position-relative">
                    {/* VIEWPORT */}
                    <div
                        className="position-relative"
                        style={{
                            overflow: "hidden",
                            padding: "10px 0",
                        }}
                    >
                        {/* TRACK */}
                        <div style={trackStyle}>
                            {window5.map((r, idx) => {
                                const isCenter = idx === 2;
                                const isSide = idx === 1 || idx === 3;
                                const isOffscreen = idx === 0 || idx === 4;

                                // Desktop: always show 3 cards.
                                // During animation, also show the *entering* offscreen card so it slides in visibly.
                                const shouldShowDesktop =
                                    isCenter || isSide || (isAnimating && enteringIdx === idx);

                                // Mobile: show only center (and optionally entering for nicer slide, but you said focus is desktop)
                                const shouldShowMobile = isCenter;

                                const shouldShow = isDesktop ? shouldShowDesktop : shouldShowMobile;

                                // Opacity rules:
                                // - center: 1
                                // - side: 0.6
                                // - entering offscreen (during anim): 0.45 (so you see it coming in)
                                // - other offscreen: 0
                                let opacity = 0;
                                if (shouldShow) {
                                    if (isCenter) opacity = 1;
                                    else if (isSide) opacity = 0.6;
                                    else if (isOffscreen && isAnimating && enteringIdx === idx) opacity = 0.55;
                                    else opacity = 0; // safety
                                }

                                return (
                                    <div
                                        key={`${active}-${idx}`} // stable enough; keeps DOM consistent during anim
                                        style={{
                                            flex: "0 0 auto",
                                            width: isDesktop ? cardWidthDesktop : cardWidthMobile,

                                            // Make transform + opacity animate in sync with the track
                                            opacity,
                                            transform: `translate3d(0,0,0) ${isDesktop ? (isCenter ? "scale(1)" : "scale(0.965)") : "scale(1)"}`,
                                            willChange: "transform, opacity",
                                            backfaceVisibility: "hidden",

                                            // IMPORTANT: match duration + easing with track
                                            transition: isAnimating
                                                ? `opacity ${DURATION_MS}ms ${EASING}, transform ${DURATION_MS}ms ${EASING}`
                                                : "opacity 220ms ease",

                                            pointerEvents: shouldShow ? "auto" : "none",
                                        }}
                                    >
                                        <ReviewCard review={r} variant={isCenter ? "center" : "side"} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* ONE set of arrows */}
                        <button
                            type="button"
                            onClick={prev}
                            disabled={isAnimating}
                            aria-label="Previous review"
                            className="btn btn-light border position-absolute d-inline-flex align-items-center justify-content-center"
                            style={{
                                left: 0,
                                top: "50%",
                                transform: "translate(-20%, -50%)",
                                width: 40,
                                height: 40,
                                borderRadius: 999,
                                boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                                opacity: isAnimating ? 0.6 : 1,
                            }}
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            disabled={isAnimating}
                            aria-label="Next review"
                            className="btn btn-light border position-absolute d-inline-flex align-items-center justify-content-center"
                            style={{
                                right: 0,
                                top: "50%",
                                transform: "translate(20%, -50%)",
                                width: 40,
                                height: 40,
                                borderRadius: 999,
                                boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                                opacity: isAnimating ? 0.6 : 1,
                            }}
                        >
                            ›
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex gap-2">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="btn p-0"
                                    disabled={isAnimating}
                                    onClick={() => {
                                        if (isAnimating) return;
                                        setActive(i); // jump (no slide). If you want animated jump, tell me.
                                    }}
                                    aria-label={`Go to review ${i + 1}`}
                                    style={{
                                        width: i === active ? 20 : 10,
                                        height: 8,
                                        borderRadius: 999,
                                        border: 0,
                                        transition: "all 150ms ease",
                                        background: i === active ? "rgba(5,150,105,.9)" : "rgba(0,0,0,.12)",
                                        opacity: isAnimating ? 0.7 : 1,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="mt-2 mb-0 small text-secondary">
                        Reviews reflect patient experiences with Dr. Farhad Nikoo.
                    </p>
                </div>
            </div>
        </section>
    );
}
