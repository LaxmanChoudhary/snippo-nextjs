import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarRail,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Code2, LayoutDashboard, PlusCircle, Settings, Trash2, User } from "lucide-react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function RootSlideBar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg" className="w-full justify-start">
                  <Link href={"/dashboard"}>
                    <Code2 className="mr-2 h-5 w-5" />
                    <span className="font-semibold">SnippetShare</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="flex flex-col justify-between">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/trash">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Trash
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset className="w-full">
          <header className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center">
              <SidebarTrigger className="mr-4" />
              <Button variant={"link"} asChild>
                <Link href={"/search"}>Explore</Link>
              </Button>
              {/* <Input type="search" placeholder="Search snippets..." className="w-[300px]" /> */}
            </div>
            <SignedIn>
              <div className="flex justify-center items-center gap-4">
                <Button variant={"outline"} title="add snippet" asChild>
                  <Link href={"/add"}>
                    <PlusCircle /> Add
                  </Link>
                </Button>
                <UserButton />
              </div>
            </SignedIn>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
