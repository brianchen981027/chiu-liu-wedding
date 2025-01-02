import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "@/Styles/globals.css";
import "@/Styles/header.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chiu and Liu Wedding",
  description:
    "Welcome！ Let’s celebrate the beginning of forever with Chiu and Liu！",
  icons: {
    icon: "/weddingIcon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
