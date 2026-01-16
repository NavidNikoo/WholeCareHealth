import AboutHero from "@/components/sections/AboutHero";
import OurApproach from "@/components/sections/OurApproach";
import ValuesGrid from "@/components/sections/ValuesGrid";
import WhatToExpectAbout from "@/components/sections/WhatToExpectAbout";
import FinalCTA from "@/components/sections/FinalCTA";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <OurApproach />
            <ValuesGrid />
            <WhatToExpectAbout />
            <FinalCTA />
        </main>
    );
}
