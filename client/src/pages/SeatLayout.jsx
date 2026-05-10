import React, { useState } from "react";
import toast from "react-hot-toast";
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
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  const handlePay = () => {
    if (!selectedSeats.length) {
      toast.error("Please select a seat")
      return
    }

    const booking = {
      movieId: id,
      date,
      seats: selectedSeats,
      total: selectedSeats.length * price,
    };

    const oldBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        booking,
      ])
    );

    setBookedSeats([
      ...bookedSeats,
      ...selectedSeats,
    ]);

    setMessage(
      `Booking Successful: ${selectedSeats.join(
        ", "
      )}`
    );
    toast.success("Ticket booked Successfully")

    setSelectedSeats([]);
  };

  return (
    <section className="min-h-screen bg-dark pt-28 text-light">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-5xl font-bold">
          Choose Your Seat
        </h1>

        <p className="mt-2 text-muted">
          Movie ID: {id} • {date}
        </p>

        {/* screen */}
        <div className="mb-14 mt-12 text-center">
          <div className="mx-auto h-4 w-[420px] rounded-full bg-primary/70 shadow-[0_0_60px_rgba(16,185,129,.45)]" />

          <p className="mt-4 text-sm tracking-[8px] text-muted">
            SCREEN
          </p>
        </div>

        {/* seats */}
        <div className="grid grid-cols-5 gap-4 md:grid-cols-8">
          {seats.map((seat) => (
            <button
              key={seat}
              onClick={() =>
                handleSeat(seat)
              }
              disabled={bookedSeats.includes(
                seat
              )}
              className={`rounded-2xl p-4 font-medium transition-all duration-300 ${
                bookedSeats.includes(seat)
                  ? "cursor-not-allowed bg-gray-600 text-gray-300"
                  : selectedSeats.includes(
                      seat
                    )
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "border border-white/10 bg-card/70 hover:border-primary/30 hover:bg-card"
              }`}
            >
              {seat}
            </button>
          ))}
        </div>

        {/* summary */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl">
          <p className="text-muted">
            Selected Seats
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {selectedSeats.join(", ") ||
              "None"}
          </h3>

          <h2 className="mt-5 text-3xl font-bold">
            ₹
            {selectedSeats.length *
              price}
          </h2>

          <button
            onClick={handlePay}
            className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-secondary"
          >
            Pay Now
          </button>

          {message && (
            <p className="mt-4 text-primary">
              {message}
            </p>
          )}
        </div>

        {/* legend */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
          <p>⬜ Available</p>
          <p>🟩 Selected</p>
          <p>⬛ Booked</p>
        </div>
      </div>
    </section>
  );
};

export default SeatLayout;