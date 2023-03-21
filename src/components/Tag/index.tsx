import { InputHTMLAttributes } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean
  value: string
  onClick: () => void
}

export function Tag({ isNew = false, value, onClick, ...rest }: Props) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
