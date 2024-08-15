import SideBar from "@/components/main/side-bar";

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar className="w-[70px] sm:w-[200px] xl:w-[250px]" />
      <main className="ml-[70px] sm:ml-[200px] xl:ml-[250px] p-2 xl:p-4 xl:pl-0 pl-0">{children}</main>
    </>
  );
}
