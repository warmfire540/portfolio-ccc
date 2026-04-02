import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "@/app/_lib/fontawesome-config";
import "./globals.css";
import ThemeVariantProvider from "./_components/providers/ThemeVariantProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curious Cat Consulting — Curiously Better Software",
  description:
    "Software architecture, full-stack development, and cloud consulting for teams that refuse to settle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeVariantProvider>{children}</ThemeVariantProvider>
      </body>
    </html>
  );
}
