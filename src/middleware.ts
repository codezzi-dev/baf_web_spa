// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Only match paths that need locale handling
  matcher: [
    // Match root
    "/",
    // Match locale paths, but not api, _next, or files with extensions
    "/(en|bn)/:path*",
    // Match paths without locale (to add locale)
    "/((?!api|_next|_vercel|.*\\..*).*)"
  ],
};