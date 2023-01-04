import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { IArticle } from '../../mockData/data'

export const ArticleTile: React.FC<IArticle> = ({
  image,
  title,
  tag,
  date,
}) => (
  <Box
    sx={{
      flexDirection: 'column',
      flex: 1,
      textAlign: 'start',
      width: ['300px', '300px', '280px', '350px'],
    }}
  >
    <img src={image} alt={title} width="100%" />
    <Typography fontSize="15px" color="#74642F" pt="15px" fontWeight={400}>
      {date}
    </Typography>
    <Typography fontSize="26px" pt="10px" fontWeight={400} lineHeight="40px">
      {title}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid #C8C8C8',
        alignItems: 'center',
        pt: '10px',
        mt: '30px',
      }}
    >
      <Typography
        fontSize="15px"
        fontFamily="Plus Jakarta Sans"
        color="#777777"
        textTransform="uppercase"
        fontWeight={400}
      >
        {tag}
      </Typography>
      <Box display="flex" gap="12px" fontSize="13px">
        <Facebook fontSize="inherit" color="secondary" cursor="pointer" />
        <Instagram fontSize="inherit" color="secondary" cursor="pointer" />
        <Twitter fontSize="inherit" color="secondary" cursor="pointer" />
      </Box>
    </Box>
  </Box>
)
