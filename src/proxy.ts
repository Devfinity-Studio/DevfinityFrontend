import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js 16 Proxy Network Boundary (replacing deprecated middleware convention)
 * Handles request interception, response headers, and route filtering.
 * Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicons (favicon files)
     * - Static image files (.png, .jpg, .ico, etc.)
     */
    "/((?!_next/static|_next/image|favicons|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
