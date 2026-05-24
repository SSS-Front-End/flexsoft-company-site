export default function Button({
    children,
    className = "",
    onClick,
    type = "button"
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                px-6
                py-3
                rounded-full
                bg-[#5B67FF]
                text-white
                font-medium
                transition-all
                duration-150
                hover:scale-[1.02]
                active:sccale-[0.98]
                ${className}
                `}
            >
                {children}
            </button>
    )
}