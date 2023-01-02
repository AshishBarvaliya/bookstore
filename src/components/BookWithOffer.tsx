import { booksWithOffer } from '../mockData/data'
import theme from '../theme/Theme'
import { BooksSlider } from './common/BooksSlider'

export const BookWithOffer: React.FC = () => {
  return (
    <BooksSlider
      title={'Books with offer'}
      subTitle={'Grab your opportunity'}
      bookSliderData={booksWithOffer}
      bookTileBG={theme.palette.background.default}
      splitBG
    />
  )
}
