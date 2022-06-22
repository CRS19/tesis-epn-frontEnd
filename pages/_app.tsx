import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import ligthTheme from "../styles/ligthTheme";
import { EmotionCache } from "@emotion/cache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import store from "../src/store/store";
import { Provider } from "react-redux";
import Head from "next/head";

const clientCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={ligthTheme}>
          <CssBaseline />
          <Head>
            <title>Vincular Dispositivo</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@100&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
