import { Typography, Box } from '@mui/material'
import { Container } from './Container'
import theme from '../theme/Theme'
import { TildeIcon } from '../icons/TildeIcon'

export const DownloadApp: React.FC = () => {
  return (
    <Box bgcolor={theme.palette.background.paper}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            paddingY: ['80px', '80px'],
            flexDirection: ['column', 'row'],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: ['center', 'flex-end'],
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-end',
                maxWidth: ['300px', '300px', '400px'],
                zIndex: 1,
                pr: [0, 0, '20px'],
              }}
            >
              <img src="phone.png" width="100%" alt="phone" />
            </Box>
          </Box>

          <Box
            sx={{
              display: ['none', 'block'],
              position: 'absolute',
              marginLeft: '-80px',
              marginTop: [0, '340px', '410px'],
            }}
          >
            <img src="bg-pattern2.png" width={250} alt="bg-pattern2" />
          </Box>
          <Box
            sx={{
              display: ['none', 'block'],
              position: 'absolute',
              marginLeft: '-100px',
              marginTop: '-80px',
            }}
          >
            <img src="bg-pattern3.png" width={250} alt="bg-pattern3" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              px: ['20px', '10px', 0],
              justifyContent: 'center',
            }}
          >
            <Typography fontSize={['35px', '35px', '46px']}>
              Download Our App Now !
            </Typography>
            <TildeIcon />
            <Typography
              color="text.secondary"
              fontFamily="Plus Jakarta Sans"
              fontSize={['12px', '12px', '16px']}
              lineHeight={['20px', '20px', '32px']}
              mt="35px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit
              iaculis amet, ac urna. Adipiscing fames semper erat ac in
              suspendisse iaculis.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                mt: '40px',
              }}
            >
              <img src="googleplay.png" width={150} alt="googleplay" />
              <img
                src="apple.png"
                width={150}
                alt="apple"
                style={{
                  marginLeft: '12px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
