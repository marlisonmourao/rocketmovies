import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  padding: 0 12.3rem;
`

export const ButtonText = styled.span`
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme['pink-700']};
  margin-top: 4rem;

  display: flex;
  gap: 1rem;
`

export const Form = styled.form`
  margin-top: 2.4rem;

  > h2 {
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  gap: 4rem;

  margin: 4rem 0;
`
