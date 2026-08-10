import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: "KKN 116 Tamangapa - Universitas Hasanuddin",
  description: "Program KKN Tematik 116 Universitas Hasanuddin di Kelurahan Tamangapa. Panduan pengelolaan sampah berkelanjutan, Eco-enzyme, Ecobrick, dan Maggot BSF.",
  keywords: [
    "KKN 116", 
    "KKN 116 Tamangapa", 
    "KKN Universitas Hasanuddin", 
    "KKN Tematik 116", 
    "Pengelolaan Sampah Tamangapa", 
    "Eco-enzyme", 
    "Maggot BSF", 
    "Desa Bersih"
  ],
  authors: [{ name: "Tim KKN 116 Unhas" }],
  openGraph: {
    title: "KKN 116 Tamangapa - Universitas Hasanuddin",
    description: "Bersama Kelola Sampah, Bersama Jaga Iklim. Program KKN Tematik 116 di Kelurahan Tamangapa.",
    url: "https://kkn-16-tamangapa.vercel.app",
    siteName: "KKN 116 Tamangapa",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
  verification: {
    google: "xfqYyafko63mCkAjl886bpX7lavoF22dMpZ8uGeReYI",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Hanken+Grotesk:wght@400;600;700&family=Manrope:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
