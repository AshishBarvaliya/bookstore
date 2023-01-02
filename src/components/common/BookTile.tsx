import { Box, Typography } from '@mui/material'
import { StyledImgContainer } from '../../styled/features'

interface IBookTile {
  image: string
  title: string
  author: string
  price: string
}

export const BookTile: React.FC<IBookTile> = ({
  image,
  title,
  author,
  price,
}) => (
  <Box
    sx={{
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
    }}
  >
    <StyledImgContainer>
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
      {price}
    </Typography>
  </Box>
)
