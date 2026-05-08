import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const LatestReleases = ({ movies = [] }) => {
  const latestMovies = movies.filter((movie) => movie.latest);

  return (
    <section className="bg-black px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* heading */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
              Fresh Picks
            </p>

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Latest Releases
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

        {/* horizontal cards */}
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {latestMovies.map((movie) => (
            <div
              key={movie._id} 
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px]"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* mobile btn */}
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

export default LatestReleases;