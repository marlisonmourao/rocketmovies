import styled from 'styled-components'

export const Container = styled.header`
  height: 100vh;
  width: 100%;

  padding: 0 12.3rem;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 'header' 'content';
`

export const Content = styled.main`
  grid-area: content;
`

export const ContainerButtonCreate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: normal;
    line-height: 4.2rem;
    color: ${({ theme }) => theme.white};
  }
`

export const ButtonCreate = styled.button`
  border: none;
  padding: 1.35rem 1rem;
  background: ${({ theme }) => theme['pink-700']};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`
