import type { AppProps } from 'next/app';
import {
  ThemeProvider,
  StyledEngineProvider,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';

import createThemeByMode from '../theme';
import '../styles/global.css';
import { useMemo } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const isLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = useMemo(() => createThemeByMode(isLightMode), [isLightMode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta
            name={'viewport'}
            content={'width=device-width, initial-scale=1'}
          />
          <title>AiRini</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
