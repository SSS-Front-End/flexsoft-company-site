"use client";

import Button from "@/app/[locale]/components/ui/Button";
import LanguageButton from "@/app/[locale]/components/ui/LanguageButton";
import SocialIcon from "../../ui/SocialIcon";
import { useTranslations } from "next-intl";

export default function OverlayMenu({ isOpen }) {
    const t = useTranslations("Contacts")
    return (
        <div
            className={`
                fixed
                top-0
                left-1/2
                -translate-x-1/2

                w-screen
                h-screen 
                sm:h-[468px]

                z-[49]

                bg-[linear-gradient(110.09deg,_#1E2269_0.51%,_#4379C0_100%)]

                backdrop-blur-md

                flex
                flex-col
                items-center
                justify-center

                overflow-hidden

                transition-all
                duration-[300ms]
                ease-[cubic-bezier(0.83,0,0.17,1)]

                will-change-[clip-path]

                ${
                    isOpen
                        ? `
                            opacity-100
                            clip-open
                        `
                        : `
                            opacity-0
                            pointer-events-none
                            clip-close
                        `
                }
            `}
        >
            <Button className="bg-[#FE8206] w-[450px] h-[60px] rounded-[10px] md:mt-[90px]">
                Оставить заявку
            </Button>

            <div className="mt-[28px]">
                <a href="#">
                    +998 555 17-08-17{" "}
                    <span>{`(${t("channel")})`}</span>
                </a>
            </div>

            <LanguageButton />

            <SocialIcon />

            <p className="mt-[28px]">
                © 2003–2025, ООО «Flex Soft»
            </p>
        </div>
    );
}