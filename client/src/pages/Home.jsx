import HeroSection from "../components/HeroSection";
import TrendingMovies from "../components/TrendingMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import LatestReleases from "../components/LatestReleases";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();

      setMovies(data);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <HeroSection
        movies={movies.filter(
          (m) => m.featured
        )}
      />

      <TrendingMovies movies={movies} />

      <UpcomingMovies movies={movies} />

      <LatestReleases movies={movies} />
    </>
  );
};

export default Home;