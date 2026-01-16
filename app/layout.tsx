import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";

const headingFont = Fraunces({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
    title: "WholeCare Health",
    description: "Modern, compassionate psychiatric care for adults in Orange County.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
        <body>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
