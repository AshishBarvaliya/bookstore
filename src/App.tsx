import { Box } from '@mui/material'
import { AssociatedWith } from './components/AssociatedWith'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Home } from './components/Home'

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Home />
      <AssociatedWith />
      <Features />
    </Box>
  )
}

export default App
