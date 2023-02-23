import { Fragment } from 'react'
import { useState } from 'react'
import Button from '../../utility/button'
import Text from '../../utility/text'

const Reviews = ({reviews})=>{
    const [state, setstate] = useState(false);
    const [active, setActive] = useState(reviews[0].key)

    const onclickhandler = (key)=>{
        setstate((prevstate)=>!prevstate)
        setActive(key)
        console.log(active)
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
                            key
                        }) => {
                            return(
                                <div key={key} className='review-container'>
                                    <div className='review'>
                                        <div className='review-title'>
                                            <Text variant='review-heading'> {heading} </Text>
                                            <div className='sub-title'>
                                                <Text open={state} variant='review-sub-heading'> {subheading} </Text>
                                                <Text variant='viewmore' key={key} open={state} onclick={onclickhandler} > view more </Text>
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
                margin-bottom: 200px;
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
                box-shadow: 26px 26px 2px rgba(141, 211, 187, 0.4);
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
            `} </style>
        </Fragment>
    )
}

export default Reviews