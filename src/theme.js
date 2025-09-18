import { createTheme } from '@mui/material/styles';

const theme = createTheme({


  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'EB Garamond, serif',
          fontSize: '1.1rem',
          fontWeight: 500,
          color:'#2C3607',
        '&.Mui-focused': {
          color: '#0A180F',
        }
        },
        asterisk: {
          color: 'red',
          '&.Mui-error': { // Also apply red color when there's an error
            color: 'red',
          },
        },

      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#F77F9F',
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F77F9F',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F77F9F',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'EB Garamond, serif',
          fontSize: '1.1rem',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          fontFamily: 'EB Garamond, serif',
          color: '#F77F9F',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontFamily: 'EB Garamond, serif',
            fontSize: '1.1rem',
          },
        },
      },
    },
  },
});

export default theme;
