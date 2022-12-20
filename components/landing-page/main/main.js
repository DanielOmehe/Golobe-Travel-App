import { Fragment } from 'react'
import { Booking, FlightPlan, Places, Reviews } from '.'

const MainComponent = ({variant})=>{
    return(
        <Fragment>
            <main className={variant} >
                <FlightPlan variant='flight-plan' ></FlightPlan>
                <Places />
                <Booking 
                bookings={[
                    {
                        image: '/images/flight.png',
                        title: 'Flights',
                        subtitle: 'Search Flights & Places Hire to our most popular destinations',
                        url: '/flights',
                        text: 'Show Flights'
                    },
                    {
                        image: '/images/hotel.png',
                        title: 'Hotels',
                        subtitle: 'Search hotels & Places Hire to our most popular destinations',
                        url: '/hotels',
                        text: 'Show Hotels'
                    },
                ]}
                />
                <Reviews 
                reviews={[
                    {
                        heading: '“A real sense of community, nurtured”.',
                        subheading: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
                        image: '/images/review.png',
                        name: 'Olga',
                        studio: 'Weave Studios',
                        location: 'Kai Tak',
                        id: 1
                    },
                    {
                        heading: '“The facilities are superb. Clean, slick, bright.”',
                        subheading: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.                        ',
                        image: '/images/review2.png',
                        name: 'Thomas',
                        studio: 'Weave Studios',
                        location: 'Olympic',
                        id: 2
                    },
                    {
                        heading: '“A real sense of community, nurtured”.',
                        subheading: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
                        image: '/images/review3.png',
                        name: 'Elliot',
                        studio: 'Weave Studios',
                        location: 'Kai Tak',
                        id: 3
                    },
                ]}
                />
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

export default MainComponent