import { Button } from "../style"
import { TextWrapper, Title, SectionWrapper, Text } from "./style"

const SectionTitle = () => {
  return (
    <SectionWrapper top='15rem'>
      <TextWrapper>
        <Title>Plan Your Perfect Trip</Title>
        <Text>Search Flights & Places Hire to our most popular destinations</Text>
      </TextWrapper>
      <Button color="#8DD3BB" border="#8DD3BB">See more Places</Button>
    </SectionWrapper>
  )
}

export default SectionTitle