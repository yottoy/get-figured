import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const { pathname, search } = request.nextUrl

  // Redirect non-www to www (single hop)
  if (host === 'getfigured.co' || host.startsWith('getfigured.co:')) {
    return NextResponse.redirect(
      `https://www.getfigured.co${pathname}${search}`,
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
