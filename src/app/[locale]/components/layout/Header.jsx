"use client";

import Container from "../ui/Container";
import { Inter } from 'next/font/google';
import '../../globals.css';
import Image from 'next/image'; 
import OverlayMenu from "../subSection/overlayMenu/overlayMenu.jsx"
import { useState } from 'react';
import { time } from "framer-motion";

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
});


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <header className={`
                fixed top-0  w-[100%] sm:w-[90%] left-1/2 -translate-x-1/2 z-50
                border-b border-none backdrop-blur-md
                rounded-b-[25px] sm:rounded-b-[50px]
                ${isOpen ? 'bg-none bg-transparent' : 'bg-[linear-gradient(110.09deg,_#1E2269_0.51%,_#4379C0_100%)]'}
                ${isOpen ? "after:absolute after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2c after:w-[90%] after:h-[2px] after:bg-[#FFFFFF80]" : ""} `}>
                <Container className="h-[60px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[100px] flex items-center justify-between !max-w-full !px-[30px] sm:!px-[40px] md:!px-[50px] xl:!px-[99.9px] lg:!px-[100px]">
                    
                    <div className="flex items-center max-w-[150px] h-[25px] sm:max-w-[200px] sm:h-[50px]">
                        <a href={`#`}>
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

                    <nav className={`
                        hidden md:flex
                        items-center
                        gap-4
                        text-[10px]
                        sm:text-[12px]
                        md:text-[14px]
                        xl:text-[16px]
                        lg:text-[20px]
                    `}>
                        <a href="#" className="px-3 py-2 hover:border-b-[2px] border-transparent hover:border-[#FE8206] transition-all duration-200">Продукты</a>
                        <a href="#" className="px-3 py-2 hover:border-b-[2px] border-transparent hover:border-[#FE8206] transition-all duration-200">Новости</a>
                        <a href="#" className="px-3 py-2 hover:border-b-[2px] border-transparent hover:border-[#FE8206] transition-all duration-200">Партнеры</a>
                        <a href="#" className="px-3 py-2 hover:border-b-[2px] border-transparent hover:border-[#FE8206] transition-all duration-200">Наша команда</a>
                        <a href="#" className="px-3 py-2 hover:border-b-[2px] border-transparent hover:border-[#FE8206] transition-all duration-200">Вакансии</a>
                        <a href="#" className="px-3 py-2 hover:border-b-[2px] border-transparent hover:border-[#FE8206] transition-all duration-200">Контакты</a>
                    </nav>

                    
                    {!isOpen && (
                        <div className={`w-[33px] h-[33px] sm:w-[40px] sm:h-[40px] cursor-pointer
                            transition-all duration-300 ease-in-out scale-70
                            ${isVisible ? 'opacity-100' : 'opacity-0'} `}
                        onClick={() => setIsOpen(true)}>

                        <img src="/Burger.svg" alt="Меню" />
                    </div>
                    )}
                    

                    {isOpen && (
                        <div
                            onClick={() => setIsOpen(false)}
                            className={` ${inter.className} w-[33px] h-[33px] sm:w-[40px] sm:h-[40px]
                            cursor-pointer text-[40px] flex items-center justify-center
                            font-light leading-none`}
                        > ×
                        </div>
                    )}

                </Container>

            </header>

            <OverlayMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
