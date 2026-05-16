import Container from "../ui/Container";
import { Inter } from 'next/font/google';
import '../../app/globals.css';
import Image from 'next/image'; 

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
});

export default function Header() {
    return (
        <header lang="ru" className={`fixed top-0 left-1/2 -translate-x-1/2 w-[90%] z-50 border-b 
        border-white/10 backdrop-blur-md ${inter.variable} font-sans 
        font-semibold rounded-b-[50px] bg-[linear-gradient(110.09deg,_#1E2269_0.51%,_#4379C0_100%)]
        `}>
            <Container className="h-[100px] flex items-center justify-between !max-w-full !px-[100px]">
                
                <div className="flex items-center max-w-[206.54px] h-[50px] cursor-pointer">
                    <a href="#">
                        <Image 
                            src="/FlexSoft-Logo.svg" 
                            alt="Логотип FlexSoft" 
                            width={150} 
                            height={40} 
                            priority
                            className="w-full h-full -object-contain"
                        />
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-4 text-[20px] -ml-[100px]">
                    <a href="#" className="p-[12px]">Продукты</a>
                    <a href="#" className="p-[12px]">Новости</a>
                    <a href="#" className="p-[12px]">Партнеры</a>
                    <a href="#" className="p-[12px]">Наша команда</a>
                    <a href="#" className="p-[12px]">Вакансии</a>
                    <a href="#" className="p-[12px]">Контакты</a>
                </nav>

                <div className="width-[40px] height-[40px] cursor-pointer">
                    <a href="#">
                        <img src="/Burger.svg" alt="Дополнительное меню" />
                    </a>
                </div>

            </Container>
        </header>
    )
}
