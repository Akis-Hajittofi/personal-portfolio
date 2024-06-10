import { Sofia_Sans_Semi_Condensed } from "next/font/google";
import { Noto_Sans_Display } from "next/font/google";

import "./globals.css";
import Nav from "./Nav";
import SideNav from "./SideNav";

const inter = Sofia_Sans_Semi_Condensed({ subsets: ["latin"] });
// const inter = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Phanakis Hajittofi | Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col bg-base-100`}>
        <Nav />
        <div className="flex flex-row h-screen overflow-y-auto ml-16">
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}

