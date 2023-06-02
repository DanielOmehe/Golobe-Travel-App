import SectionTitle from "../../utility/section_title"
import { cities } from "../../data/cities";
import { PlacesWrapper, PlacesFlex, PlacesTitle, PlacesSubTitle } from "./style";

const bookings = ['Flights', 'Hotels', 'Resorts']
const Places = () => {
  return (
    <>
        <SectionTitle
        title='Plan your perfect trip'
        text='Search Flights & Places Hire to our most popular destinations.'
        btnText='See more places'
        />
        <PlacesWrapper>
        {
            cities.map((city)=> (
                <PlacesFlex key={city.id}>
                    <img src={city.image}/>
                    <div>
                        <PlacesTitle>{city.country}, {city.city}</PlacesTitle>
                        <PlacesSubTitle>{bookings.join(' . ')}</PlacesSubTitle>
                    </div>
                </PlacesFlex>
            ))
        }
        </PlacesWrapper>
    </>
  )
}

export default Places;