import { Box } from '@mui/system'
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  PersonOutlineOutlined,
  ShoppingBagOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@mui/icons-material'
import { Container } from './Container'
import { Link } from '@mui/material'
import theme from '../theme/Theme'
import { ReactNode } from 'react'

interface INavLinks {
  link: string
  icon: ReactNode
}

export const Header: React.FC = () => {
  const navLinks: INavLinks[] = [
    {
      link: 'accont',
      icon: <PersonOutlineOutlined sx={{ fontSize: '13px', mr: '8px' }} />,
    },
    {
      link: 'cart',
      icon: <ShoppingBagOutlined sx={{ fontSize: '13px', mr: '8px' }} />,
    },
    {
      link: 'search',
      icon: <SearchOutlined sx={{ fontSize: '13px', mr: '8px' }} />,
    },
  ]

  const mainNavLinks: string[] = [
    'home',
    'about',
    'pages',
    'shop',
    'articles',
    'contact',
  ]

  return (
    <Box>
      <Box
        sx={{
          fontSize: '13px',
          borderBottom: '1px solid #A1A19F',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            py: '8px',
            justifyContent: 'space-between',
          }}
        >
          <Box display="flex" gap="12px">
            <Facebook fontSize="inherit" color="secondary" cursor="pointer" />
            <Instagram fontSize="inherit" color="secondary" cursor="pointer" />
            <Twitter fontSize="inherit" color="secondary" cursor="pointer" />
            <LinkedIn fontSize="inherit" color="secondary" cursor="pointer" />
          </Box>
          <Box display="flex">
            {navLinks.map((nav: INavLinks, ind: number) => (
              <Link
                key={nav.link}
                component="button"
                fontSize="10px"
                color="text.secondary"
                textTransform="uppercase"
                textAlign="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  borderRight={
                    ind + 1 === navLinks.length ? 'none' : '1px solid #A1A19F'
                  }
                  marginLeft="15px"
                  paddingRight={ind + 1 === navLinks.length ? 0 : '15px'}
                >
                  {nav.icon}
                  <text>{nav.link}</text>
                </Box>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
      <Box bgcolor={theme.palette.background.default}>
        <Container
          sx={{
            display: 'flex',
            py: '8px',
            justifyContent: 'space-between',
            pl: '12px !important',
            alignItems: 'center',
          }}
        >
          <img
            src="logo.png"
            width={180}
            alt="logo"
            style={{ cursor: 'pointer' }}
          />
          <Box display="flex" gap="16px">
            {mainNavLinks.map((label: string) => (
              <Link
                key={label}
                component="button"
                sx={{
                  display: ['none', 'none', 'block'],
                  fontSize: '14px',
                  color: 'text.primary',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginLeft: '15px',
                  textDecoration: 'none',
                  ':hover': {
                    color: '#be4d25',
                  },
                }}
              >
                {label}
              </Link>
            ))}
            <MenuOutlined
              color="secondary"
              sx={{
                color: 'text.primary',
                marginLeft: '25px',
                cursor: 'pointer',
                ':hover': {
                  color: '#be4d25',
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
