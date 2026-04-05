import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import '@/app/_lib/fontawesome-config';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import ThemeVariantProvider from './_components/providers/ThemeVariantProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Curious Cat Consulting — Curiously Better Software',
  description:
    'Software architecture, full-stack development, and cloud consulting for teams that refuse to settle.',
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="ccc-color-scheme"
        >
          <ThemeVariantProvider>{children}</ThemeVariantProvider>
        </ThemeProvider>
        <Script
          id="hs-script-loader"
          src="https://js-na2.hs-scripts.com/245596479.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
