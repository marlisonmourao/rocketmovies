import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 0 13.4rem;
`

export const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 6.3rem;
  color: ${({ theme }) => theme['pink-700']};
`

export const SubTitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme['gray-300']};
`

export const TextSignin = styled.p`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme['gray-100']};

  margin: 4.8rem 0;
`
