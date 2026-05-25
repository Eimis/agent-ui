import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // This app does not use Server Actions; block exploit probes before Next handles them.
  if (request.headers.has('next-action')) {
    return new NextResponse(null, { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*'
}
