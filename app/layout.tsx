import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-ubuntu" });

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable} dark`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
