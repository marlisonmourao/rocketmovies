import { FiPlus } from 'react-icons/fi'
import { CardInfoFilme } from '../../components/CardInfoFilm'
import { Header } from '../../components/Header'
import {
  Container,
  ButtonCreate,
  Content,
  ContainerButtonCreate,
} from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <ContainerButtonCreate>
          <h1>Meus filmes</h1>
          <ButtonCreate>
            <FiPlus />
            Adicionar filme
          </ButtonCreate>
        </ContainerButtonCreate>

        <CardInfoFilme />
        <CardInfoFilme />
      </Content>
    </Container>
  )
}
