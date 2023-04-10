import {
  Container,
  Heading,
  InputSearch,
  AvatarContainer,
  UserAvatar,
  UserContainer,
} from './styles'

import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleProfile() {
    navigate('/profile')
  }

  return (
    <Container>
      <Heading>RocketMovies</Heading>
      <InputSearch placeholder="Pesquisar pelo titulo" />

      <AvatarContainer>
        <UserContainer>
          <strong>Marlison Mourão</strong>
          <button>sair</button>
        </UserContainer>

        <button onClick={handleProfile}>
          <UserAvatar src="https://github.com/marlisonmourao.png" />
        </button>
      </AvatarContainer>
    </Container>
  )
}
