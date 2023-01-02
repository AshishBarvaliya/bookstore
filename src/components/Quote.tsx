import { Box, Typography } from '@mui/material'
import { TildeIcon } from '../icons/TildeIcon'
import { quote } from '../mockData/data'
import theme from '../theme/Theme'
import { Container } from './Container'

export const Quote: React.FC = () => (
  <Box bgcolor={theme.palette.background.default}>
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingY: ['100px', '120px', '140px'],
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        fontSize={['35px', '35px', '48px']}
        color="text.primary"
        fontWeight={400}
      >
        Quote Of The Day
      </Typography>
      <TildeIcon />
      <Typography
        fontSize={['16px', '18px', '22px']}
        color="text.secondary"
        fontWeight={400}
        fontFamily="Plus Jakarta Sans"
        mt="70px"
        width={['auto', 650]}
      >
        {quote.comment}
      </Typography>
      <Typography
        variant="h1"
        fontSize={['16px', '18px', '20px']}
        color="text.primary"
        mt="20px"
        fontWeight={400}
      >
        {quote.author}
      </Typography>
    </Container>
  </Box>
)
