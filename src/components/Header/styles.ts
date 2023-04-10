import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;

  display: flex;
  align-items: center;
  gap: 6.3rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3e3b47;
`

export const Heading = styled.h2`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme['pink-700']};
`

export const InputSearch = styled.input`
  width: 100%;
  height: 5.6rem;

  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 1rem;

  padding: 0 2.4rem;
`

export const AvatarContainer = styled.div`
  display: flex;
  width: 28rem;
  align-items: center;
  justify-content: flex-end;

  gap: 0.8rem;

  > button {
    border: none;
    background-color: transparent;
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* background-color: blue; */

  > strong {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${({ theme }) => theme['gray-100']};
    text-align: end;
  }

  > button {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme['gray-400']};

    border: none;
    background: transparent;
  }
`

export const UserAvatar = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
`
