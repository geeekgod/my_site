import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Singh - Terminal Portfolio",
  description:
    "Interactive terminal portfolio of Rishabh Singh, Software Engineer at Inka. SDE 2 with 4+ years of experience in full-stack development, AI integration, and building scalable applications. Expertise in React, Next.js, Python, Docker, and Conversational AI. Led projects serving 100,000+ users.",
  keywords:
    "Rishabh Singh, Software Engineer, Terminal Portfolio, Interactive Portfolio, Command Line, Developer, Full-Stack Developer, Mumbai, India, React, Next.js, TypeScript, Node.js, Python, FastAPI, Docker, Kubernetes, AWS, Conversational AI, LLM, AI Integration, geeekgod, thisisgeeekgod, terminal website, developer portfolio, Inka, SSingularity",
  authors: [{ name: "Rishabh Singh", url: "https://geeekgod.in" }],
  creator: "Rishabh Singh",
  publisher: "Rishabh Singh",
  icons: {
    icon: "/assets/my_pic.png",
    apple: "/assets/my_pic.png",
  },
  openGraph: {
    type: "website",
    title: "Rishabh Singh - Interactive Terminal Portfolio",
    description:
      "Experience my portfolio through an interactive terminal interface. Software Engineer with 4+ years of experience building quality applications. Currently building Conversational AI at Inka.",
    url: "https://geeekgod.in/",
    siteName: "Rishabh Singh Terminal Portfolio",
    images: [
      {
        url: "https://www.geeekgod.in/assets/my_pic.png",
        width: 500,
        height: 500,
        alt: "Rishabh Singh - Software Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Singh - Interactive Terminal Portfolio",
    description:
      "Software Engineer with 4+ years of experience. Building Conversational AI and scalable applications.",
    images: ["https://www.geeekgod.in/assets/my_pic.png"],
    creator: "@geeekgod",
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
  alternates: {
    canonical: "https://geeekgod.in",
  },
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
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rishabh Singh",
              jobTitle: "Software Engineer II (SDE 2)",
              worksFor: {
                "@type": "Organization",
                name: "Inka",
                description: "Insurance empowered by AI & Data",
              },
              url: "https://geeekgod.in",
              email: "ris8645208@gmail.com",
              image: "https://www.geeekgod.in/assets/my_pic.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/geeekgod",
                "https://linkedin.com/in/geeekgod",
                "https://medium.com/@geeekgod",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Python",
                "FastAPI",
                "Node.js",
                "Docker",
                "Kubernetes",
                "AWS",
                "Conversational AI",
                "LLM Integration",
                "Full-Stack Development",
                "System Architecture",
                "Microservices",
              ],
              alumniOf: "Started programming at age 14",
              description:
                "Software Engineer with 4+ years of experience specializing in full-stack development, AI integration, and building scalable applications. Currently focused on building Conversational AI Agents at Inka.",
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rishabh Singh Terminal Portfolio",
              url: "https://geeekgod.in",
              description:
                "Interactive terminal-style portfolio showcasing professional journey, technical skills, and projects of Rishabh Singh",
              author: {
                "@type": "Person",
                name: "Rishabh Singh",
                url: "https://geeekgod.in",
              },
              inLanguage: "en-US",
              copyrightYear: new Date().getFullYear(),
              creator: {
                "@type": "Person",
                name: "Rishabh Singh",
              },
            }),
          }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Rishabh Singh - Software Engineering Services",
              description:
                "Professional software engineering services including full-stack development, AI integration, and system architecture",
              provider: {
                "@type": "Person",
                name: "Rishabh Singh",
                jobTitle: "Software Engineer II",
              },
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              serviceType: [
                "Full-Stack Development",
                "AI Integration",
                "Conversational AI Development",
                "System Architecture",
                "Performance Optimization",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <main className="h-screen overflow-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
