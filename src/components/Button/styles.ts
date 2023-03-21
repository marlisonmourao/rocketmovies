import styled from 'styled-components'

interface PropsColorButton {
  background: boolean
}

export const Container = styled.button<PropsColorButton>`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme, background }) =>
    background ? '#0000' : theme['pink-700']};

  color: ${({ theme, background }) =>
    background ? theme['pink-700'] : theme['gray-600']};
  font-size: 1.6rem;

  border-radius: 1rem;
  border: none;
  margin-top: 1.6rem;
`
