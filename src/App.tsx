import { Box } from '@mui/material'
import { Articles } from './components/Articles'
import { AssociatedWith } from './components/AssociatedWith'
import { BestSelling } from './components/BestSelling'
import { BookWithOffer } from './components/BookWithOffer'
import { DownloadApp } from './components/DownloadApp'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { PopularBooks } from './components/PopularBooks'
import { Quote } from './components/Quote'
import { Subscribe } from './components/Subscribe'

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Home />
      <AssociatedWith />
      <Features />
      <BestSelling />
      <PopularBooks />
      <Quote />
      <BookWithOffer />
      <Subscribe />
      <Articles />
      <DownloadApp />
    </Box>
  )
}

export default App
