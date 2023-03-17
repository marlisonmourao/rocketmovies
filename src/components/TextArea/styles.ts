import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 21rem;
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

export const Markers = styled.p`
  font-size: 2rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme['gray-200']};
  font-weight: normal;

  margin-top: 4rem;
`

export const Tags = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 4rem;

  border-radius: 0.8rem;
  display: flex;
  gap: 2.4rem;
`
