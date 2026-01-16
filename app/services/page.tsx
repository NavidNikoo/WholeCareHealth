import ServicesHero from "@/components/sections/ServicesHero";
import OurServices from "@/components/sections/OurServices"; // add this
import ConditionsWeTreat from "@/components/sections/ConditionsWeTreat";
import ServicesTestimonial from "@/components/sections/ServicesTestimonial";
import ReviewsCarousel3Up from "@/components/sections/ReviewsCarousel3Up";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <OurServices showViewAll={false} /> {/* reuse the home grid */}
            <ConditionsWeTreat />
            <ReviewsCarousel3Up />
            <FinalCTA />
        </>
    );
}
