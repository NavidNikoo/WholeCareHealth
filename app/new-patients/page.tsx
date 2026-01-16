import NewPatientsHero from "@/components/sections/NewPatientsHero";
import NewPatientSteps from "@/components/sections/NewPatientSteps";
import WhatToExpect from "@/components/sections/WhatToExpect";
import TelehealthInPerson from "@/components/sections/TelehealthInPerson";
import NewPatientsFAQ from "@/components/sections/NewPatientsFAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function NewPatientsPage() {
    return (
        <main>
            <NewPatientsHero />
            <NewPatientSteps />
            <WhatToExpect />
            <TelehealthInPerson />
            <NewPatientsFAQ />
            <FinalCTA />
        </main>
    );
}
