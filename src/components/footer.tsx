import React from "react";
import Container from "./ui/container";
import { Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t mt-12">
      <Container className="flex py-6 justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code2 className="h-5 w-5" />
          <span className="font-semibold">SnippetShare</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
