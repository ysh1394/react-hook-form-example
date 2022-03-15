import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          fontFamily:
            "Roboto, -apple-system, BlinkMacSystemFont,'Segoe UI', Helvetica,Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important",
          margin: 0,
          outline: 'none',
          padding: 0,
        },
      },
    },
  },
  palette: {
    error: {
      main: red.A400,
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export default theme;
