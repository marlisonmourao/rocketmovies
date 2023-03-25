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
  width: 100%;

  display: flex;
  justify-content: center;
  margin: -9.4rem auto;
`

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
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
