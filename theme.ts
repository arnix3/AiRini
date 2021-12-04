import { PaletteOptions } from '@mui/material/styles/createPalette';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { createTheme } from '@mui/material';

const defaultPalette: PaletteOptions = {
  primary: {
    main: '#79baf2',
    contrastText: '#161426',
  },
  secondary: {
    main: '#f2a35e',
    contrastText: '#161426',
  },
  info: {
    main: '#151426',
  },
  success: {
    main: '#5ab281',
  },
  warning: {
    main: '#d7a249',
  },
  error: {
    main: '#f44336',
  },
};

const typography: TypographyOptions = {
  fontFamily: '"Spoqa Han Sans Neo", sans-serif',
};

export default function createThemeByMode(isLightMode: boolean) {
  const palette: PaletteOptions = {
    mode: isLightMode ? 'light' : 'dark',
    ...defaultPalette,
    background: {
      paper: '#fff',
      default: isLightMode ? '#f2f2f2' : '#161426',
    },
  };

  return createTheme({
    palette,
    typography,
    components: {
      MuiTypography: {
        variants: [
          {
            props: { lang: 'en' },
            style: { fontFamily: 'titillium-web, sans-serif' },
          },
        ],
        defaultProps: {
          lang: 'ko',
        },
      },
    },
  });
}
