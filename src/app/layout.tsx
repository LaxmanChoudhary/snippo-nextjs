import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import GlobalModal, { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippo - the code sharing app",
  description: "Share. Discover.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
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
