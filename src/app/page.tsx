import { Hero } from "@/components/Hero";
import { ProblemPromise } from "@/components/ProblemPromise";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PPFFocus } from "@/components/PPFFocus";
import { CoveringFocus } from "@/components/CoveringFocus";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { PhotoCTA } from "@/components/PhotoCTA";
import { FAQ } from "@/components/FAQ";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { HOME_FAQ } from "@/content/faq";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";
import { extractText } from "@/lib/extract-text";

export default function HomePage() {
  // Plain-text FAQ for schema.org (strip JSX answers).
  const faqPlain = HOME_FAQ.map((it) => ({ q: it.q, aPlain: extractText(it.a) }));

  return (
    <>
      <Hero />
      <ProblemPromise />
      <ServicesGrid />
      <PPFFocus />
      <CoveringFocus />
      <ProcessSection />
      <WhyChooseUs />
      <Gallery />
      <PhotoCTA />
      <FAQ items={HOME_FAQ} />
      <Reviews />
      <FinalCTA />

      <FaqJsonLd items={faqPlain} />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: siteConfig.domain + "/" }]}
      />
    </>
  );
}

