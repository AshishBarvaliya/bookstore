import Carousel from 'react-material-ui-carousel'
import { Card, Typography, Box } from '@mui/material'
import { Container } from './Container'
import theme from '../theme/Theme'
import { IItem, items } from '../mockData/data'

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
          {items.map((item: IItem, index: number) => (
            <Banner item={item} key={index} />
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}

interface IBannerProps {
  item: IItem
}

const Banner = ({ item }: IBannerProps): JSX.Element => {
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
