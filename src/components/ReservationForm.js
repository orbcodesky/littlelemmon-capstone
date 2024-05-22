// src/EventForm.js
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import parse from "date-fns/parse";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";
/*@author: Marcelo Salvador*/

const ReservationForm = ({
  setBookingData,
  availableTimes,
  setAvailableTimes,
  onCreate,
  submitForm,
  bookingData,
}) => {
  const initialValues = {
    date: "",
    time: "",
    guests: "",
    occasion: "",
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const navigate = useNavigate();

  useEffect(() => {}, [bookingData, formData]);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setBookingData((prevState) => ({ ...prevState, [id]: value }));
    const { id, value } = e.target; //Destructuring input values to pass along or up
    // setBookingData((prevState) => ({ ...prevState, [id]: value}));
  };

  const validationSchema = Yup.object({
    date: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd.MM.yyyy", new Date());
      return result;
    })
    .required("date is required")
    .min(
      new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      "Date in the past is not allowed."
    ),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "Must be at least 1 guest")
      .required("Number of guests is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const onSubmit = (values) => {
    onCreate({ ...formData, values });
    navigate("/confirmation");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className="form-container">
            <div className="col-md-12 mt-5">
              <Form onChange={handleOnChange}>
                <h2 className="mb-3">Book Now!</h2>
                <div className="row">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <Field type="date" id="date" name="date" />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <Field as="select" id="time" name="time">
                    <option value="">Please select a time</option>
                    {availableTimes.times.map((item, index) => (
                      <option value={item}>{item}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="time" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <Field type="number" id="guests" name="guests" />
                  <ErrorMessage
                    name="guests"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="occasion">Occasion</label>
                  <Field as="select" id="occasion" name="occasion">
                    <option value="" label="Select occasion" />
                    <option value="wedding" label="Wedding" />
                    <option value="birthday" label="Birthday" />
                    <option value="meeting" label="Meeting" />
                  </Field>
                  <ErrorMessage
                    name="occasion"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <button ariaLabel="On Click" type="submit" disabled={isSubmitting}>
                    submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
