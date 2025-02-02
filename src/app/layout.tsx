import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import Providers from "./providers/ReactQueryProvider";

const lato = Lato({
  variable: "--font-lato",
  weight: ['300', '400'],
  display: "swap"
});


export const metadata: Metadata = {
  title: "Aidn Awesome UI Library",
  description: "Making healthcare great one commit at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
