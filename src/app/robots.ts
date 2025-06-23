import type { MetadataRoute } from 'next';

import { WebsiteUrl } from '@/configs';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/',
      },
    ],
    sitemap: `${WebsiteUrl}/sitemap.xml`,
  };
}
