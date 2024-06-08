import { Sofia_Sans_Semi_Condensed } from "next/font/google";
import { Noto_Sans_Display } from "next/font/google";

import "./globals.css";
import Nav from "./Nav";

const inter = Sofia_Sans_Semi_Condensed({ subsets: ["latin"] });
// const inter = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

