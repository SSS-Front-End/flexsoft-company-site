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
                hover:bg-[#7480ff]
                text-white
                font-medium
                transition-all
                duration-300
                hover:scale-[1.02]
                active:sccale-[0.98]
                ${className}
                `}
            >
                {children}
            </button>
    )
}