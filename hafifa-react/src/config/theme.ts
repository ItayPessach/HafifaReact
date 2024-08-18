import {createTheme} from '@mui/material/styles';
import {heIL} from '@mui/material/locale';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2394b6',
            light: '#81bfd2'
        },
        secondary: {
            main: '#ededed'
        }
    },
    direction: 'rtl'
}, heIL)