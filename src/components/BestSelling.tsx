import { Typography, Box, Link } from '@mui/material'
import { Container } from './Container'
import theme from '../theme/Theme'
import { ArrowRightAlt } from '@mui/icons-material'
import { TildeIcon } from '../icons/TildeIcon'

export const BestSelling: React.FC = () => {
  const bestBook = {
    img: 'book2.png',
    author: 'By Timbur Hood',
    title: 'Birds gonna be happy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
    price: '$ 45.00',
  }

  return (
    <Box bgcolor={theme.palette.background.paper}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            paddingY: ['100px', '120px'],
            flexDirection: ['column', 'row'],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-end',
              zIndex: 1,
            }}
          >
            <img
              src={bestBook.img}
              width={380}
              alt="best selling"
              style={{ paddingRight: '20px' }}
            />
          </Box>

          <Box
            sx={{
              display: ['none', 'block'],
              position: 'absolute',
              marginLeft: '-80px',
              marginTop: '330px',
            }}
          >
            <img src="bg-pattern2.png" width={250} alt="bg-pattern2" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              pl: ['20px', '10px', '20px'],
              pt: '30px',
              pr: '20px',
            }}
          >
            <Typography fontSize={['40px', '35px', '48px']}>
              Best Selling Book
            </Typography>
            <TildeIcon />

            <Typography
              color="text.secondary"
              fontFamily="Plus Jakarta Sans"
              fontSize={['10px', '10px', '13px']}
              fontWeight={500}
              mt={['40px', '40px', '60px']}
            >
              {bestBook.author}
            </Typography>
            <Typography fontSize="28px" mt={['15px', '15px', '20px']}>
              {bestBook.title}
            </Typography>
            <Typography
              color="text.secondary"
              fontFamily="Plus Jakarta Sans"
              fontSize={['12px', '12px', '16px']}
              lineHeight={['20px', '20px', '32px']}
              mt="10px"
            >
              {bestBook.desc}
            </Typography>
            <Typography
              fontSize={['16px', '16px', '23px']}
              mt={['24px', '24px', '35px']}
              color="#74642F"
            >
              {bestBook.price}
            </Typography>
            <Link
              component="button"
              fontSize="16px"
              color="text.primary"
              textAlign="center"
              pt={['35px !important', '35px !important', '45px !important']}
              width="120px"
            >
              <Box display="flex" alignItems="center">
                <text>Shop it now</text>
                <ArrowRightAlt sx={{ fontSize: '17px', ml: '6px' }} />
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
