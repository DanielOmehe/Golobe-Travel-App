import { useState } from 'react';
import { ReviewWrapper, Review, ReviewTitle, ReviewSub, TextShorten, ReviewButton, ReviewName, ReviewStudio, ReviewGoogle, ReviewStars } from './style';
import { reviews } from '../../data/reviews';
import { TextWrapper, Title, SectionWrapper, Text,  } from '../../utility/section_title/style';
import { Button } from '../../utility/style';

const Reviews = () => {
    // useState to use an object with review ids as keys and booleans as values
    const [isExpanded, setIsExpanded] = useState({})
    const handleClick = (index) => {
        //handleClick to toggle the value of the corresponding key in the object
        setIsExpanded(prev => ({...prev, [index]: !prev[index]}));
    };
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
            {/* mapping through reviews array of object */}
            {
                reviews.map((review, index) => (
                    <Review key={review.id}>
                        <ReviewTitle>{review.heading}</ReviewTitle>
                        <ReviewSub>
                            {/* Expanding text based on the isExpaneded condition */}
                            {
                             isExpanded[index]  ?     
                                            <p> {review.subheading}</p>
                                        : 
                                       <TextShorten>
                                            {review.subheading}
                                        </TextShorten> 
                            }
                        </ReviewSub>
                        <ReviewButton onClick={() => handleClick(index)} >{isExpanded[index]  ? 'View Less' : 'View more'}</ReviewButton>
                        <ReviewStars>
                            {/* created an array of length five and map through it to display rating stars */}
                            {[...Array(5)].map((_,index) => (
                                <img key={index} src={review.stars} />
                            ))}
                        </ReviewStars>
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