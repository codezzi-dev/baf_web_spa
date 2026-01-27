"use client";

import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";
import ToastProvider from "../ui/ToastProvider";
import Header from "./Header";
import Footer from "./Footer";
import { useHideLayout } from "@/hooks/hideHeaderAndFooter";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const hideLayout = useHideLayout();
  const t = useTranslations("common");
  return (
    <>
      <ToastProvider />

      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
