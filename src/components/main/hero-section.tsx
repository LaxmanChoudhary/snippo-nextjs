import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "./logo";

const HeroSection = () => {
  return (
    <>
      <Logo />
      <p className="text-2xl font-semibold">
        Share Your Code, Inspire the Community
      </p>
      <p>
        Welcome to Snippo, the ultimate platform for sharing your code snippets
        with developers worldwide. Whether you{"'"}re solving a tricky problem,
        creating a handy utility, or showcasing your latest project, Snippo
        makes it easy to share your work and discover solutions from the
        community. Join us and become part of a vibrant network of developers
        who learn, grow, and inspire each other every day.
      </p>
      <p className="text-xl">Share. Discover. Collaborate.</p>
      <div className="space-x-4">
        <Button variant={"outline"}>
          <Link href={"/browse"}>Browse 🔍</Link>
        </Button>
        <Button variant={"default"}>
          <Link href={"/collection"}>Share 🫴🏻</Link>
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
