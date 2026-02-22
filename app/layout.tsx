import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathmesh Honrao – Application Modernization & Strategic Tech Consulting",
  description:
    "Senior Consultant at Deloitte Germany. 10+ years leading mainframe modernization, cloud migration, and enterprise technology transformation across insurance, automotive, and banking.",
  keywords: [
    "mainframe modernization",
    "COBOL",
    "DB2",
    "cloud migration",
    "enterprise consulting",
    "Deloitte",
    "Prathmesh Honrao",
  ],
  openGraph: {
    title: "Prathmesh Honrao – Application Modernization",
    description:
      "Senior Consultant leading mainframe modernization and cloud transformation at Deloitte Germany.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-bg">{children}</body>
    </html>
  );
}
