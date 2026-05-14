import Header from "@/components/layout/Header";
import SectionTitle from "@/components/ui/SectionTitle";
import ServicesSection from "@/sections/home/ServicesSection";


export default function HomePageS() {
  return (
    <>
    <Header />

    <main className="pt-[120px]"> 
      <SectionTitle />
      <ServicesSection />
    </main>
    </>
  );
}
