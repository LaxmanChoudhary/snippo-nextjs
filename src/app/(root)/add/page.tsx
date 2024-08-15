"use client";
import React from "react";
import SnippetForm from "@/components/snippet/snippet-form";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddSnippetPage = () => {
  const user = currentUser()

  if (!user) redirect("/sign-in")

  return <SnippetForm className="h-[500px]" />;
};

export default AddSnippetPage;
