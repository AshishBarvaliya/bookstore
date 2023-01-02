import styled from '@emotion/styled'

export const StyledImgContainer = styled.div<{ bgcolor: string }>`
  background-color: ${(p) => p.bgcolor};
  margin-bottom: 24px;
  border: 1px solid #eae8df;
  cursor: pointer;
  position: relative;

  @media (max-width: 1025px) {
    width: 200px;
    img {
      width: 200px;
    }
  }
  @media (max-width: 900px) {
    width: 265px;
    img {
      width: 265px;
    }
  }

  :hover {
    .add-to-cart {
      display: block;
    }
  }
`
