import React from "react";
import Container from "./ui/container";
import { Code2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="border-b">
      <Container className="flex py-4 items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">SnippetShare</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Button variant={"link"} asChild>
              <Link href={"/dashboard"}>Dashboard</Link>
            </Button>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button asChild variant="outline">
              <Link href={"/sign-in"}>Log in</Link>
            </Button>
            <Button asChild>
              <Link href={"/sign-up"}>Sign up</Link>
            </Button>
          </SignedOut>
        </div>
      </Container>
    </header>
  );
}

export default Header;
