import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          // change background color of AppBar
          backgroundColor: '#000'
        }
      }
    }
  },
  typography: {
    body1: {
      fontSize: '16px'
    }
  }
});

const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export { ThemeProvider };
