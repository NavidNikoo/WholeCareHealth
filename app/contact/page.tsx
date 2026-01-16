import ContactHero from "@/components/sections/ContactHero";
import ContactGrid from "@/components/sections/ContactGrid";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactGrid />
            <FAQ />
            <FinalCTA />
        </main>
    );
}
