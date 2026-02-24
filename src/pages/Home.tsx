import { Navigation } from "../app/components/Navigation";
import { Hero } from "../app/components/Hero";
import { CTA } from "../app/components/CTA";
import { Footer } from "../app/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <CTA />
      <Footer />
    </>
  );
}