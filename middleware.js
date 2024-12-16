import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // If URL ends with .form, rewrite it to the root path without the extension
  if (url.pathname.endsWith('.form')) {
    url.pathname = url.pathname.replace('.form', '');
    return NextResponse.rewrite(url);
  }

  // If URL ends with .html, rewrite it to the root path without the extension
  if (url.pathname.endsWith('.html')) {
    url.pathname = url.pathname.replace('.html', '');
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
