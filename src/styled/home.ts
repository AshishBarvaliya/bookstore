import styled from '@emotion/styled'
import theme from '../theme/Theme'

export const StyledContainer = styled.div`
  background-color: ${theme.palette.background.default};

  .Banner {
    position: relative;
    box-shadow: none;
    background-color: ${theme.palette.background.default};

    .BannerFlex {
      display: flex;
      height: 100%;
      position: relative;
    }
  }
`
