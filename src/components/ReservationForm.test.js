// src/EventForm.test.js
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "./api/Api";

function initializeTimes() {
  const today = new Date();
  const initialTimesState = { times: fetchAPI(today) };
  return initialTimesState;
}

test("renders the form and submits with valid data", async () => {
  const mock = jest.fn();

  initializeTimes();
  const times = initializeTimes();

  render(
    <ReservationForm
      onSubmit={mock}
      availableTimes={times}
      setBookingData={mock}
    />,
    {
      wrapper: BrowserRouter,
    }
  ); 

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2024-05-21" },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "12:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "10" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "birthday" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  await waitFor(() => expect(screen.getByText(/submit/i)).toBeDisabled());
});

test('renders the form and checks for validation errors', async () => {
    const mock = jest.fn();

    initializeTimes();
    const times = initializeTimes();
  
    render(
      <ReservationForm
        onSubmit={mock}
        availableTimes={times}
        setBookingData={mock}
      />,
      {
        wrapper: BrowserRouter,
      }
    ); 
  

    // Try to submit the form without filling it out
    fireEvent.click(screen.getByText(/submit/i));

    // Check for validation errors
    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/number of guests is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/occasion is required/i)).toBeInTheDocument();
});

test('shows validation errors when invalid data is entered', async () => {
    const mock = jest.fn();
    
    initializeTimes();
    const times = initializeTimes();
  
    render(
      <ReservationForm
        onSubmit={mock}
        availableTimes={times}
        setBookingData={mock}
      />,
      {
        wrapper: BrowserRouter,
      }
    ); 

    // Enter invalid number of guests
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });

    // Try to submit the form
    fireEvent.click(screen.getByText(/submit/i));

    // Check for specific validation error
    expect(await screen.findByText(/must be at least 1 guest/i)).toBeInTheDocument();
});

test('submits the form with valid data', async () => {
    const mock = jest.fn();
    
    initializeTimes();
    const times = initializeTimes();
  
    render(
      <ReservationForm
        onSubmit={mock}
        availableTimes={times}
        setBookingData={mock}
      />,
      {
        wrapper: BrowserRouter,
      }
    ); 

    // Fill in the form with valid data
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-05-21' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });

    // Submit the form
    fireEvent.click(screen.getByText(/submit/i));

    // Ensure the submit button is disabled after submission
    await waitFor(() => expect(screen.getByText(/submit/i)).toBeDisabled());
});
