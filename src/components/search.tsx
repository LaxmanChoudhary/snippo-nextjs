"use client";

import { ScanSearchIcon, SearchCode, SearchX } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, MouseEvent } from "react";
import { Button } from "./ui/button";

export default function Search({ showSearchBtn = false, showClearBtn = false }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQueryhandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.target as HTMLFormElement);
    const query = formdata.get("q");
    const newSearchParams = new URLSearchParams(searchParams.toString());
    query && newSearchParams.set("q", query.toString());

    const paramsString = newSearchParams.toString();
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

    const uri = `/search${queryString}`;

    router.push(uri);
  };

  const clearHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const uri = `/search`;
    router.push(uri);
  };

  return (
    <form onSubmit={searchQueryhandler} className="relative flex gap-2 w-full">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="eg. debounce hook in react"
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full max-w-[500px] border border-neutral-800 bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      {showSearchBtn && (
        <Button type="submit">
          <SearchCode /> Query
        </Button>
      )}
      {showClearBtn && (
        <Button variant={"secondary"} type="reset" onClick={clearHandler}>
          <SearchX /> Clear
        </Button>
      )}
    </form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <ScanSearchIcon className="h-4" />
      </div>
    </form>
  );
}
