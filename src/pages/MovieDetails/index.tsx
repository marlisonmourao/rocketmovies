import { FiArrowLeft } from 'react-icons/fi'
import { TbClockHour4 } from 'react-icons/tb'
import { Header } from '../../components/Header'
import {
  ButtonText,
  Container,
  Content,
  Title,
  Wrapper,
  UserWrapper,
  DateWrapper,
  UserAvatar,
  Name,
  Tag,
  TagsContainer,
} from './styles'

export function MovieDetails() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText>
          <FiArrowLeft />
          Voltar
        </ButtonText>

        <Title>Interestellar</Title>

        <Wrapper>
          <UserWrapper>
            <UserAvatar src="https://github.com/marlisonmourao.png" />
            <Name>Por Rodrigo Gonçalves </Name>
          </UserWrapper>

          <DateWrapper>
            <TbClockHour4 />
            <span>23/05/22</span>
            <span>ás</span>
            <span>08:00</span>
          </DateWrapper>
        </Wrapper>

        <TagsContainer>
          {' '}
          <Tag>Ficcção</Tag>
          <Tag>series</Tag>
        </TagsContainer>
      </Content>
    </Container>
  )
}
