import React from 'react'
import { HeaderContainer,Place, PlaceTitle,Icon, NavContainer } from '../style'

const Navs= ['Turkey','Istanbul','CVK Park Bosphorus Hotel Istanbul']
const BookingNav = () => {
  return (
        <NavContainer>
            <Place>
                <PlaceTitle>Turkey</PlaceTitle>
                <Icon src='images/svgs/arrowR.svg'/>
            </Place>
            <Place>
                <PlaceTitle>Istanbul</PlaceTitle>
                <Icon src='images/svgs/arrowR.svg'/>
            </Place>
            <Place>
                <PlaceTitle variant='highlight'>CVK Park Bosphorus Hotel Istanbul</PlaceTitle>
            </Place>
        </NavContainer>
  )
}

export default BookingNav
