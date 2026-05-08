import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SeatLayout = () => {
  const { id, date } = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [message, setMessage] = useState("");

  const seats = [];
  for (let i = 1; i <= 40; i++) {
    seats.push(i);
  }

  const price = 200;

  const handleSeat = (seat) => {
    // if seat is already selected, remove it
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      // otherwise add seat in selected seats
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handlePay = () => {
    const booking = {
      movieId :id,
      date,
      seats:selectedSeats,
      total : selectedSeats.length * price
    }
    const oldBooking = JSON.parse(localStorage.getItem("booking")) || []
    
    localStorage.setItem("bookings",JSON.stringify([...oldBooking,booking]))
    // move selected seats into booked seats
    setBookedSeats([...bookedSeats, ...selectedSeats]);

    // show success message
    setMessage(
      `Booking Successful: ${selectedSeats.join(", ")}`
    );

    // clear selected seats
    setSelectedSeats([]);
  };

  return (
    <section className="min-h-screen bg-black pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">Seat Selection</h1>

        <p className="mt-2 text-gray-400">
          Movie ID: {id} | Date: {date}
        </p>

        {/* screen */}
        <div className="mb-10 mt-10 text-center">
          <div className="mx-auto h-3 w-72 rounded-full bg-white/40 shadow-[0_0_40px_rgba(255,255,255,.35)]" />
          <p className="mt-3 text-sm tracking-[6px] text-gray-400">
            SCREEN
          </p>
        </div>

        {/* seats */}
        <div className="grid grid-cols-5 gap-4 md:grid-cols-8">
          {seats.map((seat) => (
            <button
              key={seat}
              onClick={() => handleSeat(seat)}
              disabled={bookedSeats.includes(seat)}
              className={`rounded-xl p-4 transition ${
                bookedSeats.includes(seat)
                  ? "cursor-not-allowed bg-gray-500"
                  : selectedSeats.includes(seat)
                  ? "bg-red-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {seat}
            </button>
          ))}
        </div>

        {/* selected seats */}
        <p className="mt-6 text-gray-300">
          Selected Seats: {selectedSeats.join(", ") || "None"}
        </p>

        {/* total */}
        <h2 className="mt-4 text-2xl font-semibold">
          Total: ₹{selectedSeats.length * price}
        </h2>

        {/* pay button */}
        <button
          onClick={handlePay}
          className="mt-4 rounded bg-red-600 px-6 py-3 hover:bg-red-700"
        >
          Pay Now
        </button>

        {/* message */}
        {message && (
          <p className="mt-4 text-green-400">{message}</p>
        )}

        {/* legend */}
        <div className="mt-6 flex gap-6">
          <p>⬜ Available</p>
          <p>🟥 Selected</p>
          <p>⬛ Booked</p>
        </div>
      </div>
    </section>
  );
};

export default SeatLayout;