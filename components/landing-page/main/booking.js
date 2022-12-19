import { Fragment } from 'react';
import { Button, Link, Text } from '../../utility';

const BookingComponent = ({bookings})=>{
    return(
        <Fragment>
            <div className='bookings' >
                {
                    bookings.map(({image, title, subtitle, text, url, id}) => {
                        return(
                            <div key={id} className='booking' >
                                <img src={image} alt='bookings' />
                                <div className='text-title'>
                                    <Text variant='booking-title'> {title} </Text>
                                    <Text variant='booking-sub-title'> {subtitle} </Text>
                                    <Button variant='book'> 
                                    <img src='/images/paper.png' alt='icon' />
                                    <Link url={url} variant='booking-link'> {text} </Link>
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx> {`
            .bookings{
                height: 559px;
                width: 1232px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 80px auto 70px;
            }
            .booking{
                height: 559.0001220703125px;
                width: 604px;
                position: relative;
            }
            .text-title{
                position: absolute;
                height: 163px;
                width: 389px;
                left: 114px;
                top: 68%;
                color: #fff;
                text-align: center;
            }
            `} </style>
        </Fragment>
    )
}

export default BookingComponent