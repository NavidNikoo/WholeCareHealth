import PageHero from "@/components/sections/PageHero";
import OurApproach from "@/components/sections/OurApproach";
import OurServices from "@/components/sections/OurServices";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhatToExpect from "@/components/sections/WhatToExpect";
import InsuranceLogos from "@/components/sections/InsuranceLogos";
import LocationSection from "@/components/sections/LocationSection";
import TeamPreview from "@/components/sections/TeamPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
    return (
        <main>
            <PageHero
                title="Modern psychiatric care, grounded in evidence and empathy."
                subtitle="Thoughtful, personalized psychiatry for adults 18+, with telehealth and in-person appointments across Orange County."
                ctaLabel="Request an appointment"
                ctaHref="/contact"
                backgroundImage="/images/home-hero.jpg"
            />

            <OurApproach />
            <OurServices />
            <InsuranceLogos />
            <LocationSection />
            <TeamPreview />
            <FinalCTA />
        </main>
    );
}
