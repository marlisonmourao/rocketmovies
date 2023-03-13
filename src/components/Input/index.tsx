import { InputHTMLAttributes } from 'react'

import { IconType } from 'react-icons'
import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
}

export function Input({ icon: Icon, ...rest }: Props) {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input {...rest} />
    </Container>
  )
}
