import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import ligthTheme from "../styles/ligthTheme";
import { EmotionCache } from "@emotion/cache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import store from "../src/store/store";
import { Provider } from "react-redux";

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
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
