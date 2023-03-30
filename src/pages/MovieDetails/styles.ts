import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0rem 12.3rem;
`

export const Content = styled.div`
  padding: 8.1rem 0;
`

export const ButtonText = styled.span`
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme['pink-700']};
  margin-top: 4rem;

  display: flex;
  gap: 1rem;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4.7rem;
  color: ${({ theme }) => theme['gray-100']};

  margin: 2.4rem 0;
`

export const SubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 1.9rem;
  color: ${({ theme }) => theme['gray-100']};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const Name = styled.h1`
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 4.7rem;
  color: ${({ theme }) => theme['gray-100']};
`
export const UserWrapper = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const UserAvatar = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
`

export const DateWrapper = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 1.9rem;
  color: ${({ theme }) => theme['gray-100']};
  gap: 0.5rem;

  > svg {
    color: ${({ theme }) => theme['pink-700']};
  }
`

export const TagsContainer = styled.div`
  margin: 4rem 0;
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

export const Summary = styled.p`
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme['gray-100']};

  text-align: justify;
`
