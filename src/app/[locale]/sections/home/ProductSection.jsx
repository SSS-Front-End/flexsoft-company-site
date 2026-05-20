import Container from "@/app/[locale]/components/ui/Container";
import Button from "@/app/[locale]/components/ui/Button";
import Image from 'next/image'; 


export default function ProductSection() {
  return (
    <section className="relative pt-[160px] pb-[140px] overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <Image src="/Ellipse-grey-500px.svg"  width={500} height={500} priority alt="Ellipse-grey" />
      </div>

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#5B67FF]/20 blur-[140px]" />

      <Container>

        <div className="max-w-[900px] mx-auto text-center">

          <p className="text-[#A1A1AA] mb-6 uppercase tracking-[3px] text-sm">
            Modern software solutions
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
            We build scalable{" "}
            <span className="bg-gradient-to-r from-[#5B67FF] to-[#8B5CF6] bg-clip-text text-transparent">
              digital products
            </span>
          </h1>

          <p className="text-[#A1A1AA] text-lg md:text-xl mb-10 max-w-[700px] mx-auto leading-relaxed">
            Design. Development. Strategy.
            Premium digital experiences for modern businesses.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">

            <Button>
              Start Project
            </Button>

            <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300">
              Our Services
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
}