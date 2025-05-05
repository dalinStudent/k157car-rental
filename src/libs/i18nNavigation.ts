import { AppConfig } from '@/utils/AppConfig';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';


export const routing = defineRouting({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});
console.log('createNavigation', createNavigation)
export const { usePathname, useRouter } = createNavigation(routing);
