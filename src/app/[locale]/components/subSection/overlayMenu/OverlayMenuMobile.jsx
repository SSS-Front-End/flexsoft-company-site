"use client"

import { useTranslations } from "next-intl";
import OverlayMenuLine from "./ui/OverlayMenuLine"
import Image from "next/image"
import LanguageButton from "../../ui/LanguageButton";
import { useLocale } from "next-intl"


export default function OverlayMenuMobile( { isOpen, onClose } ) {


    const currentLocale = useLocale();
    const navT = useTranslations("nav");

    const languages = [
        { code: "ru", name: "Рус", flag: "./LanguageButton/LanguageButtonRu.svg" },
        { code: "en", name: "Eng", flag: "./LanguageButton/LanguageButtonUSA.svg" },
        { code: "uz", name: "O'zb", flag: "./LanguageButton/LanguageButtonUz.svg" }
    ];



    return (

        <div className={`fixed top-0 right-0 bottom-0 w-full h-full bg-[linear-gradient(110.09deg,_#1E2269_0.51%,_#4379C0_100%)] z-100 px-[20px]
        shadow-2xl transition-all duration-500 ease-out transform
        ${ isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${ isOpen ? `opacity-100 clip-open`: `opacity-0 pointer-events-none clip-close`}
        `}>
            <nav>
                <div className="flex my-[40px] items-start justify-between ">
                    <div className={`w-[30px] h-[30px] object-fill`}
                         onClick={onClose}>
                        <img src="./OverlayMenu/OverlayMenuIcon/CloseBtnIcon.svg" alt="Close X" />
                    </div>

                    <div className="w-[206px] ml-[44px] text-end">
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-semibold block`}>{navT("products")}</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-semibold block`}>{navT("news")}</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-semibold block`}>{navT("partners")}</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-semibold block`}>{navT("team")}</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-semibold block`}>{navT("vacancies")}</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-semibold block`}>{navT("contacts")}</a>

                        <OverlayMenuLine />
                    </div>
                </div>
                <div className="flex my-[40px] items-start justify-between">
                    <div className={`w-[30px] h-[30px]`}
                         onClick={onClose}>
                        <img src="./OverlayMenu/OverlayMenuIcon/CallIcon.svg" alt="Call" />
                    </div>

                    <div className="w-[206px] ml-[44px] text-end">
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-normal block`}>+998 555 17-08-17</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-normal block`}>+998 90 137-67-84</a>
                        <a href="#" className={`mb-[16px] color-[#FFFFFF] font-normal block`}>+998 71 289-62-62</a>

                        <OverlayMenuLine />
                    </div>
                </div>
                <div className="flex my-[40px] items-start justify-between">
                    {languages.filter((lang) => lang.code === currentLocale)
                    .map((lang) => {
                        return (
                                    <div key={lang.code}>
                                        <img src={lang.flag} alt={`${lang.name} flag`} />
                                    </div>
                                );
                    })}

                    <div className="w-[206px] ml-[44px]">
                        
                        <LanguageButton className={`flex flex-col gap-4 mt-0 items-end`} />
                        

                        <OverlayMenuLine />
                    </div>
                </div>
                <div className="flex my-[40px] items-start ">
                    <div className={`w-[30px] h-[30px]`}>
                        <img src="./SocialIcon/InstagramIcon.svg" alt="Call" />
                        <img className={`my-[40px]`} src="./SocialIcon/FacebookIcon.svg" alt="Call" />
                        <img src="./SocialIcon/TelegramIcon.svg" alt="Call" />
                    </div>

                    <div className=" ml-[44px] pb-[15px] items-end min-h-[170px] h-full flex">
                        © 2003–2024, ООО «FlexSoft»
                    </div>
                </div>
            </nav>
        </div>
    );
}

