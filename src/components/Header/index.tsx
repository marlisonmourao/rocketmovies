import {
  Container,
  Heading,
  InputSearch,
  AvatarContainer,
  UserAvatar,
  UserContainer,
} from './styles'

export function Header() {
  return (
    <Container>
      <Heading>RocketMovies</Heading>
      <InputSearch placeholder="Pesquisar pelo titulo" />

      <AvatarContainer>
        <UserContainer>
          <strong>Marlison Mourão</strong>
          <button>sair</button>
        </UserContainer>

        <UserAvatar src="https://github.com/marlisonmourao.png" />
      </AvatarContainer>
    </Container>
  )
}
