import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Electrical Infrastructure`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.variable}>
        <style>{`
          :root {
            --font: var(--font-source), "Segoe UI", system-ui, sans-serif;
            --display: var(--font-source), "Segoe UI", system-ui, sans-serif;
          }
        `}</style>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
