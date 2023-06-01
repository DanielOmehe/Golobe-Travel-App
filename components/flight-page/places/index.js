import React from 'react'
import SectionTitle from '../../utility/section_title'
import { PlacesCover, PlacesWrapper } from './style'


const Places = () => {
  return (
    <>
    <SectionTitle 
    title="Let's go places together"
    text='Discover the latest offers and news and start planning your next trip with us.'
    btnText='See All'
    />
    <PlacesWrapper>
        <PlacesCover src="/images/map.svg" />
    </PlacesWrapper>
      
    </>
  )
}

export default Places
