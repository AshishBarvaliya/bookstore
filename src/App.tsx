import { Box } from '@mui/material'
import { AssociatedWith } from './components/AssociatedWith'
import { BestSelling } from './components/BestSelling'
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
      <BestSelling />
    </Box>
  )
}

export default App
