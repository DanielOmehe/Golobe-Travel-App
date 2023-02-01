import Main from "./main"
import Booking from './booking'
import Places from './places'
import Reviews from './reviews'
import { reviews } from '../../data/reviews'
import { bookings } from '../../data/booking'

const MainComponent = ()=>{
    return (
        <Main>
            <Places />
            <Booking bookings={bookings}/>
            <Reviews reviews={reviews}/>
        </Main>
    )
}

export default MainComponent