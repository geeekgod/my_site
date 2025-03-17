import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Singh",
  description:
    "I'm a passionate Software Engineer. I develop quality software to help businesses to leverage their products.",
  keywords:
    "Rishabh, Singh, Rishabh Singh Software Engineer, Software Engineer, Rishabh Singh Fullstack developer, Rishabh Singh Software Engineer Mumbai, Rishabh Singh Fullstack developer Mumbai, Software Engineer in Mumbai, Fullstack,Full-Stack,Full-Stack Developer, Frontend, Developer, Frontend Developer, Web, website, Website Developer, Web Developer, thefrontendrish, geeekgod, thisisgeeekgod, Rishabh Singh geeekgod, geeekgod Software Engineer, geeekgod.in, wwww.geeekgod.in",
  icons: {
    icon: "/assets/my_pic.png",
    apple: "/assets/my_pic.png",
  },
  openGraph: {
    type: "website",
    title: "Rishabh Singh, Software Engineer personal website.",
    description:
      "I'm a passionate Software Engineer. I develop quality software to help businesses to leverage their products.",
    url: "https://geeekgod.in/",
    siteName: "Rishabh Singh",
    images: [
      {
        url: "https://www.geeekgod.in/assets/my_pic.png",
        width: 500,
        height: 500,
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VT4526C2VG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VT4526C2VG');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
