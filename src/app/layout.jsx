import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { link } from "fs";
import Header from '../components/header/Header';
import Navbar from "../components/NavBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stora",
  description: "Shop From The Comfort Of Your Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
