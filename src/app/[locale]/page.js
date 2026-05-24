import Header from "./components/layout/Header";

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

      <main className="bg-[#F4F5F8]"></main>
    </>
  );
};