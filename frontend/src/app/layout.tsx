import type { Metadata } from "next";
import { Navbar } from "@components/navbar";
import { Geist, Geist_Mono, Epilogue } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const epunda = Epilogue({
//   subsets: ["latin"],
//   weight: ["300", "400", "600", "700"],
//   variable: "--font-epunda", // optional
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Council of Fashion Designers of America - Agents",
  description:
    "We are CFDA's Grants Agents, distribuints grants to local fashion designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
