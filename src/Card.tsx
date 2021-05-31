import { CardContainer } from "./styles"

type CardProps = {
    text: string
    id: string
}

export const Card = ({ text, id }: CardProps) => {
    return <CardContainer key={id}>{text}</CardContainer>
}