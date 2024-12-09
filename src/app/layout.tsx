import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Properties from "./components/Properties"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import PropertyManagement from "./components/PropertyManagement"

const font = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "NextJS Real Estate",
  description: "Real estate website built using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <Hero />
        <Properties />
        <Reviews />
        <PropertyManagement />
        <Footer />
      </body>
    </html>
  );
}
