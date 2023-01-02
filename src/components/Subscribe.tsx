import {
  Typography,
  Box,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Container } from './Container'
import theme from '../theme/Theme'
import { TildeIcon } from '../icons/TildeIcon'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

export const Subscribe: React.FC = () => {
  return (
    <Box bgcolor={theme.palette.background.paper}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            paddingY: ['100px', '120px', '140px'],
            flexDirection: ['column', 'row'],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              flex: 1,
              zIndex: 1,
            }}
          >
            <Typography
              variant="h1"
              fontSize={['35px', '35px', '40px', '48px']}
              color="text.primary"
              fontWeight={400}
              px={['20px', '40px', '80px']}
            >
              Subscribe To Our Newsletter
              <Box lineHeight={0}>
                <TildeIcon />
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              display: ['none', 'block'],
              position: 'absolute',
              marginLeft: '-100px',
              marginTop: '-120px',
            }}
          >
            <img src="bg-pattern3.png" width={250} alt="bg-pattern3" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              px: ['20px', '10px', '20px'],
              mt: ['30px', 0],
            }}
          >
            <Typography
              fontFamily="Plus Jakarta Sans"
              fontWeight={400}
              fontSize={['14px', '14px', '16px']}
              color="text.secondary"
            >
              Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
              amet, consectetur. Elit adipiscing enim pharetra hac.
            </Typography>
            <Input
              sx={{
                mt: ['30px', '30px', '40px'],
                fontFamily: 'Plus Jakarta Sans',
              }}
              type="email"
              placeholder="Enter your email addresss here"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Typography
                      fontFamily="Plus Jakarta Sans"
                      fontWeight={500}
                      color="text.primary"
                      mr="4px"
                    >
                      SEND
                    </Typography>
                    <SendOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
