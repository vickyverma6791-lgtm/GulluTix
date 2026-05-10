import React from "react";

const MyBooking = () => {
  const bookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  return (
    <section className="min-h-screen bg-dark pt-28 text-light">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <h1 className="text-5xl font-bold">
          My Bookings
        </h1>

        <p className="mt-2 text-muted">
          Your movie tickets
        </p>

        {/* bookings */}
        <div className="mt-10 space-y-6">
          {bookings.length > 0 ? (
            bookings.map(
              (booking, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(16,185,129,.15)]"
                >
                  {/* top */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold">
                      Booking #
                      {index + 1}
                    </h2>

                    <span className="rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">
                      {booking.date}
                    </span>
                  </div>

                  {/* content */}
                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div>
                      <p className="text-sm text-muted">
                        Movie ID
                      </p>
                      <p className="mt-1 text-lg font-medium">
                        {booking.movieId}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted">
                        Seats
                      </p>
                      <p className="mt-1 text-lg font-medium">
                        {booking.seats.join(
                          ", "
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted">
                        Total
                      </p>
                      <p className="mt-1 text-2xl font-bold text-primary">
                        ₹{booking.total}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="rounded-3xl border border-white/10 bg-card/60 p-14 text-center backdrop-blur-xl">
              <h2 className="text-2xl font-semibold">
                No bookings yet
              </h2>

              <p className="mt-2 text-muted">
                Book a movie ticket to
                see it here
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBooking;