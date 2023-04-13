import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  colorButton?: boolean
}

export function Button({ title, colorButton = false, ...rest }: Props) {
  return (
    <Container {...rest} background={colorButton}>
      {title}
    </Container>
  )
}
