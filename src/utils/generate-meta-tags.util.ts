import type { Locale } from '@/common/types/locale.type';
import { WebsiteUrl } from '@/configs';

interface Params {
  title: string;
  description: string;
  keywords: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
  image: {
    path: string;
    alt: string;
  };
  route: string;
  locale: Locale;
  siteName: string;
}

export const generateMetaTags = ({ title, description, keywords, image, route, locale, robots, siteName }: Params) => {
  return {
    title,
    description,
    keywords,
    robots,
    openGraph: {
      title,
      description,
      images: image ? [{ url: `${WebsiteUrl}${image.path}?v=2`, alt: image.alt }] : undefined,
      url: locale && locale !== 'en' ? `${WebsiteUrl}/${locale}${route}` : `${WebsiteUrl}${route}`,
      siteName,
      type: 'website',
    },
  };
};
