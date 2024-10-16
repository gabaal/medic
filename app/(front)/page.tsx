import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedSection />
      {/* <TabbedItems /> */}
    </section>
  );
}
