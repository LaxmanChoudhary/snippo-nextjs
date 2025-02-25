import React from "react";
import Container from "./ui/container";
import { Code2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import { AppTitle } from "@/lib/constants";

function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between h-24">
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold">{AppTitle}</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <SignedIn>
              <Button variant={"link"} asChild>
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              <Button variant={"link"} asChild>
                <SignOutButton />
              </Button>
            </SignedIn>
            <SignedOut>
              <Button asChild variant="link">
                <Link href={"/sign-in"}>Log in</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
