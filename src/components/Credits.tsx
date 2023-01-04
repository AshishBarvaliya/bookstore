import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export const Credits: React.FC = () => (
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
      . Figma by
      <Link
        href="https://templatesjungle.com/"
        target="_blank"
        rel="noopener noreferrer"
        color="text.primary"
        sx={{ cursor: 'pointer', px: '3px' }}
      >
        TemplatesJungle
      </Link>
      .
    </Typography>
  </Box>
)
