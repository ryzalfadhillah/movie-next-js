//middleware.tsx
import { read } from '@store/cookies'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const cookies = await read("__TOKEN__")

    if(!cookies){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
    /*
       * Mencocokan semua request paths kecuali untuk salah satu dari:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - login
       */
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
    ],
}