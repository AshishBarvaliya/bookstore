import { Box, Card } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { IBookSliderData } from '../../mockData/data'
import theme from '../../theme/Theme'
import { Container } from '../Container'
import { BookTile } from './BookTile'
import { TitleHeader } from './TitleHeader'

interface IBooksSlider {
  title: string
  subTitle: string
  bookSliderData: IBookSliderData[]
  bookTileBG?: string
  splitBG?: boolean
}

export const BooksSlider: React.FC<IBooksSlider> = ({
  title,
  subTitle,
  bookSliderData,
  bookTileBG,
  splitBG = false,
}) => {
  return (
    <Box
      sx={{
        pt: ['80px', '120px', '180px'],
        background: splitBG
          ? 'linear-gradient(to bottom, #EDEBE4 45%, #F3F2EC 0%)'
          : theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          paddingX: '0 !important',
          textAlign: 'center',
        }}
      >
        <TitleHeader title={title} subTitle={subTitle} />
        <Carousel
          className="features"
          autoPlay={false}
          animation="slide"
          duration={700}
          cycleNavigation
          swipe
          sx={{
            height: 650,
          }}
          navButtonsProps={{
            style: {
              backgroundColor: 'inherit',
              border: '1px solid #333333',
              color: '#333333',
              width: '45px',
              height: '45px',
            },
          }}
          indicatorContainerProps={{
            style: { marginTop: '30px', textAlign: 'center' },
          }}
        >
          {bookSliderData.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                position: 'relative',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                gap: '40px',
                borderBottom: '2px solid #EDEBE4',
                pb: '50px',
                px: ['30px', '30px', '0px'],
                justifyContent: 'center',
              }}
            >
              {item.books.map((book, i) => (
                <Box
                  key={book.id}
                  display={[
                    i > 0 ? 'none' : 'block',
                    i > 1 ? 'none' : 'block',
                    'block',
                  ]}
                >
                  <BookTile {...book} bgcolor={bookTileBG} />
                </Box>
              ))}
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}
