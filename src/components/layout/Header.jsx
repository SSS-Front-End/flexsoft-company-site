import Container from "../ui/Container"

export default function Header() {
    return (
        <header className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-md`}>
            <Container className="h-[80px] flex items-center justify-between">
                <div className="text-2xl font-bold">
                    FlexSoft
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#">Services</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </nav>

                <button className="px-5 py-3 rounded-full bg-white text-black font-medium">
                    Contact us
                </button>

            </Container>
        </header>
    )
}