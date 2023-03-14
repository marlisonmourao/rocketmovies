import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi'

import {
  Container,
  SubTitle,
  TextSignin,
  Title,
  Form,
  ButtonBack,
  Background,
} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Form>
        <Title>RocketMovies</Title>
        <SubTitle>Aplicação para acompanhar tudo que assistir.</SubTitle>

        <TextSignin>Faça seu login</TextSignin>

        <Input icon={FiUser} placeholder="Nome" />

        <Input icon={FiMail} placeholder="E-mail" />

        <Input icon={FiLock} placeholder="Senha" />

        <Button title="Cadastrar" />

        <ButtonBack>
          <FiArrowLeft />
          Voltar para o login
        </ButtonBack>
      </Form>

      <Background />
    </Container>
  )
}
