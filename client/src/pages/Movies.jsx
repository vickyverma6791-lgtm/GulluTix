import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import getMovies from "../services/movieService";
const Movies = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [movies, setMovies] = useState([]);

  const genres = ["All", "Action", "Drama", "Sci-Fi", "Comedy"];
  const copyMovies = [...movies]
  const searchedMovies = copyMovies.filter((movie)=>{
    return movie.title
            .toLowerCase()
            .includes(search.toLowerCase())
  })
  const genreMovie = searchedMovies.filter((movie)=>{
    return genre === "All" || movie.genres.includes(genre)
  })
  const filteredMovies = genreMovie.sort((a,b)=>{
    return b.rating - a.rating
  })
  useEffect(() => {
  const fetchMovies = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  fetchMovies();
}, []);

  return (
    <section className="min-h-screen bg-black pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">Movies</h1>

        {/* filter bar */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none lg:max-w-md"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none"
          >
            <option value="rating" className="text-black">Top Rated</option>
            <option value="latest">Latest</option>
            <option value="name">A-Z</option>
          </select>
        </div>

        {/* genres */}
        <div className="mt-6 flex flex-row gap-3">
          {genres.map((item) => (
            <button
              key={item}
              onClick={() => setGenre(item)}
              className={`rounded-full px-5 py-2 transition ${
                genre === item
                  ? "bg-red-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
       {filteredMovies.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-semibold">No movies found</h2>
            <p className="mt-2 text-gray-400">
              Try changing search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Movies;