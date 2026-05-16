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
        <header className="
            fixed top-0 left-1/2 -translate-x-1/2 w-[100%] sm:w-[100%] md:w-[900%] lg:w-[90%] xl:w-[90%]
            2xl:w-[90%] z-50
            border-b border-white/10 backdrop-blur-md
            rounded-b-[25px] sm:rounded-b-[50px]
            bg-[linear-gradient(110.09deg,_#1E2269_0.51%,_#4379C0_100%)]
        ">
            <Container className="h-[60px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[100px] flex items-center justify-between !max-w-full !px-[30px] sm:!px-[40px] md:!px-[50px] xl:!px-[99.9px] lg:!px-[100px]">
                
                <div className="flex items-center max-w-[150px] h-[25px] sm:max-w-[200px] sm:h-[50px]">
                    <a href="#">
                        <Image 
                            src="/FlexSoft-Logo.svg" 
                            alt="Логотип FlexSoft" 
                            width={150} 
                            height={40}
                            priority
                            className="w-full h-auto object-contain"
                        />
                    </a>
                </div>

                <nav className="
                    hidden md:flex
                    items-center
                    gap-4
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    xl:text-[16px]
                    lg:text-[20px]
                ">
                    <a href="#" className="px-3 py-2 ">Продукты</a>
                    <a href="#" className="px-3 py-2 ">Новости</a>
                    <a href="#" className="px-3 py-2 ">Партнеры</a>
                    <a href="#" className="px-3 py-2 ">Наша команда</a>
                    <a href="#" className="px-3 py-2 ">Вакансии</a>
                    <a href="#" className="px-3 py-2 ">Контакты</a>
                </nav>

                <div className="w-[33px] h-[33px] sm:w-[40px] sm:h-[40px] cursor-pointer">
                    <img src="/Burger.svg" alt="Меню" />
                </div>

            </Container>
        </header>
    )
}
