import { Box, Card } from '@mui/material'
import { books, IBook, IPopularBook, popularBooks } from '../mockData/data'
import theme from '../theme/Theme'
import { BookTile } from './common/BookTile'
import { Tabs } from './common/Tabs'
import { TitleHeader } from './common/TitleHeader'
import { Container } from './Container'

export const PopularBooks: React.FC = () => {
  return (
    <Box
      sx={{
        pt: ['60px', '100px', '140px'],
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          paddingX: '0 !important',
          textAlign: 'center',
        }}
      >
        <TitleHeader title={'Popular Books'} subTitle={'Some quality items'} />
        <Tabs
          tabsItems={popularBooks.map((book: IPopularBook) => ({
            ...book,
            component: (
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'none',
                  backgroundColor: 'background.default',
                  borderBottom: '2px solid #EDEBE4',
                  pb: '50px',
                  px: ['30px', '30px', '0px'],
                  justifyContent: 'center',
                  mt: '32px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    gap: '40px',
                    justifyContent: 'center',
                  }}
                >
                  {books.slice(0, 4).map((book: IBook, ind: number) => (
                    <Box
                      key={book.id}
                      display={[
                        ind > 0 ? 'none' : 'block',
                        ind > 1 ? 'none' : 'block',
                        'block',
                      ]}
                    >
                      <BookTile {...book} />
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    gap: '40px',
                    justifyContent: 'center',
                    mt: '30px',
                  }}
                >
                  {books.slice(4, 8).map((book: IBook, ind: number) => (
                    <Box
                      key={book.id}
                      display={[
                        ind > 0 ? 'none' : 'block',
                        ind > 1 ? 'none' : 'block',
                        'block',
                      ]}
                    >
                      <BookTile {...book} />
                    </Box>
                  ))}
                </Box>
              </Card>
            ),
          }))}
        />
      </Container>
    </Box>
  )
}
