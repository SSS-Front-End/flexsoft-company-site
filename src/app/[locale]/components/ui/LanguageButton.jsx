"use client";

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '../../../../i18n/navigation';

export default function LanguageButton() {

    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: "ru", name: "Рус", flag: "/LanguageButton/LanguageButtonRu.svg" },
        { code: "en", name: "Eng", flag: "/LanguageButton/LanguageButtonUSA.svg" },
        { code: "uz", name: "O'zb", flag: "/LanguageButton/LanguageButtonUz.svg" }
    ];

    const switchLanguage = (locale) => {
        router.replace(pathname, { locale });
    }


 return(
            <div className="flex gap-4 my-[24px]">
                {languages.map((lang) => {

                    const isActive = currentLocale === lang.code;

                    return (
                        <div key={lang.code}
                        className={`relative h-[30px] bg-[#FFFFFF80] rounded-[15px] flex items-center
                        cursor-pointer hover:bg-[#FFFFFF80] transition-colors duration-200
                        ${  isActive ? "bg-[#FFFFFF80]" : "bg-[#FFFFFF1A]" }`}
                        onClick={() => switchLanguage(lang.code)}
                        >

                            <div className={`absolute top-0 left-0`}>
                                    <img src={lang.flag} 
                                    alt={`${lang.name} flag`} 
                                    className="w-full h-full object-containt"/>
                            </div>

                            <p className={`px-[12px] ml-[30px]`}>{lang.name}</p>

                        </div>
                    )
                        
                })}
                        
            </div>
        );
}