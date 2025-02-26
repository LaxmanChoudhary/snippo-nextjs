import React from "react";
import Container from "./ui/container";
import { Code2, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import { AppTitle } from "@/lib/constants";

function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold">{AppTitle}</span>
            </div>
          </Link>
          <div className="flex items-center sm:gap-2">
            <SignedIn>
              <Button variant={"link"} size={"sm"} asChild>
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              <Button className="hidden sm:block" variant={"link"} size={"sm"} asChild>
                <SignOutButton redirectUrl="/" />
              </Button>
              <SignOutButton redirectUrl="/">
                <Button className="sm:hidden" variant={"link"} size={"sm"}><LogOutIcon /></Button>
              </SignOutButton>
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
