import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
