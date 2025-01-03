import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "@/Styles/globals.css";
import "@/Styles/header.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chiu & Liu Wedding",
  description:
    "誠摯邀請您前來參與邱羚與欣禹的婚禮，共同見證我們人生中最重要的時刻！您的光臨將使我們倍感榮幸，期待與您共享這份幸福與喜悅！",
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
