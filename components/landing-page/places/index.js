import SectionTitle from "../../utility/section_title"
import { cities } from "../../data/cities";
import { PlacesWrapper, PlacesFlex, PlacesTitle, PlacesSubTitle } from "./style";

const bookings = ['Flights', 'Hotels', 'Resorts']
const Places = () => {
  return (
    <>
        <SectionTitle/>
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