import { div, p } from "framer-motion/m";

export default function SectionTitle({
    title,
    subtitle,
    centered = false,
}) {
    return(
        <div className={centered ? "text-center" : ""}>
            {subtitle && (
                <p className="text-[#A1A1AA] uppercase tracking-[3px] mb-4 text-sm">
                    {subtitle}
                </p>
            )}

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {title}
            </h2>
        </div>
    );
}