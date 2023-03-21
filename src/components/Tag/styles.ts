import styled from 'styled-components'

interface TypeTagProps {
  isNew: boolean
}

export const Container = styled.div<TypeTagProps>`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme['gray-700']};

  color: ${({ theme }) => theme['gray-400']};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme['gray-400']}` : 'none'};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme['pink-700']};
  }

  .button-add {
    color: ${({ theme }) => theme['pink-700']};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme['gray-400']};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme['gray-400']};
    }
  }
`
