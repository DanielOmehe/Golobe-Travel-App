import Card from "../../utility/card"

const Review =({heading, subheading, name, studio, location, height})=>{
    return(
        <>
            <Card className='review'>
                <div className='review-title'>
                    <Text variant='review-heading'> {heading} </Text>
                    <div className='sub-title'>
                        <Text open={state} variant='review-sub-heading'> {subheading} </Text>
                        <Text variant='viewmore' open={state} onclick={onclickhandler} > view more </Text>
                    </div>
                    <div className='more-reviews'>
                        <div className='stars'>
                            <img src='/images/star.png' alt='star' />
                            <img src='/images/star.png' alt='star' />
                            <img src='/images/star.png' alt='star' />
                            <img src='/images/star.png' alt='star' />
                            <img src='/images/star.png' alt='star' />
                        </div>
                        <div className='review-text'>
                            <div className='text'>
                                <Text variant='name'>{name}</Text>
                                <Text variant='location'>{studio} - {location}</Text>
                            </div>
                            <div className='google'>
                                <img src='/images/google.png' alt='google' />
                                <Text variant='google-text'> Google </Text>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={image} alt='review-image' />
                    </div>
                </div>
            </Card>
            <style jsx>{`
                .review-title{
                    height: 296px;
                    width: 377px;
                }
                .sub-title{
                    height: 67px;
                    width: 377px;
                    margin-bottom: 16px;
                }
                .stars{
                    height: 24px;
                    width: 377px;
                    margin-bottom: 20px;
                }
                .stars img{
                    margin-left: 12px;
                }
                .stars img:nth-child(1){
                    margin-left: 0;
                }
                .review-text{
                    height: 73px;
                    width: 377px;
                }
                .text{
                    height: 37px;
                    width: 377px;
                }
                .google{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                .image{
                    margin-top: 40px;
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default Review