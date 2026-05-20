import { createNavigation } from 'next-intl/navigation';

// Настраиваем утилиты навигации для наших языков
export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: ['ru', 'en', 'uz']
});