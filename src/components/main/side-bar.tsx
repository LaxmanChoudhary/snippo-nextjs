"use client";
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import SearchBar from "./search-bar";
import Link from "next/link";
import {
  BookIcon,
  LockIcon,
  PlusIcon,
  ScanEyeIcon,
  TrashIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SideBar = ({ className }: { className?: string }) => {
  const user = useUser();
  const pathname = usePathname();

  return (
    <aside className={cn("fixed flex flex-col h-screen text-sm", className)}>
      <div className="flex flex-col m-0 mr-2 lg:m-2 xl:m-4 border shadow-sm h-full rounded justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center w-full h-12 bg-slate-200 justify-between px-4">
            <p className="hidden sm:block font-bold tracking-tighter text-sm sm:text-md">
              Snippo{` </>`}
            </p>
            <p className="block sm:hidden font-bold tracking-tighter text-sm sm:text-md">{`</>`}</p>
          </div>
          <SearchBar className="mx-2" />
          <ul className="px-2 space-y-1 font-medium test-sm">
            {[
              {
                linkPath: "/browse",
                title: "Browse",
                icon: <ScanEyeIcon className="h-4 w-4" />,
                signInRequired: false,
              },
              {
                linkPath: "/add",
                title: "Add",
                icon: <PlusIcon className="h-4 w-4" />,
                signInRequired: true,
              },
              {
                linkPath: "/collection",
                title: "Collection",
                icon: <BookIcon className="h-4 w-4" />,
                signInRequired: true,
              },
              {
                linkPath: "/trash",
                title: "Trash",
                icon: <TrashIcon className="h-4 w-4" />,
                signInRequired: true,
              },
            ].map((pth, idx) => (
              <Button
                asChild
                key={idx}
                variant={"ghost"}
                size={"sm"}
                className={cn(
                  "w-full justify-center sm:justify-start text-muted-foreground",
                  pathname === pth.linkPath ? "text-slate-950" : null
                )}
                title={pth.title}
              >
                {pth.signInRequired && !user.user ? (
                  <div className="inline-flex sm:gap-2">
                    {pth.icon && pth.icon}
                    <p className="hidden sm:block">{pth.title}</p>
                    <div className="flex items-center gap-1">
                      <LockIcon className="h-2 w-2 sm:h-3 sm:w-3" /><p className="hidden md:block text-xs font-normal">sign-in</p>
                    </div>
                  </div>
                ) : (
                  <Link href={pth.linkPath} className="inline-flex gap-2">
                    {pth.icon && pth.icon}
                    <p className="hidden sm:block">{pth.title}</p>
                  </Link>
                )}
              </Button>
            ))}
          </ul>
        </div>
        <div className="h-10 flex items-center justify-center sm:justify-end px-2">
          <SignedOut>
            <SignInButton>
              <Button size={"sm"} className="text-xs" variant={"link"}>
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-6 w-6",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
