import Carousel from 'react-material-ui-carousel'
import { Card, Typography, Box } from '@mui/material'
import { Container } from './Container'
import theme from '../theme/Theme'

export const Home: React.FC = () => {
  return (
    <Box bgcolor={theme.palette.background.default}>
      <Container sx={{ paddingX: '0 !important', height: ['1000px', '800px'] }}>
        <Carousel
          className="home"
          autoPlay
          animation="fade"
          duration={700}
          navButtonsAlwaysVisible
          cycleNavigation
          swipe
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
            style: { margin: '0', textAlign: 'start', paddingLeft: '160px' },
          }}
        >
          {items.map((item, index) => (
            <Banner item={item} key={index} />
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}

interface Item {
  id: string
  title: string
  desc: string
  image: string
}

interface BannerProps {
  item: Item
}

const Banner = ({ item }: BannerProps): JSX.Element => {
  return (
    <Card
      sx={{
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: 'background.default',
        height: ['900px', '600px', '640px'],
        pl: ['0px', '70px', '80px'],
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          height: '100%',
          flexDirection: ['column-reverse', 'row', 'row'],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minWidth: ['90%', '45%', '45%'],
            padding: ['8px', 0],
            paddingBottom: ['30px', '80px', '130px'],
            textAlign: ['center', 'start'],
          }}
        >
          <Typography
            variant="h1"
            color="text.primary"
            fontSize={['45px', '55px', '74px']}
          >
            {item.title}
          </Typography>
          <Typography
            mt="20px"
            fontFamily="Plus Jakarta Sans"
            lineHeight={['25px', '25px', '35px']}
            color="text.secondary"
          >
            {item.desc}
          </Typography>
        </Box>
        <Box
          sx={{
            marginX: [0, 0, '30px'],
            textAlign: ['center', 'start'],
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              marginTop: ['70px', '150px'],
            }}
          >
            <img src={item.image} width={400} alt={item.title} />
          </Box>
          <Box
            sx={{
              display: ['none', 'block'],
              position: 'absolute',
              top: 10,
              marginLeft: '40px',
            }}
          >
            <img src="bg-pattern1.png" width={550} alt="bg-pattern" />
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

const items: Item[] = [
  {
    id: '1',
    title: 'Life of seacrits',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: 'book14.png',
  },
  {
    id: '2',
    title: 'Portrait photography',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: 'book8.png',
  },
  {
    id: '3',
    title: 'Peaceful Enlightment',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: 'book15.png',
  },
]
