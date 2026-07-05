import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import LoadingScreen from "@/components/effects/LoadingScreen";
import BackToTop from "@/components/effects/BackToTop";
import CommandPalette from "@/components/layout/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahidshariff.dev"),
  title: {
    default: "Shaik Shahid Shariff — Flutter Developer & Software Engineer",
    template: "%s | Shaik Shahid Shariff",
  },
  description:
    "Flutter Developer & Mobile App Engineer specializing in cross-platform development, Firebase, and ML solutions. ServiceNow Certified. Based in Andhra Pradesh, India.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Software Engineer",
    "Firebase",
    "Dart",
    "Android Developer",
    "Cross-Platform",
    "India",
    "ServiceNow",
    "Machine Learning",
    "Shaik Shahid Shariff",
  ],
  authors: [{ name: "Shaik Shahid Shariff", url: "https://shahidshariff.dev" }],
  creator: "Shaik Shahid Shariff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahidshariff.dev",
    siteName: "Shaik Shahid Shariff Portfolio",
    title: "Shaik Shahid Shariff — Flutter Developer & Software Engineer",
    description:
      "Flutter Developer & Mobile App Engineer. Building elegant mobile experiences with Flutter, Firebase, and ML.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shaik Shahid Shariff Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Shahid Shariff — Flutter Developer",
    description: "Flutter Developer building elegant mobile experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shaik Shahid Shariff",
              url: "https://shahidshariff.dev",
              email: "shaikshahidshariff@gmail.com",
              jobTitle: "Flutter Developer",
              sameAs: [
                "https://github.com/Skshahidshariff",
                "https://www.linkedin.com/in/shaik-shahid-shariff-/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rajahmundry",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <CommandPalette />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
