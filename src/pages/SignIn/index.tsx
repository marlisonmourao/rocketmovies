import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLock, FiMail } from 'react-icons/fi'
import { useAuth } from '../../hooks/useAuth'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  const navigation = useNavigate()

  function handleSignin() {
    signIn(email, password)
  }

  function handleSignUp() {
    navigation('signup')
  }

  return (
    <Container>
      <Form>
        <Title>RocketMovies</Title>
        <SubTitle>Aplicação para acompanhar tudo que assistir.</SubTitle>

        <TextSignin>Faça seu login</TextSignin>

        <Input
          icon={FiMail}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignin} />

        <ButtonNew onClick={handleSignUp}>Criar conta</ButtonNew>
      </Form>

      <Background />
    </Container>
  )
}
