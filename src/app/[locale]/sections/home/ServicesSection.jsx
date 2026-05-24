import Container from "@/app/[locale]/components/ui/Container"
import SectionTitle from "@/app/[locale]/components/ui/SectionTitle"

const services = [
    {
        title: "Web Development",
        description: "Modern scalable web applications built with cutting-edge technologies."
    },
    {
        title: "UI/UX Design",
        description: "Beautiful interfaces focused on conversion and user experience."
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile applications for iOS and Android."
    }
];

export default function ServicesSection() {
    return (
        <section className="">
            <Container>

                <SectionTitle
                    subtitle={`Services`}
                    title={`Solutions for modern businesses`}
                    centered />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {services.map((services, index) => (
                        <div
                            key={index}
                            className={`
                                p-8
                                rounded-[32px]
                                bg-[#131A2A]
                                border border-white/5
                                hover:border-white/10
                                transition-all
                                duration-300
                            `}>
                            
                            <h3 className="text-2xl font-semibold mb-4">
                                {services.title}
                            </h3>

                            <p className="text=[#A1A1AA] leading-relaxed">
                                {services.description}
                            </p>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}