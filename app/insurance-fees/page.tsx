import InsuranceFeesHero from "@/components/sections/InsuranceFeesHero";
import AcceptedInsurance from "@/components/sections/AcceptedInsurance";
import FeesAndPayments from "@/components/sections/FeesAndPayments";
import Superbills from "@/components/sections/Superbills";
import FinancialFAQ from "@/components/sections/FinancialFAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function InsuranceFeesPage() {
    return (
        <main>
            <InsuranceFeesHero />
            <AcceptedInsurance />
            <FeesAndPayments />
            <Superbills />
            <FinancialFAQ />
            <FinalCTA />
        </main>
    );
}
