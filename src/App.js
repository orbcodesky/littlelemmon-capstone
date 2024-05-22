// @author: Marcelo Salvador
// Little Lemon Capstone Project

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";
import BookingConfirm from "./components/BookingConfirm";
import { fetchAPI, submitAPI } from "./components/api/Api";
import { useReducer, useState } from "react";
/*@author: Marcelo Salvador*/

function App() {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  /****Exercise: Adding table booking state */
  const today = new Date();

  /*Step #2 */

  function onCreate(form_data) {
    //getting existing ...bookingData array and past the new array form_data to the object with arrays
    setBookingData(form_data);
    localStorage.setItem("booking_info", JSON.stringify(form_data));
    console.log("My form data" + JSON.stringify(form_data));
  }

  const submitForm = (bookingData) => {
    const result = submitAPI(bookingData);
    if (result === true) {
      return true;
    } else {
      return false;
    }
  };

  const initializeTimes = () => {
    const today = new Date();
    const initialTimesState = { times: fetchAPI(today) };
    return initialTimesState;
  };

  const updateTimes = (state, action) => {
    if (action.type === "initials_times_state") {
      return { times: fetchAPI(today) };
    }
    if (action.type === "update_times") {
      console.log("Inside Update Times :" + bookingData["date"]);
      let selectedBookingDate = new Date(bookingData["date"]);
      let newTimes = fetchAPI(selectedBookingDate).filter(
        (time) => time !== "17:00"
      );
      return { times: newTimes };
    }
    throw Error("Unknown Action.");
  };
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  return (
    <>
      <main>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home bookingData={bookingData} />} />
            <Route
              path="/confirmation"
              element={<BookingConfirm bookingData={bookingData} />}
            />
            <Route
              path="/reservations"
              element={
                <ReservationForm
                  bookingData={bookingData}
                  setBookingData={setBookingData}
                  availableTimes={availableTimes}
                  setAvailableTimes={setAvailableTimes}
                  submitForm={submitForm}
                  onCreate={onCreate}
                />
              }
            />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App;
