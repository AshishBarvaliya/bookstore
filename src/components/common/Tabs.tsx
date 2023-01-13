import { Box, Typography } from '@mui/material'
import React, { ReactNode, useState } from 'react'

interface ITabsIteam {
  id: string
  title: string
  component: ReactNode
}

interface ITabs {
  tabsItems: ITabsIteam[]
}

export const Tabs: React.FC<ITabs> = ({ tabsItems }) => {
  const [selected, setSelected] = useState(tabsItems[0].id)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: ['start', 'center'],
          gap: '20px',
          pb: '16px',
          mb: '16px',
          overflowX: ['scroll', 'hidden'],
          px: ['16px', '8px', '4px'],
        }}
      >
        {tabsItems.map((item: ITabsIteam) => (
          <Typography
            component="span"
            key={item.id}
            color={selected === item.id ? 'text.primary' : '#7A7A7A'}
            fontFamily="Plus Jakarta Sans"
            fontSize="16px"
            fontWeight={500}
            whiteSpace="nowrap"
            onClick={() => setSelected(item.id)}
            borderBottom={selected === item.id ? '1px solid #222222' : 'none'}
          >
            {item.title}
          </Typography>
        ))}
      </Box>
      {tabsItems.map((item: ITabsIteam) => (
        <Box key={item.id} display={selected === item.id ? 'block' : 'none'}>
          {item.component}
        </Box>
      ))}
    </>
  )
}
