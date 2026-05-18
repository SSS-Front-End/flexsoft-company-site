"use client";

export default function OverlayMenu({ isOpen }) {

    return (
        <div
            className={`
                fixed
                top-0
                left-1/2
                -translate-x-1/2

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

            <ul
                className={`
                    flex flex-col
                    items-center
                    gap-6

                    transition-all
                    duration-500

                    ${
                        isOpen
                            ? "opacity-100 translate-y-0 delay-300"
                            : "opacity-0 translate-y-10"
                    }
                `}
            >
                <li>
                    <a href="#" className="text-3xl text-white">
                        Продукты
                    </a>
                </li>

                <li>
                    <a href="#" className="text-3xl text-white">
                        Новости
                    </a>
                </li>

                <li>
                    <a href="#" className="text-3xl text-white">
                        Контакты
                    </a>
                </li>
            </ul>

        </div>
    );
}