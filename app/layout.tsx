import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simpius - Seu reino intelectual, finalmente em ordem",
  description: "Simpius é o framework ativo que transforma seu conhecimento em resultados. Uma nova era para o seu segundo cérebro está chegando.",
  keywords: "produtividade, conhecimento, organização, segundo cérebro, gestão pessoal",
  authors: [{ name: "Simpius Team" }],
  creator: "Simpius",
  publisher: "Simpius",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://simpius.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt',
      'en-US': '/en',
      'es-ES': '/es',
    },
  },
  openGraph: {
    title: "Simpius - Seu reino intelectual, finalmente em ordem",
    description: "Framework ativo que transforma seu conhecimento em resultados. Uma nova era para o seu segundo cérebro está chegando.",
    url: "https://simpius.com",
    siteName: "Simpius",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Simpius Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simpius - Seu reino intelectual, finalmente em ordem",
    description: "Framework ativo que transforma seu conhecimento em resultados. Uma nova era para o seu segundo cérebro está chegando.",
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-white to-slate-50`}>
        {children}
      </body>
    </html>
  );
}
