import { Fragment } from "react";
import Text from "./text";

const CitiesComponent = ({cities, bookings})=>{
    return(
        <Fragment>
            {
                cities.map(({city, image, country, id}) => {
                    return(
                        <div key={id} className='city'>
                            <div className="image">
                                <img src={image} alt='city' />
                            </div>
                            <div className="city-title">
                                <Text variant='country-city' > {city}, {country} </Text>
                                <Text variant='country-bookings' > {bookings.join(' . ')} </Text>
                            </div>
                        </div>
                    )
                })
            }

            <style jsx> {`
            .city{
                height: 122px;
                width: 389.3333435058594px;
                border-radius: 10px;
                padding: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #fff;
                box-shadow: 2px -2px 16px rgba(0,0,0, .12)
            }
            .city-title{
                height: 45px;
                width: 251.33334350585938px;
            }
            `} </style>
        </Fragment>
    )
}

export default CitiesComponent