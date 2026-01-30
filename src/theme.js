import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    button: {
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  palette: {
    background: {
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          '&:hover': {
            backgroundColor: 'var(--ds-gray-alpha-100, rgba(0,0,0,0.02))',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

// CSS Variables for Vercel design system
export const vercelCssVariables = `
  :root {
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --ds-gray-1000: #000000;
    --ds-gray-900: #11181C;
    --ds-gray-alpha-400: rgba(0, 0, 0, 0.1);
    --ds-gray-alpha-200: rgba(0, 0, 0, 0.08);
    --ds-gray-alpha-100: rgba(0, 0, 0, 0.02);
    --ds-background-100: #ffffff;
  }
`;

export default theme;