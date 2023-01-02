import { features } from '../mockData/data'
import { BooksSlider } from './common/BooksSlider'

export const BookWithOffer: React.FC = () => {
  return (
    <BooksSlider
      title={'Books with offer'}
      subTitle={'Grab your opportunity'}
      bookSliderData={features}
    />
  )
}
