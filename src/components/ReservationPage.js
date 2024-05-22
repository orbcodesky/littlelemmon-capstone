import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
import "./BookingForm.css";
const ReservationPage = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  onCreate,
  submitForm,
}) => {
  return (
    <div className="reservation-container">
      <div className="reservation-content">
        <h2>Make your reservation</h2>
        <div><span className="required-field">*</span> Indicates required field</div>
        <br/>
        <ReservationForm
          bookingData={bookingData}
          setBookingData={setBookingData}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          submitForm={submitForm}
          onCreate={onCreate}
        />
      </div>
    </div>
  );
};

export default ReservationPage;