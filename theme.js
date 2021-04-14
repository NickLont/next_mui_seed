import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002F49',
      light: '#376A8E',
      dark: '#000522'
    },
    secondary: {
      main: '#F77F02',
      light: '#FF9D05',
      dark: '#E85600'
    },
    error: {
      main: '#D62729',
      light: '#FF6153',
      dark: '#9C0000'
    },
    warning: {
      main: '#FCBF4A',
      light: '#fff17b',
      dark: '#C58F12'
    },
    info: {
      main: '#79A1C4',
      light: '#B7D9F4',
      dark: '#4579A0'
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c'
    }
  },
  typography: {
    fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['freightbigcmp-pro', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: 96
    },
    h2: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 300,
      fontSize: 60
    },
    h3: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 48
    },
    h4: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 34
    },
    h5: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 24
    },
    h6: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 20
    },
    body1: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 16
    },
    body2: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 14
    },
    button: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: 14
    },
    caption: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 12
    },
    overline: {
      fontFamily: ['Lato', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 10
    }
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        bottom: '-2em'
      }
    },
    MuiAvatar: {
      img: {
        // handle correctly non-square images
        objectFit: 'cover',
        height: '100%'
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none'
      }
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: '#FFFEF8'
      }
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: '#FFFEF8'
      }
    },
    MuiPickersModal: {
      withAdditionalAction: {
        backgroundColor: '#FFFEF8'
      }
    }
  }
})

export default responsiveFontSizes(theme)
