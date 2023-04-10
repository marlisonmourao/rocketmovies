import {
  Container,
  Form,
  ButtonText,
  InputContainer,
  Tags,
  Buttons,
} from './styles'

import { Header } from '../../components/Header'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from '../../components/TextArea/styles'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export function NewNotes() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <ButtonText onClick={handleGoBack}>
        <FiArrowLeft />
        Voltar
      </ButtonText>

      <Form>
        <h2>Novo filme</h2>

        <InputContainer>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </InputContainer>

        <TextArea placeholder="Observações" />

        <Markers>Marcadores</Markers>

        <Tags>
          <Tag onClick={() => {}} value="" />

          <Tag onClick={() => {}} value="" isNew placeholder="Novo marcador" />
        </Tags>

        <Buttons>
          <Button color title="Excluir file" />
          <Button title="Excluir file" />
        </Buttons>
      </Form>
    </Container>
  )
}
