import { FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { CardInfoFilme } from '../../components/CardInfoFilm'
import { Header } from '../../components/Header'
import {
  Container,
  ButtonCreate,
  Content,
  ContainerButtonCreate,
} from './styles'

export function Home() {
  const navigate = useNavigate()

  function handleCreateNewMovie() {
    navigate('/new')
  }

  function handleMovieDetails() {
    navigate('/details')
  }

  return (
    <Container>
      <Header />

      <Content>
        <ContainerButtonCreate>
          <h1>Meus filmes</h1>
          <ButtonCreate onClick={handleCreateNewMovie}>
            <FiPlus />
            Adicionar filme
          </ButtonCreate>
        </ContainerButtonCreate>

        <CardInfoFilme onClick={handleMovieDetails} />
      </Content>
    </Container>
  )
}
