import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const TrendingMovies = ({ movies = [] }) => {
  const trendingMovies = movies.filter((movie) => movie.trending);

  return (
    <section className="bg-black px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
              Trending Now
            </p>

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Popular Movies
            </h2>
          </div>

          <Link
            to="/movies"
            className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/movies"
            className="flex items-center justify-center gap-2 rounded-full bg-red-600 py-3 font-medium text-white"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;