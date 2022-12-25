import { SxProps } from '@mui/material'
import { Container as MUIContainer } from '@mui/system'
import { ReactNode } from 'react'

interface IContainer {
  children?: ReactNode
  sx?: SxProps
}

export const Container: React.FC<IContainer> = ({ children, sx }) => {
  return <MUIContainer sx={sx}>{children}</MUIContainer>
}
