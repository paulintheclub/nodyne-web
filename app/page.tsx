import { ContactSection } from "@/components/landing/contact-section";
import { DataVisualization } from "@/components/landing/data-visualization";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductOverview } from "@/components/landing/product-overview";
import { TestResults } from "@/components/landing/test-results";
import { Testimonials } from "@/components/landing/testimonials";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductOverview />
      <HowItWorks />
      <DataVisualization />
      <TestResults />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
