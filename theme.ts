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

const lightPalette: PaletteOptions = {
  mode: 'light',
  ...defaultPalette,
  background: {
    paper: '#fff',
    default: '#f2f2f2',
  },
  text: {
    primary: '#161426',
    secondary: '#f2f2f2',
  },
};

const darkPalette: PaletteOptions = {
  mode: 'dark',
  ...defaultPalette,
  background: {
    paper: '#fff',
    default: '#161426',
  },
  text: {
    primary: '#f2f2f2',
    secondary: '#161426',
  },
};

const typography: TypographyOptions = {
  fontFamily: '"Spoqa Han Sans Neo", sans-serif',
};

export default function createThemeByMode(isLightMode: boolean) {
  return createTheme({
    palette: isLightMode ? lightPalette : darkPalette,
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
          color: 'text.primary',
        },
      },
    },
  });
}
