import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovies } from "../services/movieService";
import { Loader } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  const dates = ["Today", "Tomorrow", "Fri", "Sat"];
  const [selectedDate, setSelectedDate] =
    useState("Today");

  useEffect(() => {
    const fetchMovie = async () => {
      const movies = await getMovies();
      const foundMovie = movies.find(
        (m) => m._id === id
      );
      setMovie(foundMovie);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <Loader />
  }

  return (
    <section className="relative min-h-screen pt-24 text-light">
      {/* background */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-dark/75" />

      {/* content */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        {/* poster */}
        <div>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full max-w-md rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(16,185,129,.18)]"
          />
        </div>

        {/* info */}
        <div>
          <h1 className="text-5xl font-bold">
            {movie.title}
          </h1>

          {/* meta */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-card/60 px-4 py-2 backdrop-blur-xl">
              ⭐ {movie.rating}
            </span>

            <span className="rounded-full border border-white/10 bg-card/60 px-4 py-2 backdrop-blur-xl">
              ⏱ {movie.runtime} min
            </span>

            <span className="rounded-full border border-white/10 bg-card/60 px-4 py-2 backdrop-blur-xl">
              {movie.genres.join(" • ")}
            </span>
          </div>

          {/* overview */}
          <p className="mt-5 leading-8 text-muted">
            {movie.overview}
          </p>

          {/* details */}
          <div className="mt-8 space-y-3 text-muted">
            <p>
              <span className="font-semibold text-light">
                Release:
              </span>{" "}
              {movie.releaseDate}
            </p>

            <p>
              <span className="font-semibold text-light">
                Language:
              </span>{" "}
              English / Hindi
            </p>

            <p>
              <span className="font-semibold text-light">
                Format:
              </span>{" "}
              2D • IMAX
            </p>
          </div>

          {/* date */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">
              Select Date
            </h3>

            <div className="flex flex-wrap gap-3">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() =>
                    setSelectedDate(date)
                  }
                  className={`rounded-full px-5 py-2 transition ${
                    selectedDate === date
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "border border-white/10 bg-card/60 hover:bg-card"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* button */}
          <button
            onClick={() =>
              navigate(
                `/movies/${movie._id}/${selectedDate}`
              )
            }
            className="mt-8 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-secondary"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;