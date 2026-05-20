import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Получаем текущий язык из запроса
  const locale = await requestLocale;

  return {
    locale,
    // Загружаем JSON-файлы переводов из папки messages в корне
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
