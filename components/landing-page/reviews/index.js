import { ReviewWrapper, Review, ReviewTitle, ReviewSub, ReviewButton, ReviewName, ReviewStudio, ReviewGoogle } from './style';
import { reviews } from '../../data/reviews';
import { TextWrapper, Title, SectionWrapper, Text,  } from '../../utility/section_title/style';
import { Button } from '../../utility/style';

const Reviews = () => {
  return (
    <>
        <SectionWrapper>
            <TextWrapper>
                <Title>Reviews</Title>
                <Text>What people says about Golobe facilities</Text>
            </TextWrapper>
            <Button color="#8DD3BB" border="#8DD3BB">See All</Button>
        </SectionWrapper>
        <ReviewWrapper>
            {
                reviews.map((review) => (
                    <Review key={review.id}>
                        <ReviewTitle>{review.heading}</ReviewTitle>
                        <ReviewSub>{review.subheading}</ReviewSub>
                        <ReviewButton>View more</ReviewButton>
                        <p>
                            {[...Array(5)].map((_,index) => (
                                <img key={index} src={review.stars} />
                            ))}
                        </p>
                        <ReviewName>{review.name}</ReviewName>
                        <ReviewStudio>{review.studio} - {review.location}</ReviewStudio>
                        <ReviewGoogle>
                            <img src={review.google}/>
                            Google
                        </ReviewGoogle>
                        <img src={review.image}/>
                    </Review>
                ))
            }
        </ReviewWrapper>
    </>
  )
}

export default Reviews