import { createTheme } from '@mui/material/styles';
import {
  blue,
  green,
  red,
  purple,
  yellow,
  pink,
  orange,
  teal,
  grey,
} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff',
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff',
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
