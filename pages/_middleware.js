import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // allow the request if the following is true
  // 1) its a request for next-auth session and provider fetching
  // 2) if token exists
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  // redirect them to login if they don't have token and are requesting protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}