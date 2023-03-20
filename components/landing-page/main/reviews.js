import Button from '../../utility/button'
import Text from '../../utility/text'

const Reviews = ({ children})=>{
    return(
        <>
            <div className='reviews'>
                <div className='reviews-title-row'>
                    <div className='reviews-title'>
                        <Text variant='reviews-heading'> Reviews </Text>
                        <Text variant='reviews-sub-heading'> What people says about Golobe facilities </Text>
                    </div>
                    <Button variant='more-reviews'> See all </Button>
                </div>
                <div className='review-row'>{children}</div>
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
                    justify-content: center;
                    margin-bottom: 200px;
                    height: auto;
                    position: relative;
                }
            `} </style>
        </>
    )
}

export default Reviews