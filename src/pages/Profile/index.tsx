import { FiArrowLeft, FiCamera } from 'react-icons/fi'
import {
  ButtonGoBack,
  Container,
  Form,
  Header,
  ImageContainer,
  InputPhoto,
  LabelInputPhoto,
  UserAvatar,
} from './styles'

export function Profile() {
  return (
    <Container>
      <Header>
        <ButtonGoBack>
          <FiArrowLeft />
          Voltar
        </ButtonGoBack>
      </Header>

      <Form>
        <ImageContainer>
          <UserAvatar src="https://github.com/marlisonmourao.png" />
          <LabelInputPhoto>
            <FiCamera />
            <InputPhoto type="file" />
          </LabelInputPhoto>
        </ImageContainer>
      </Form>
    </Container>
  )
}
