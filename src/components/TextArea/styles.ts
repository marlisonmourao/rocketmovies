import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme.white};

  border: none;
  border-radius: 1rem;
  padding: 1.6rem;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }
`
