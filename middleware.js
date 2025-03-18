import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = !!token;
  
  // Define your protected routes
  const isProtectedRoute = null;
//   const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') || 
//                           req.nextUrl.pathname.startsWith('/profile');
                          
  // Redirect unauthenticated users to login page
  if (isProtectedRoute && !isAuthenticated) {
    const url = new URL('/login', req.url);
    url.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  // Check for role-based access (optional)
//   if (req.nextUrl.pathname.startsWith('/admin') && token?.role !== 'admin') {
//     return NextResponse.redirect(new URL('/unauthorized', req.url));
//   }
  
  return NextResponse.next();
}

// Configuration for which routes to run middleware on
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/admin/:path*'],
};
