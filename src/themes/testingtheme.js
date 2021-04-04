import { createMuiTheme, breakpoints } from '@material-ui/core';
import HelveticaWorld from '../font/HelveticaWorld-Regular.ttf';


const theme = createMuiTheme ({
  palette: {
    type: "dark",
    primary: {
      light: '#AACDA2',
      main: '#383838',
      dark: '#262626',
      special: '#2F362F',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      special: '#508550',
      main: '#9CE79C',
      dark: '#3E553E',
      contrastText: '#212121',
    },
    background: {
      paper: '#424242',
      default: '#202020',
    },
    action: {
      active: 'rgba(156, 231, 156, 1)',
      hover: 'rgba(156, 231, 156, 0.8)',
      hoverOpacity: 0.08,
      selected: 'rgba(156, 231, 156, 1)',
      selectedOpacity: 0.16,
      disabled: 'rgba(113, 118, 129, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(156, 231, 156, 1)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    }, 
    text: {
      primary: '#fff',
    },
  }, 
  typography: {
    fontFamily: 'HelveticaWorld',
    button: {
      fontFamily: 'HelveticaWorld',
      textTransform: 'none',
    },
  },
  overrides: {
    MuiCardHeader: {
      root: {
        textAlign: 'start',
        height: 90,
      },
      title: {
        textAlign: 'start',
        color: 'white',
        textShadow: "0.5px 0.5px 6px #9CE79C",
        fontSize: 16,
      },
      subheader: {
        fontSize: 12,
        fontStyle: 'oblique',
        paddingBottom: 0,
      },
    },
    MuiLink: {
      underlineHover: {
        color: '#fff',
        textDecoration: 'none',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [HelveticaWorld],
      },
    },
  },
});

export default theme;