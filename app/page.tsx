import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Philosophy />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}
