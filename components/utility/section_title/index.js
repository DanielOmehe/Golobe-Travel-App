import { Button } from "../style"
import { TextWrapper, Title, SectionWrapper, Text } from "./style"

const SectionTitle = ({ title, text, btnText }) => {
  return (
    <SectionWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrapper>
      <Button color="#8DD3BB" border="#8DD3BB">{btnText}</Button>
    </SectionWrapper>
  )
}

export default SectionTitle