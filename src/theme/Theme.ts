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
      primary: '#222222',
      secondary: '#7A7A7A',
    },
    background: {
      default: '#F3F2EC',
      paper: '#EDEBE4',
    },
  },
  typography: {
    fontFamily: 'Prata',
  },
})

export default theme
