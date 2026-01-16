// components/ui/InfoCard.tsx
type InfoCardProps = {
    title: string;
    description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
    return (
        <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
            <h3 className="h5 fw-semibold mb-2">{title}</h3>
            <p className="text-muted mb-0">{description}</p>
        </div>
    );
}
