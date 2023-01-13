import { Box } from '@mui/material'
import theme from '../theme/Theme'
import { Container } from './Container'

export const AssociatedWith: React.FC = () => {
  const associatesImages: string[] = [
    'A1.png',
    'A2.png',
    'A3.png',
    'A4.png',
    'A5.png',
  ]

  return (
    <Box bgcolor={theme.palette.background.paper} height={['auto', '282px']}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: 'center',
          height: '100%',
        }}
      >
        {associatesImages.map((img: string, ind: number) => (
          <Box
            key={ind}
            width={['100%', '20%']}
            marginY={[2, 0]}
            display="flex"
            justifyContent="center"
          >
            <img src={img} alt={img} />
          </Box>
        ))}
      </Container>
    </Box>
  )
}
