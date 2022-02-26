import "../styles/globals.css";
import "../styles/extra.css";
import Script from "next/script";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/herocolors.svg" />
      </Head>
      <Script
        id="Adsense-id"
        async
        onError={(e) => {
          console.log("Script failed to load", e);
        }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9395568136340476"
        crossorigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
