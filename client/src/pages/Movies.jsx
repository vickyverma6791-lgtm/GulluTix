import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/movieService";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [movies, setMovies] = useState([]);

  const genres = ["All", "Action", "Drama", "Sci-Fi", "Comedy"];

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  // search
  const searchedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // genre filter
  const genreMovies = searchedMovies.filter(
    (movie) =>
      genre === "All" || movie.genres.includes(genre)
  );

  // sort
  const filteredMovies = [...genreMovies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;

    if (sortBy === "latest")
      return b.year - a.year;

    if (sortBy === "name")
      return a.title.localeCompare(b.title);

    return 0;
  });

  return (
    <section className="min-h-screen bg-dark pt-28 text-light">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <h1 className="text-5xl font-bold">
          Explore Movies
        </h1>

        <p className="mt-2 text-muted">
          Find your next watch
        </p>

        {/* filter bar */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-card/60 px-5 py-3 text-light placeholder:text-muted outline-none backdrop-blur-xl lg:max-w-md"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-2xl border border-white/10 bg-card/60 px-5 py-3 text-light outline-none backdrop-blur-xl"
          >
            <option
              value="rating"
              className="text-black"
            >
              Top Rated
            </option>

            <option
              value="latest"
              className="text-black"
            >
              Latest
            </option>

            <option
              value="name"
              className="text-black"
            >
              A-Z
            </option>
          </select>
        </div>

        {/* genres */}
        <div className="mt-6 flex flex-wrap gap-3">
          {genres.map((item) => (
            <button
              key={item}
              onClick={() => setGenre(item)}
              className={`rounded-full px-5 py-2 transition ${
                genre === item
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-card/60 text-muted hover:bg-card"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* grid */}
        {filteredMovies.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-white/10 bg-card/60 p-10 text-center backdrop-blur-xl">
            <h2 className="text-2xl font-semibold">
              No movies found
            </h2>

            <p className="mt-2 text-muted">
              Try changing search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Movies;