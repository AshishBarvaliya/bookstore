import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#EEEBE4',
    },
    secondary: {
      main: '#343434',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#343434',
      secondary: '#A1A19F',
    },
    background: {
      default: '#F3F2ED',
      paper: '#EEEBE4',
    },
  },
})

export default theme
