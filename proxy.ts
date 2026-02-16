import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect non-www to www with 301 (single hop)
  if (host === 'getfigured.co' || host.startsWith('getfigured.co:')) {
    const { pathname, search } = request.nextUrl
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
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
