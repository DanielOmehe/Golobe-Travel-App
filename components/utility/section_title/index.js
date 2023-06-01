import { Button } from "../style"
import { TextWrapper, Title, SectionWrapper, Text } from "./style"

const SectionTitle = ({title, text, btnText}) => {
  return (
    <SectionWrapper top='15rem'>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrapper>
      <Button color="#000" border="#8DD3BB">{btnText}</Button>
    </SectionWrapper>
  )
}

export default SectionTitle