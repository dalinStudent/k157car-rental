import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ['.'],
	},
	output: 'standalone',
	reactStrictMode: true,
	poweredByHeader: false,
};

export default bundleAnalyzer(withNextIntl(nextConfig));
