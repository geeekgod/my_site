import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Gtag Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VT4526C2VG"
      ></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-VT4526C2VG');`
        }}

      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
