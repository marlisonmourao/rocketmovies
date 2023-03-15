import { TextareaHTMLAttributes } from 'react'
import { Container } from './styles'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ value, ...rest }: Props) {
  return <Container {...rest}>{value}</Container>
}
