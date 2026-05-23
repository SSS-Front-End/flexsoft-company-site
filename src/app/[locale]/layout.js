import "./globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "FlexSoft",
    description: "FlexSoft company site",
};

export const dynamic = "force-static";

export function generateStaticParams() {
    return [
        { locale: "ru" },
        { locale: "en" },
        { locale: "uz" },
    ];
}

export default async function LocaleLayout({
    children,
    params
}) {

    const { locale } = await params;

    const messagesMap = {
    ru: (await import("../../../messages/ru.json")).default,
    en: (await import("../../../messages/en.json")).default,
    uz: (await import("../../../messages/uz.json")).default,
};

const messages = messagesMap[locale];

    return (
        <html
            lang={locale}
            className={`${inter.className} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                >
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}