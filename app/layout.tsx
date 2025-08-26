import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ojaswi Gahoi | Full Stack Developer",
  description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, Java and Python.",
  metadataBase: new URL("https://ojaswigahoi.com"),
  
  // Basic metadata
  applicationName: "Ojaswi Gahoi Portfolio",
  authors: [{ name: "Ojaswi Gahoi" }],
  keywords: ["Full Stack Developer", "Web3", "Java", "Next.js", "React", "Machine Learning"],
  
  openGraph: {
    type: "website",
    url: "https://ojaswigahoi.com",
    title: "Ojaswi Gahoi | Full Stack Developer",
    description: "Full Stack Developer & Web Designing and Machine Learning Enthusiast with expertise in Next.js, React, Java and Python.",
    siteName: "Ojaswi Gahoi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ojaswi Gahoi - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://ojaswigahoi.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}