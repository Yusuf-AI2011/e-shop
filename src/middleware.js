import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  const response = NextResponse.next();

  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
