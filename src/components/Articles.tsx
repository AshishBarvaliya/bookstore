import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Button, Card } from '@mui/material'
import { articlesData } from '../mockData/data'
import theme from '../theme/Theme'
import { ArticleTile } from './common/ArticleTile'
import { TitleHeader } from './common/TitleHeader'
import { Container } from './Container'

export const Articles: React.FC = () => {
  return (
    <Box
      sx={{
        py: ['80px', '120px', '170px'],
        background: theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          paddingX: '0 !important',
          textAlign: 'center',
        }}
      >
        <TitleHeader title="Latest Articles" subTitle="Read our articles" />
        <Card
          sx={{
            display: 'flex',
            position: 'relative',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            gap: '40px',
            pb: '50px',
            px: ['30px', '30px', '0px'],
            justifyContent: 'center',
          }}
        >
          {articlesData.map((item, index) => (
            <Box
              key={item.id}
              display={[
                index > 0 ? 'none' : 'block',
                index > 1 ? 'none' : 'block',
                'block',
              ]}
            >
              <ArticleTile {...item} />
            </Box>
          ))}
        </Card>
        <Button
          variant="outlined"
          sx={{
            color: 'text.primary',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            letterSpacing: '10%',
            px: '30px',
            py: '10px',
            border: '1px solid #C0C0C0',
            mt: '10px',
          }}
        >
          READ ALL ARTICLES
          <ArrowRightAlt sx={{ fontSize: '17px', ml: '6px' }} />
        </Button>
      </Container>
    </Box>
  )
}
