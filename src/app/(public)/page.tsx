import { Faq } from "@/components/landing/Faq";
import { Features } from "@/components/landing/Features";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProblemStrip } from "@/components/landing/ProblemStrip";
import { Roles } from "@/components/landing/Roles";
import { Security } from "@/components/landing/Security";

export default function LandingPage() {
  return (
    <>
      <Hero/>
      <ProblemStrip/>
      <Features/>
      <HowItWorks/>
      <Roles/>
      <Security/>
      <Faq/>
      <FinalCta/>
    </>
  );
}
