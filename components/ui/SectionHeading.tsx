type Props = {
    kicker?: string;
    title: string;
    subtitle?: string;
    align?: "start" | "center";
};

export default function SectionHeading({
                                           kicker,
                                           title,
                                           subtitle,
                                           align = "start",
                                       }: Props) {
    const textAlign = align === "center" ? "text-center" : "text-start";

    return (
        <div className={`${textAlign} mb-4`}>
            {kicker && (
                <div
                    className="mb-2"
                    style={{
                        color: "var(--primary)",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontSize: 12,
                    }}
                >
                    {kicker}
                </div>
            )}
            <h2 className="mb-2" style={{ fontSize: 36, lineHeight: 1.15 }}>
                {title}
            </h2>
            {subtitle && (
                <p className="mb-0 mx-auto" style={{ maxWidth: "68ch" }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
