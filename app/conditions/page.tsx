import ConditionsHero from "@/components/sections/ConditionsHero";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import WhenToReachOut from "@/components/sections/WhenToReachOut";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ConditionsPage() {
    return (
        <main>
            <ConditionsHero />
            <ConditionsGrid />
            <WhenToReachOut />
            <FAQ />
            <FinalCTA />
        </main>
    );
}
