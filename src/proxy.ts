// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from 'buffer';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/libs/i18nNavigation';
import { verifySession } from '@/libs/session';

const intlMiddleware = createMiddleware(routing);
const protectedRoutes = ['/'];

export async function proxy(request: NextRequest) {
	const path = request.nextUrl.pathname;
	if (path === '/sitemap.xml' || path === '/robots.txt') {
		return NextResponse.next();
	}

	const isProtectedRoute = protectedRoutes.some(route => path.includes(route));
	const session = await verifySession();
	if (isProtectedRoute && !session) {
		// return NextResponse.redirect(new URL('/getting-started', request.nextUrl));
	}

	const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
	const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;
	const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-nonce', nonce);
	requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
	response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

	return intlMiddleware(request);
}

export async function requireAuth() {
	const session = await verifySession();
	if (!session) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	return session;
}

export const config = {
	matcher: [
		'/',
		'/((?!api|_next|.*\\..*).*)',
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico|images|videos|fonts|svg).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
};
