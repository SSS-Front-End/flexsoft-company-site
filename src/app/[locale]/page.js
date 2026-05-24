import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import ServicesSection from "./sections/home/ServicesSection";
import Image from "next/image"

export function generateStaticParams() {
  return [
    { locale: "ru" },
    { locale: "en" },
    { locale: "uz" },
  ];
};

export default function HomePageS() {
  return (
    <>
      <Header />

      <Main />
    </>
  );
};