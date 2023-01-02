import { Box, Card } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import theme from '../theme/Theme'
import { BookTile } from './common/BookTile'
import { TitleHeader } from './common/TitleHeader'
import { Container } from './Container'

export const Features: React.FC = () => {
  const features = [
    {
      id: '1',
      books: [
        {
          id: '1',
          title: 'Simple way of piece life',
          author: 'Armor Ramsey',
          price: '$ 40.00',
          image: 'book5.png',
        },
        {
          id: '2',
          title: 'Great travel at desert',
          author: 'Sanchit Howdy',
          price: '$ 38.00',
          image: 'book3.png',
        },
        {
          id: '3',
          title: 'The lady beauty Scarlett',
          author: 'Arthur Doyle',
          price: '$ 45.00',
          image: 'book16.png',
        },
        {
          id: '4',
          title: 'Once upon a time',
          author: 'Klien Marry',
          price: '$ 35.00',
          image: 'book4.png',
        },
      ],
    },
    {
      id: '2',
      books: [
        {
          id: '1',
          title: 'Simple way of piece life',
          author: 'Armor Ramsey',
          price: '$ 40.00',
          image: 'book5.png',
        },
        {
          id: '2',
          title: 'Great travel at desert',
          author: 'Sanchit Howdy',
          price: '$ 38.00',
          image: 'book3.png',
        },
        {
          id: '3',
          title: 'The lady beauty Scarlett',
          author: 'Arthur Doyle',
          price: '$ 45.00',
          image: 'book16.png',
        },
        {
          id: '4',
          title: 'Once upon a time',
          author: 'Klien Marry',
          price: '$ 35.00',
          image: 'book4.png',
        },
      ],
    },
    {
      id: '3',
      books: [
        {
          id: '1',
          title: 'Simple way of piece life',
          author: 'Armor Ramsey',
          price: '$ 40.00',
          image: 'book5.png',
        },
        {
          id: '2',
          title: 'Great travel at desert',
          author: 'Sanchit Howdy',
          price: '$ 38.00',
          image: 'book3.png',
        },
        {
          id: '3',
          title: 'The lady beauty Scarlett',
          author: 'Arthur Doyle',
          price: '$ 45.00',
          image: 'book16.png',
        },
        {
          id: '4',
          title: 'Once upon a time',
          author: 'Klien Marry',
          price: '$ 35.00',
          image: 'book4.png',
        },
      ],
    },
  ]

  return (
    <Box
      sx={{
        pt: ['80px', '120px', '180px'],
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          paddingX: '0 !important',
          textAlign: 'center',
        }}
      >
        <TitleHeader title={'Featured Books'} subTitle={'Some quality items'} />
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
          {features.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                position: 'relative',
                boxShadow: 'none',
                backgroundColor: 'background.default',
                gap: '40px',
                borderBottom: '1px solid #EDEBE4',
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
                  <BookTile {...book} />
                </Box>
              ))}
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}
