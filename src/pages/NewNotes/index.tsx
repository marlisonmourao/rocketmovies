import { Container, Form, ButtonText, InputContainer } from './styles'

import { Header } from '../../components/Header'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers, Tags } from '../../components/TextArea/styles'

export function NewNotes() {
  return (
    <Container>
      <Header />

      <ButtonText>
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

        <Tags></Tags>
      </Form>
    </Container>
  )
}
