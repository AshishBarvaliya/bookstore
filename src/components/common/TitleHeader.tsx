import { Box, Typography } from '@mui/material'
import theme from '../../theme/Theme'

interface ITitleHeader {
  title: string
  subTitle: string
}

export const TitleHeader: React.FC<ITitleHeader> = ({ title, subTitle }) => (
  <>
    <Typography
      color="text.secondary"
      fontFamily="Plus Jakarta Sans"
      fontSize="13px"
      fontWeight={500}
    >
      {subTitle}
    </Typography>
    <Box
      display="flex"
      mb={['30px', '35px', '50px']}
      mt={['10px', '15px', '20px']}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          height: '1px',
          backgroundColor: theme.palette.background.paper,
          flex: '1',
          mr: '80px',
        }}
      />
      <Typography
        variant="h1"
        fontSize={['30px', '35px', '48px']}
        color="text.primary"
      >
        {title}
      </Typography>
      <Box
        sx={{
          height: '1px',
          backgroundColor: theme.palette.background.paper,
          flex: '1',
          ml: '80px',
        }}
      />
    </Box>
  </>
)
