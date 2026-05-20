"use client";

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '../../../../i18n/navigation';

export default function LanguageButton() {

    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: "ru", name: "Русский", flag: "/LanguageButton/LanguageButtonRu.svg" },
        { code: "en", name: "English", flag: "/LanguageButton/LanguageButtonUSA.svg" },
        { code: "uz", name: "O'zbek", flag: "/LanguageButton/LanguageButtonUz.svg" }
    ];

    const switchLanguage = (locale) => {
        router.replace(pathname, { locale });
    }


 return(
            <>
                {languages.map((lang) => {

                    const isActive = currentLocale === lang.code;

                    return (
                        <div key={lang.code}
                        className={`relative h-[30px] bg-[#FFFFFF80] rounded-[15px] flex items-center
                        ${  isActive ? "bg-[#FFFFFF80]" : "bg=[#FFFFFF1A]" }`}
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
                        
            </>
        );
}