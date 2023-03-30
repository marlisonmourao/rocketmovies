import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import {
  ButtonGoBack,
  Container,
  Form,
  Header,
  ImageContainer,
  InputPhoto,
  LabelInputPhoto,
  UserAvatar,
  InputsWrapper,
} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

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

        <InputsWrapper>
          <Input icon={FiUser} value="Marlison Mourão" />
          <Input icon={FiMail} value="marlison@email.com" />
          <Input icon={FiLock} placeholder="Senha atual" />
          <Input icon={FiLock} placeholder="Nova senha" />
        </InputsWrapper>

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
