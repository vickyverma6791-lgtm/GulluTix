import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const UpcomingMovies = ({ movies = [] }) => {
  const upcomingMovies = movies.filter(
    (movie) => movie.upcoming
  );

  return (
    <section className="bg-dark px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-primary">
              Coming Soon
            </p>

            <h2 className="text-3xl font-bold text-light md:text-5xl">
              Upcoming Releases
            </h2>
          </div>

          <Link
            to="/movies"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-card/60 px-5 py-3 text-sm text-light transition hover:bg-card md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingMovies
            .slice(0, 4)
            .map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
              />
            ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/movies"
            className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-medium text-white shadow-lg shadow-primary/20"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;