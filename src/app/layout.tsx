import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tiki Logistics | Moving Business Forward",
  description:
    "Premium transportation and logistics solutions built for reliability, speed, and control. From local deliveries to long-distance freight, Tiki Logistics moves your cargo with precision, professionalism, and care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-offwhite">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
