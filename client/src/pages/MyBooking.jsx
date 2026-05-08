import React from "react";

const MyBooking = () => {
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <section className="min-h-screen bg-black pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">My Bookings</h1>

        <div className="rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div
                key={index}
                className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p>Movie ID: {booking.movieId}</p>
                <p>Date: {booking.date}</p>
                <p>Seats: {booking.seats.join(", ")}</p>
                <p>Total: ₹{booking.total}</p>
              </div>
            ))
          ) : (
            <p className="mt-8 text-gray-400">
              No bookings yet
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBooking;