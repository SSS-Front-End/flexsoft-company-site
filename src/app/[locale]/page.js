import Header from "./components/layout/Header";
import SectionTitle from "./components/ui/SectionTitle";
import ProductSection from "./sections/home/ProductSection";
import ServicesSection from "./sections/home/ServicesSection";
import { useTranslations } from "next-intl";


export default function HomePageS() {
  return (
    <>
    <Header />

    <main className="bg-[#F4F5F8]"> 
      {/* <ProductSection />
      <ServicesSection /> */}
    </main>
    </>
  );
}

