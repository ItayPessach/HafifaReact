import { createTheme } from '@mui/material/styles';
import { heIL as coreHeIL } from '@mui/material/locale';
import { heIL } from '@mui/x-data-grid/locales';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2394b6',
      light: '#81bfd2',
    },
    secondary: {
      main: '#ededed',
    },
  },
  direction: 'rtl',
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
}, coreHeIL, heIL);
