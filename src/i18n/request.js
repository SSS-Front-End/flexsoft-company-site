import { getRequestConfig } from "next-intl/server";

const messages = {
    ru: () => import("../../messages/ru.json"),
    en: () => import("../../messages/en.json"),
    uz: () => import("../../messages/uz.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {

    const requested = await requestLocale;

    const locale = ["ru", "en", "uz"].includes(requested)
        ? requested
        : "ru";

    return {
        locale,
        messages: (await messages[locale]()).default
    };
});