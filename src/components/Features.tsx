import { Box, Card, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { StyledImgContainer } from '../styled/features'
import theme from '../theme/Theme'
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
        <Typography
          color="text.secondary"
          fontFamily="Plus Jakarta Sans"
          fontSize="13px"
          fontWeight={500}
        >
          Some quality items
        </Typography>
        <Box
          display="flex"
          mb={['30px', '35px', '50px']}
          mt={['10px', '15px', '20px']}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              height: '1px',
              backgroundColor: theme.palette.background.paper,
              flex: '1',
              mr: '80px',
            }}
          />
          <Typography
            variant="h1"
            fontSize={['30px', '35px', '48px']}
            color="text.primary"
          >
            Featured Books
          </Typography>
          <Box
            sx={{
              height: '1px',
              backgroundColor: theme.palette.background.paper,
              flex: '1',
              ml: '80px',
            }}
          />
        </Box>
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
              }}
            >
              {item.books.map((e, i) => (
                <Box
                  key={e.id}
                  display={[
                    i > 0 ? 'none' : 'flex',
                    i > 1 ? 'none' : 'flex',
                    'flex',
                  ]}
                  sx={{
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <StyledImgContainer>
                    <img src={e.image} alt={e.title} width={265} />
                    <Box
                      className="add-to-cart"
                      sx={{
                        display: 'none',
                        position: 'absolute',
                        backgroundColor: 'black',
                        color: 'white',
                        width: '100%',
                        fontFamily: 'Plus Jakarta Sans',
                        py: '13px',
                        mt: '-120px',
                      }}
                    >
                      ADD TO CART
                    </Box>
                  </StyledImgContainer>
                  <Typography fontSize="22px">{e.title}</Typography>
                  <Typography
                    fontSize="14px"
                    fontFamily="Plus Jakarta Sans"
                    pt={1}
                    color="text.secondary"
                  >
                    {e.author}
                  </Typography>
                  <Typography fontSize="18px" pt="20px">
                    {e.price}
                  </Typography>
                </Box>
              ))}
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}
