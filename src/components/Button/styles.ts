import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme['pink-700']};
  color: ${({ theme }) => theme['gary-600']};
  font-size: 1.6rem;

  border-radius: 1rem;
  margin-top: 1.6rem;
`
