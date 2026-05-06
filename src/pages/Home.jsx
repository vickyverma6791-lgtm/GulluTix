import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingMovies from "../components/TrendingMovies";
import { movies } from "../assets/heroSection";
import UpcomingMovies from "../components/UpcomingMovies";
import LatestReleases from "../components/LatestReleases";

const Home = () => {
  return (
    <>
    

      {/* Hero -> only featured */}
      <HeroSection movies={movies.filter((m) => m.featured)} />

      {/* Trending */}
      <TrendingMovies movies={movies} />

      <UpcomingMovies movies={movies}></UpcomingMovies>
      <LatestReleases movies={movies}></LatestReleases>
    </>
  );
};

export default Home;