import Image from "next/image";

export default function SocialIcon() {
    return (
        <div className={`flex items-center justify-between max-w-[170px] w-full`}>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="./SocialIcon/InstagramIcon.svg" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="./SocialIcon/FaceBookIcon.svg" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="./SocialIcon/TelegramIcon.svg" alt="Telegram" />
            </a>
        </div>
    );
}