import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const oxanium = Space_Grotesk({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Burt Software Solutions",
  description: "Professional software development and consulting services for modern businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
