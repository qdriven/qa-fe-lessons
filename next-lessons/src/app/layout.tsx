import type { Metadata } from "next";
import "./globals.css";
import {inter} from "@/app/ui/fonts";


export const metadata: Metadata = {
  title: "Next Lessons",
  description: "NextJS Demo Lessons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
