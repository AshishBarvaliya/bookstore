import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import { footerNavLinks } from '../mockData/data'
import theme from '../theme/Theme'
import { Container } from './Container'

export const Footer: React.FC = () => (
  <Box
    sx={{
      background: theme.palette.background.default,
    }}
  >
    <Container
      sx={{
        paddingX: '0 !important',
        textAlign: 'center',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          pt: ['60px', '100px', '100px'],
          pb: ['40px', '60px', '60px'],
          flexDirection: ['column', 'column', 'row'],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: ['center', 'center', 'start'],
            width: ['100%', '100%', '30%', '30%'],
            mb: ['20px', '20px', 0],
          }}
        >
          <img src="logo.png" width={230} height={60} alt="logo" />
        </Box>
        <Box
          sx={{
            display: ['column', 'flex'],
            width: ['auto', 'auto', '70%'],
            px: ['20px', '20px', 0, 0],
            justifyContent: ['center', 'space-evenly', 'start'],
          }}
        >
          {footerNavLinks.map((nav, ind) => (
            <Box
              key={ind}
              sx={{
                display: ['none', 'flex'],
                textAlign: 'start',
                width: ['auto', 'auto', '25%'],
                flexDirection: 'column',
              }}
            >
              <Typography
                fontWeight={400}
                mb="20px"
                color="text.primary"
                fontSize={['28px', '28px', '24px', '28px']}
              >
                {nav.title}
              </Typography>
              {nav.links.map((link, i) => (
                <Typography
                  key={i}
                  fontFamily="Plus Jakarta Sans"
                  fontWeight={500}
                  lineHeight="30px"
                  letterSpacing="10%"
                  color="text.secondary"
                  sx={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    ':hover': {
                      color: 'text.primary',
                    },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          ))}
          {footerNavLinks.map((_, ind) =>
            ind % 2 === 0 ? (
              <Box
                key={ind}
                sx={{
                  display: ['flex', 'none'],
                  justifyContent: 'space-between',
                  mt: '26px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    textAlign: 'start',
                    width: '50%',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    fontWeight={400}
                    mb={['8px', '20px']}
                    color="text.primary"
                    fontSize={['28px', '28px', '24px', '28px']}
                  >
                    {footerNavLinks[ind].title}
                  </Typography>
                  {footerNavLinks[ind].links.map((link, i) => (
                    <Typography
                      key={i}
                      fontFamily="Plus Jakarta Sans"
                      fontWeight={500}
                      lineHeight="30px"
                      letterSpacing="10%"
                      color="text.secondary"
                      sx={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        ':hover': {
                          color: 'text.primary',
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: ['flex', 'none'],
                    textAlign: 'start',
                    justifyContent: 'space-between',
                    width: '50%',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    fontWeight={400}
                    mb={['8px', '20px']}
                    color="text.primary"
                    fontSize={['28px', '28px', '24px', '28px']}
                  >
                    {footerNavLinks[ind + 1].title}
                  </Typography>
                  {footerNavLinks[ind + 1].links.map((link, i) => (
                    <Typography
                      key={i}
                      fontFamily="Plus Jakarta Sans"
                      fontWeight={500}
                      lineHeight="30px"
                      letterSpacing="10%"
                      color="text.secondary"
                      sx={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        ':hover': {
                          color: 'text.primary',
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ) : null,
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: ['column', 'flex'],
          justifyContent: ['center', 'space-between'],
          py: ['14px', '20px', '30px'],
          px: ['20px', '20px', '20px', 0],
        }}
      >
        <Typography
          fontWeight={400}
          fontFamily="Plus Jakarta Sans"
          color="text.secondary"
          fontSize={['14px', '14px', '14px', '16px']}
        >
          © 2022 Booksaw. All rights reserved.
        </Typography>
        <Box display="flex" gap="20px" justifyContent="center" mt={['10px', 0]}>
          <Facebook fontSize="inherit" color="secondary" />
          <Instagram fontSize="inherit" color="secondary" />
          <Twitter fontSize="inherit" color="secondary" />
          <LinkedIn fontSize="inherit" color="secondary" />
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: '1px solid #E0E0E0',
          display: 'flex',
          justifyContent: 'center',
          py: ['14px', '20px', '20px'],
        }}
      >
        <Typography
          fontWeight={400}
          fontFamily="Plus Jakarta Sans"
          color="text.primary"
          fontSize="14px"
        >
          Made by
          <Link
            href="https://github.com/AshishBarvaliya"
            color="text.primary"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              cursor: 'pointer',
              px: '3px',
              ':hover': {
                color: 'red',
                fontWeight: 500,
              },
            }}
          >
            Ashish
          </Link>
          with
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/"
            color="text.primary"
            sx={{ cursor: 'pointer', px: '3px' }}
          >
            React
          </Link>
          &
          <Link
            href="https://mui.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="text.primary"
            sx={{ cursor: 'pointer', px: '3px' }}
          >
            MUI
          </Link>
          . Deployed on
          <Link
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="text.primary"
            sx={{ cursor: 'pointer', px: '3px' }}
          >
            Netlify
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  </Box>
)
