"use client";

import Button from "@/components/ui/Button";

export default function OverlayMenu({ isOpen }) {

    return (
        <div
            className={`
                fixed
                top-0
                left-1/2
                -translate-x-1/2

                h-full
                sm:h-[468px]

                z-[49]

                bg-[linear-gradient(110.09deg,_#1E2269_0.51%,_#4379C0_100%)]

                backdrop-blur-md

                flex flex-col
                items-center
                justify-center
                overflow-hidden

                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                    isOpen
                        ? `
                            w-screen
                            h-screen
                            rounded-none
                            opacity-100
                        `
                        : `
                            w-[90%]
                            h-[100px]

                            rounded-b-[50px]

                            opacity-0
                            pointer-events-none
                        `
                }
            `}
        >

            
            <Button className={`bg-[#FE8206] w-[450px] h-[60px] rounded-[10px] my-10`}>
                Оставить заявку
            </Button>

           <div>
                <a href="#">+998 555 17-08-17 <span>(многоканальный)</span></a>
           </div>

        </div>
    );
}