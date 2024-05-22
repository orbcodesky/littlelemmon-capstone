import React from 'react'
const BookingConfirm = ({bookingData}) => {

  const guests = JSON.parse(localStorage.getItem('booking_info'));

    return (
    <div>
    <div className="reservation-container">
      <div className="reservation-content">
      <h2>Your Booking is confirmed!</h2>
        <div><h2>{guests.guests} Guests</h2></div>
        <div><h2>On {guests.date}</h2></div>
        <div><h2>{guests.time} hours</h2></div>
        <div><h2>On special occasion of your {guests.occasion}.</h2></div>
        </div>
        </div>
    </div>
  )
}

export default BookingConfirm