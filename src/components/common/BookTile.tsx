import { Box, Typography } from '@mui/material'
import { IBook } from '../../mockData/data'
import { StyledImgContainer } from '../../styled/features'
import theme from '../../theme/Theme'

interface IBookTile {
  bgcolor?: string
}

export const BookTile: React.FC<IBook & IBookTile> = ({
  image,
  title,
  author,
  price,
  discount,
  newPrice,
  bgcolor = '#efeee8',
}) => (
  <Box
    sx={{
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      width: ['265px', '265px', '200px', '265px'],
    }}
  >
    <StyledImgContainer bgcolor={bgcolor}>
      <img src={image} alt={title} width={265} />
      <Box
        className="add-to-cart"
        sx={{
          display: 'none',
          position: 'absolute',
          backgroundColor: 'black',
          color: 'white',
          width: '100%',
          fontFamily: 'Plus Jakarta Sans',
          py: '13px',
          mt: '-120px',
        }}
      >
        ADD TO CART
      </Box>
      {discount ? (
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: '#74642F',
            color: theme.palette.background.default,
            fontFamily: 'Plus Jakarta Sans',
            px: '9px',
            py: '4px',
            fontSize: '12px',
            mt: ['-330px', '-330px', '-250px', '-330px'],
            ml: ['40px', '40px', '30px', '40px'],
          }}
        >
          {discount}
        </Box>
      ) : null}
    </StyledImgContainer>
    <Typography fontSize="22px">{title}</Typography>
    <Typography
      fontSize="14px"
      fontFamily="Plus Jakarta Sans"
      pt={1}
      color="text.secondary"
    >
      {author}
    </Typography>
    <Typography fontSize="18px" pt="20px" color="#74642F">
      {newPrice ? (
        <Typography
          component="span"
          fontSize="14px"
          color="#999999"
          mr="6px"
          sx={{ textDecorationLine: 'line-through' }}
        >
          {price}
        </Typography>
      ) : null}
      {newPrice ?? price}
    </Typography>
  </Box>
)
