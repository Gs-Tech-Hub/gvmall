import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { link } from "fs";
import Header from '../components/header/Header';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GV Mall",
  description: "Shop From The Comfort Of Your Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
