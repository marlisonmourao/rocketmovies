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

  cursor: pointer;
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

export const Tags = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 1.6rem;

  margin-top: 2.4rem;

  border-radius: 0.8rem;
  display: flex;
  gap: 2.4rem;
  border-radius: 0.8rem;
`

export const Buttons = styled.div`
  margin-top: 3rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 4rem;

  padding-bottom: 4rem;
`
