import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelated Portfolio | Black & White",
  description: "A modern pixelated portfolio with ASCII art and animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="scanline animate-scan" />
        <div className="crt-effect min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
