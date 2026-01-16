import Link from "next/link";

type Props = {
    title: string;
    subtitle: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
};

export default function CTASection({
                                       title,
                                       subtitle,
                                       primaryHref,
                                       primaryLabel,
                                       secondaryHref,
                                       secondaryLabel,
                                   }: Props) {
    return (
        <section className="py-5">
            <div className="wc-container">
                <div
                    className="wc-card p-4 p-md-5"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(43,182,115,0.10), rgba(255,255,255,1))",
                    }}
                >
                    <div className="row align-items-center g-4">
                        <div className="col-lg-8">
                            <h2 className="mb-2" style={{ fontSize: 34, lineHeight: 1.15 }}>
                                {title}
                            </h2>
                            <p className="mb-0 prose">{subtitle}</p>
                        </div>
                        <div className="col-lg-4 d-flex gap-2 justify-content-lg-end">
                            <Link className="btn btn-wc-primary" href={primaryHref}>
                                {primaryLabel}
                            </Link>
                            {secondaryHref && secondaryLabel && (
                                <Link className="btn btn-wc-outline" href={secondaryHref}>
                                    {secondaryLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
