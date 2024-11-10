import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/app/components/Navbar";


const Montserrat_init = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','400','700','900'],
  variable: "--font-montserrat"
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Assignment 2",
  description: "Build a Pixel-Perfect Page Using Next.js, Tailwind CSS ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Montserrat_init.variable} antialiased`}
      >
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
