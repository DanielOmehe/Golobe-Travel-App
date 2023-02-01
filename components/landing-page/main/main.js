import { Fragment } from 'react'
import Booking from './booking'
import Places from './places'
import Reviews from './reviews'
import { reviews } from '../../data/reviews'
import { bookings } from '../../data/booking'

const Main = ({variant})=>{
    return(
        <Fragment>
            <main className={variant} >
                <Places />
                <Booking bookings={bookings}/>
                <Reviews reviews={reviews}/>
            </main>
            <style jsx> {`
            .landing-page-main{
                background: #ededed;
                position: relative;
                padding-top: 263px;
                padding-bottom: 200px;
            }
            `} </style>
        </Fragment>
    )
}

export default Main