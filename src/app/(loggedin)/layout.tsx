// import SideBar from "@/components/main/side-bar";
import RootSlideBar from "./root-slidebar";

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <RootSlideBar>
      {children}
    </RootSlideBar>
  );
}
