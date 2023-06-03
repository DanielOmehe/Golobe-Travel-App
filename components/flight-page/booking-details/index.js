import React from 'react'
import { BookingDetailsWrapper } from './style'

const BookingDetails = ({children}) => {
  return (
    <BookingDetailsWrapper>
        {children}
    </BookingDetailsWrapper>
  )
}

export default BookingDetails
