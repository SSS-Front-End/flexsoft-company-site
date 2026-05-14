import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

export default function HeroSection() {
    return (
        <section className="relative pt-[180px] pb-[140px] overflow-hidden">

            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#5B67FF]/20 blur-[140px]">

                <Container>

                    <div className="max-w-[900px] mx-auto text-center">

                        <p className="text-[">
                            Modern
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    )
}