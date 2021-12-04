import type { AppProps } from 'next/app';
import {
  ThemeProvider,
  StyledEngineProvider,
  useMediaQuery,
} from '@mui/material';

import createThemeByMode from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  const isLightMode = useMediaQuery('(prefers-color-scheme: light)');

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createThemeByMode(isLightMode)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
