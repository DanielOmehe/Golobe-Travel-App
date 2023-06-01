import React from 'react'
import SectionTitle from '../../utility/section_title'
import { DetailsBox, FlightBtn, FlightPrize, PlacesBg, PlacesFlex, PlacesSubTitle, PlacesTitle, PlacesWrapper } from './style'
import { locations } from '../../data/locations'

const Locations = () => {
  return (
    <>
    <SectionTitle 
    title='Fall into travel'
    text= "Going somewhere to celebrate this season? Whether you are going home or somewhere to roam, we've got the travel tools to get you to your destination"
    btnText='See All'
    />
    <PlacesWrapper>
        {locations.map((city, index)=>{
            return(
                <PlacesFlex key={index}>
                    <PlacesBg src={city.image} />
                    <DetailsBox>
                        <div>
                        <PlacesTitle>{city.city}</PlacesTitle>
                        <PlacesSubTitle>{city.text}</PlacesSubTitle>
                        </div>
                        <FlightPrize>{city.prize}</FlightPrize>
                    </DetailsBox>
                    <FlightBtn>Book Flight</FlightBtn>
            </PlacesFlex>
            )
        })}
    </PlacesWrapper>
    </>
  )
}

export default Locations
