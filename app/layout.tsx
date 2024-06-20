import type { Metadata } from "next";
import { Rubik, Roboto_Slab } from "next/font/google";
import "./globals.css";
// Components
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

// Font
const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-rubik",
});
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-robotoSlab",
});

export const metadata: Metadata = {
    title: "Pokedex Api",
    description: "make it  a pokedex fetching data from the poke api",
};

// Providers wrap around our application and give them accesss to data.
// NextThemesProvider = Give our Application access to light / dark mode data.
// Provider are generally on the client side "use client"
// Switch from light mode to dark mode  <-- user interaction / need the client To exist

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoSlab.variable} ${rubik.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
