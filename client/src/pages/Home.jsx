import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingMovies from "../components/TrendingMovies";
import axios from "axios";
import UpcomingMovies from "../components/UpcomingMovies";
import LatestReleases from "../components/LatestReleases";
import { useEffect, useState } from "react";
import getMovies from "../services/movieService";

const Home = () => {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    const fetchMovies = async()=>{
      const data = await getMovies()
      setMovies(data)
    }
    fetchMovies()
  },[])
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