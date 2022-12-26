import { Box } from '@mui/material'
import { AssociatedWith } from './components/AssociatedWith'
import { Header } from './components/Header'
import { Home } from './components/Home'

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Home />
      <AssociatedWith />
    </Box>
  )
}

export default App
