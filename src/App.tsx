import { Box } from '@mui/material'
import { Header } from './components/Header'
import { Home } from './components/Home'

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Home />
    </Box>
  )
}

export default App
