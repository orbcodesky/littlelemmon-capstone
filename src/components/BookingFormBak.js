import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BookingForm.css";

const BookingForm = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  onCreate,
  submitForm,
}) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

 console.log("Booking Data",bookingData);

  const [reqDate, setreqDate] = useState("");
  const [reqTime, setreqTime] = useState("");
  const [reqGuests, setreqGuests] = useState("");
  const [reqOccasion, setreqOccasion] = useState("");

  const Validate = () => {
    if (formData.date.trim() === "") setreqDate("required");
    if (formData.time.trim() === "") setreqTime("required");
    if (formData.guests.trim() === "") setreqGuests("required");
    if (formData.occasion === "") setreqOccasion("required");
    else return true;
  };
  const resetErrorMessage = () => {
    setreqDate("");
    setreqTime("");
    setreqGuests("");
    setreqOccasion("");
  };
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(bookingData);
  }, [bookingData, formData]);

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setBookingData((prevState) => ({ ...prevState, [id]: value }));
    const { id, value } = e.target; //Destructuring input values to pass along or up
    // setBookingData((prevState) => ({ ...prevState, [id]: value}));
    setAvailableTimes({ type: "update_times" });
  }

  const submit = (e) => {
    e.preventDefault();
    resetErrorMessage();
    if (Validate()) {
      onCreate({ ...formData, [e.target.name]: e.target.value });
      navigate("/confirmation");
    }
  };
  function submitHandler(e) {
    e.preventDefault();
    resetErrorMessage();
    if (submitForm() === true) {
      onCreate({ ...formData, [e.target.name]: e.target.value });
      // alert("Form Submitted");
      navigate("/confirmation");
    } else {
      alert("Error");
    }
  }
  /**Step #2 & #3- Code the form structure and behavior */
  return (
    <div className="form-container">
      <h1>Book Now</h1>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="res-date">Choose date *</label>
          <input
            name="date"
            value={formData.date}
            onChange={changeHandler}
            type="date"
            id="res-date"
            noValidate
          />
          {reqDate === "required" && (
            <span className="txt-red">Please enter date.</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="res-time">Choose time *</label>

          <select
            name="time"
            value={formData.time}
            onChange={changeHandler}
            id="res-time"
            noValidate
          >
            <option value="">Please select one</option>
            {availableTimes.times.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          {reqTime === "required" && (
            <span className="txt-red">Please enter time.</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            name="guests"
            value={formData.guests}
            onChange={changeHandler}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            noValidate
            minLength="1"
          />
          {reqGuests === "required" && (
            <span className="txt-red">Please enter number of guests.</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            value={formData.occasion}
            onChange={changeHandler}
            id="occasion"
            noValidate
          >
            <option value="">Please select one</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        {reqOccasion === "required" && (
          <span className="txt-red">Please enter occasion.</span>
        )}
        <div className="form-group">
          <input type="submit" value="Make Your reservation" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
