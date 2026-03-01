import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect non-www to www with 301 (backup layer — primary redirect is at Vercel platform level)
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
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
