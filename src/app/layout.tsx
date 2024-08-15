import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import GlobalModal, { ModalProvider } from "@/providers/modal-provider";

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
            <div className="max-w-[1440px] mx-auto">{children}</div>
            <Toaster richColors theme="light" />
            <GlobalModal />
          </ModalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
