import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme['gray-700']};
  border-radius: 1rem;
  margin-bottom: 0.8rem;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.white};

    border: 0;
    background: transparent;

    ::placeholder {
      color: ${({ theme }) => theme['gray-400']};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme['gray-400']};
  }
`
