// "use client";

// import { usePathname } from "next/navigation";

// const HIDE_LAYOUT_ROUTES = ["/athletes/registration", "/athlete/success"];

// export function useHideLayout(): boolean {
//   const pathname = usePathname();

//   return HIDE_LAYOUT_ROUTES.includes(pathname || "");
// }
"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const HIDE_LAYOUT_ROUTES = ["/athletes/registration", "/athlete/success"];

export function useHideLayout(): boolean {
  const pathname = usePathname();
  const locale = useLocale();

  // Remove locale prefix from pathname for comparison
  const pathnameWithoutLocale = pathname?.replace(`/${locale}`, "") || "";

  return HIDE_LAYOUT_ROUTES.includes(pathnameWithoutLocale);
}