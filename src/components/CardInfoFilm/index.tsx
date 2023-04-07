import { ButtonHTMLAttributes } from 'react'
import { Container, Description, Tag, Title } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CardInfoFilme({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>Interestellar</Title>
      <Description>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma
        inteligência desconhecida que está enviando mensagens codificadas
      </Description>

      <div>
        <Tag>Ficcção</Tag>
        <Tag>series</Tag>
      </div>
    </Container>
  )
}
