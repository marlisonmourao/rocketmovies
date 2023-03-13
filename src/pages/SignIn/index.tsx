import { FiLock, FiMail } from 'react-icons/fi'

import {
  Container,
  SubTitle,
  TextSignin,
  Title,
  Form,
  ButtonNew,
  Background,
} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <Title>RocketMovies</Title>
        <SubTitle>Aplicação para acompanhar tudo que assistir.</SubTitle>

        <TextSignin>Faça seu login</TextSignin>

        <Input icon={FiMail} placeholder="E-mail" />

        <Input icon={FiLock} placeholder="Senha" />

        <Button title="Entrar" />

        <ButtonNew>Criar conta</ButtonNew>
      </Form>

      <Background />
    </Container>
  )
}
