import { Container } from './styles'

interface Props {
  title: string
  color?: boolean
}

export function Button({ title, color = false }: Props) {
  return <Container background={color}>{title}</Container>
}
