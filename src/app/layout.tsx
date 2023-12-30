import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/blog/Navbar";
import { Footer } from "@/components/blog/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-[#0c0b22] text-white`}
      >
        <main className="container lg:px-24 mx-auto relative flex flex-col justify-between items-center min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
