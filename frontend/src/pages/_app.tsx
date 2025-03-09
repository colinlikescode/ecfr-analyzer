/* istanbul ignore file */
import type { AppProps } from "next/app";
import Head from "next/head";
import "./../../static/fonts.css";
import { useEffect } from "react";
import { useApiConfigStore } from "../store/apiConfigStore";

import GlobalStyles from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  const initializeBaseUrl = useApiConfigStore(
    (state) => state.initializeBaseUrl
  );

  useEffect(() => {
    // Initialize the API base URL when the app loads
    initializeBaseUrl();
  }, [initializeBaseUrl]);

  return (
    <>
      <Head>
        <title>eCFR Analyzer</title>
        <link rel="shortcut icon" href="/base/favicon.ico" />
        <link rel="apple-touch-icon" href="/base/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="eCFR Analyzer" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
