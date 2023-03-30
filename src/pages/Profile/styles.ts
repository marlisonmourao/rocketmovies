import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Header = styled.header`
  height: 14.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme['pink-100']};
  display: flex;
  align-items: center;
`

export const ButtonGoBack = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme['pink-700']};

  font-size: 1.6rem;

  display: flex;
  gap: 1rem;
  padding-left: 14.6rem;
`

export const Form = styled.form`
  width: 34rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: -9.4rem auto;

  flex-direction: column;
`

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
`

export const UserAvatar = styled.img`
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
`

export const LabelInputPhoto = styled.label`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme['pink-700']};
  position: absolute;
  bottom: 0.7rem;
  right: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  > svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme['gray-600']};
  }
`

export const InputPhoto = styled.input`
  display: none;
`

export const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6.4rem;
  flex-direction: column;
`
