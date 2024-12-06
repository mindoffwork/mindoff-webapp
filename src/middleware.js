import { NextResponse } from "next/server";

export async function middleware(request) {
  if (request.nextUrl.pathname.endsWith("/posts") || request.nextUrl.pathname.endsWith("/topics")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
