import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import createEmotionCache from '@/styles/CreateEmotionCache';
import theme from '@/styles/GlobalStyles';
interface IAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IAppProps) => {
  const { isReady } = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
        <title>물류 콘솔 - The Pirates</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isReady && <Component {...pageProps} />}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
