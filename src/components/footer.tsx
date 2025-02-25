import React from "react";
import Container from "./ui/container";

function Footer() {
  return (
    <footer className="border-t mt-8">
      <Container className="flex py-4 justify-between items-center">
        <p className="text-sm font-light">Snipeteer is a simple snippet storage and sharing app.</p>
      </Container>
    </footer>
  );
}

export default Footer;
