import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import GlobalModal, { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";
import { AppTitle } from "@/lib/constants";
import Header from "@/components/header";
import Footer from "@/components/footer";

const fira = Fira_Sans({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${AppTitle} - the code sharing app`,
  description: "Share, discover code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fira.className}>
          <ModalProvider>
            {children}
            <Toaster richColors theme="light" />
            <GlobalModal />
          </ModalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
