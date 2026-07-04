import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khaled Abdalqader — Senior Product Designer",
  description:
    "Senior Product Designer specializing in Web, Mobile & SaaS Dashboards.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  openGraph: {
    title: "Khaled Abdalqader — Senior Product Designer",
    description:
      "Senior Product Designer specializing in Web, Mobile & SaaS Dashboards.",
    images: [
      {
        url: "/media/work/cards/design-system.png",
        width: 4864,
        height: 2824,
        alt: "Khaled Abdalqader portfolio work preview"
      }
    ],
    locale: "en_US",
    siteName: "Khaled Abdalqader Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaled Abdalqader — Senior Product Designer",
    description:
      "Senior Product Designer specializing in Web, Mobile & SaaS Dashboards.",
    images: ["/media/work/cards/design-system.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreFranklin.variable}>{children}</body>
    </html>
  );
}
