import { features } from '../mockData/data'
import { BooksSlider } from './common/BooksSlider'

export const Features: React.FC = () => {
  return (
    <BooksSlider
      title={'Featured Books'}
      subTitle={'Some quality items'}
      bookSliderData={features}
    />
  )
}
