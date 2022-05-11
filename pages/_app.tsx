import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import ligthTheme from "../styles/ligthTheme";
import { EmotionCache } from "@emotion/cache";
import { ThemeProvider, CssBaseline } from "@mui/material";

const clientCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={ligthTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
