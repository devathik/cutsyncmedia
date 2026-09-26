import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CutSync Media — Premium Video Editing & Motion Graphics Agency",
  description:
    "CutSync Media transforms raw footage into captivating, retention-engineered videos for YouTube, TikTok, IG Reels, and high-converting commercial ads. Book a free consultation today.",
  keywords: [
    "Video Editing Agency",
    "YouTube Video Editor",
    "TikTok Reels Editor",
    "Motion Graphics Studio",
    "Commercial Video Ads",
    "DaVinci Resolve Color Grading",
    "Post-Production Agency",
  ],
  authors: [{ name: "CutSync Media" }],
  openGraph: {
    title: "CutSync Media — We Cut. You Shine.",
    description:
      "High-retention video post-production for creators, e-commerce brands, and global agencies.",
    url: "https://cutsyncmedia.com",
    siteName: "CutSync Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CutSync Media — Video Editing Agency",
    description: "We Cut. You Shine. Premium post-production for creators & brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#090D28] text-[#F5F5FA] antialiased selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
