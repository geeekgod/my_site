import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishabh Singh - Terminal Portfolio",
  description:
    "Interactive terminal portfolio of Rishabh Singh, Software Engineer. Experience my portfolio through a command-line interface with multiple themes and keyboard shortcuts.",
  keywords:
    "Rishabh Singh, Software Engineer, Terminal Portfolio, Interactive Portfolio, Command Line, Developer, Full-Stack Developer, Mumbai, India, React, Next.js, TypeScript, Node.js, geeekgod, thisisgeeekgod, terminal website, developer portfolio",
  icons: {
    icon: "/assets/my_pic.png",
    apple: "/assets/my_pic.png",
  },
  openGraph: {
    type: "website",
    title: "Rishabh Singh - Interactive Terminal Portfolio",
    description:
      "Experience my portfolio through an interactive terminal interface. Software Engineer with 4+ years of experience building quality applications.",
    url: "https://geeekgod.in/",
    siteName: "Rishabh Singh Terminal Portfolio",
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
      <body>
        <Providers>
          <main className="h-screen overflow-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
