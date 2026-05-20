import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Убедитесь, что здесь перечислены все три ваши локали
  locales: ['ru', 'en', 'uz'],
  // Язык по умолчанию
  defaultLocale: 'ru'
});

export const config = {
  // Этот matcher строго игнорирует системные папки (_next, api) и любые файлы с точкой (картинки, svg)
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\..*).*)']
};
