import { Container } from './styles'

interface Props {
  title: string
}

export function Button({ title }: Props) {
  return <Container>{title}</Container>
}