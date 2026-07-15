import { Hero } from "../components/Hero";
import { AIAutomation } from "../components/AIAutomation";
import { TrustedBy } from "../components/TrustedBy";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { EngineeringCycle } from "../components/EngineeringCycle";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <AIAutomation />
      <TrustedBy />
      <WhyChooseUs />
      <EngineeringCycle />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
