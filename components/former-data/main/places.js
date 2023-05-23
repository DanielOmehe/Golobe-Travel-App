import { Fragment } from 'react'
import Button from '../../utility/button'
import Cities from '../../utility/cities'
import Text from '../../utility/text'
import { cities } from '../../data/cities'

const places = ['flights', 'hotels', 'resorts']
const Places = ({})=>{
    return(
        <Fragment>
            <div className='places'>
                <div className='places-title-row' >
                    <div className='places-title'>
                        <Text variant='places-heading' > Plan Your Perfect Trip </Text>
                        <Text variant='places-sub-heading' > Search Flights & Places Hire to our most popular destinations </Text>
                    </div>
                    <Button variant='places-button'> See more places </Button>
                </div>
                <div className='places-row'>
                    <Cities bookings={places} cities={cities} />
                </div>
                <div className='places-row'>
                    <Cities 
                    bookings={places}
                    cities={[
                        {
                            city: 'Male',
                            image: '/images/male.png',
                            country: 'Maldives',
                            id: 1
                        },
                        {
                            city: 'Paris',
                            image: '/images/paris.png',
                            country: 'France',
                            id: 2
                        },
                        {
                            city: 'New York',
                            image: '/images/newyork.png',
                            country: 'US',
                            id: 3
                        },
                    ]}
                    />
                </div>
                <div className='places-row'>
                    <Cities 
                    bookings={places}
                    cities={[
                        {
                            city: 'London',
                            image: '/images/london.png',
                            country: 'UK',
                            id: 1
                        },
                        {
                            city: 'Tokyo',
                            image: '/images/tokyo.png',
                            country: 'Japan',
                            id: 2
                        },
                        {
                            city: 'Dubai',
                            image: '/images/dubai.png',
                            country: 'UAE',
                            id: 3
                        },
                    ]}
                    />
                </div>
            </div>
            <style jsx> {`
                .places{
                    height: 542px;
                    width: 1232px;
                    margin: 0 auto;
                }
                .places-title-row{
                    height: 72px;
                    width: 1232px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                }
                .places-title{
                    height: 72px;
                    width: 1059px;
                }
                .places-row{
                    height: 122px;
                    width: 1232px;
                    margin-bottom: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `} </style>
        </Fragment>
    )

}

export default Places