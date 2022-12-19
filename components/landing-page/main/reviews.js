import { Fragment } from 'react'
import { useState } from 'react'
import { Button, Link, Text } from '../../utility'

const ReviewComponent = ({reviews})=>{
    const [state, setstate] = useState(false);

    const spread = ()=>{
        setstate((prevState) => !prevState)
    }
    return(
        <Fragment>
            <div className='reviews'>
                <div className='reviews-title-row'>
                    <div className='reviews-title'>
                        <Text variant='reviews-heading'> Reviews </Text>
                        <Text variant='reviews-sub-heading'> What people says about Golobe facilities </Text>
                    </div>
                    <Button variant='more-reviews'> See all </Button>
                </div>
                <div className='review-row'>
                    {
                        reviews.map(({
                            heading, 
                            subheading, 
                            image,
                            name,
                            studio,
                            location,
                            id
                        }) => {
                            return(
                                <div key={id} className='review-container'>
                                    <div className='review'>
                                        <div className='review-title'>
                                            <Text variant='review-heading'> {heading} </Text>
                                            <div className='sub-title'>
                                                <Text open={state} variant='review-sub-heading'> {subheading} </Text>
                                                <Text variant='viewmore' open={state} grow={spread}> view more </Text>
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
                                    </div>
                                    <div className='shadow' >
                                        <img src='/images/shadow.png' alt='shadow' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <style jsx> {`
            .reviews{
                height: 722px;
                width: 1396px;
                margin-left: 154px;
            }
            .reviews-title-row{ 
                height: 72px;
                width: 1232px;
                margin-bottom: 40px;
                display: flex;  
                align-items: center;
                justify-content: space-between;              
            }
            .reviews-title{
                height: 72px;
                width: 1128px;
            }
            .review-row{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .review-container{
                height: 608px;
                width: 450px;
                position: relative;
            }
            .review{
                height: ${state ? 600 : 584}px;
                width: 425px;
                left: -1px;
                top: 0px;
                border-radius: 20px;
                padding: 24px;
                background: #fff;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
            .review-title{
                height: 296px;
                width: 377px;
            }
            .sub-title{
                height: ${state ? 105 : 67}px;
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
            .shadow{
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 0;
            }
            `} </style>
        </Fragment>
    )
}

export default ReviewComponent