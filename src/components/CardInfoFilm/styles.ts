import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 3.2rem;

  background: ${({ theme }) => theme['card-background']};
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  border: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};

  margin-bottom: 0.9rem;
`

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme['gray-200']};
  margin-bottom: 2rem;
  text-align: justify;
`

export const Tag = styled.strong`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme['gray-100']};

  background: ${({ theme }) => theme['gray-600']};
  border-radius: 0.8rem;
  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;
`
