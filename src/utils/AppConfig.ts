import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
	name: 'Canadia Bank Website',
	locales: ['en', 'km', 'zh'],
	defaultLocale: 'en',
	localePrefix,
};
