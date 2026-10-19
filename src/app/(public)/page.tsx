import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { ProblemStrip } from "@/components/landing/ProblemStrip";

export default function LandingPage() {
  return (
    <>
      <Hero/>
      <ProblemStrip/>
      <Features/>
    </>
  );
}
