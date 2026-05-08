import axios from "axios";

const API = "http://localhost:5000/api/movies";

export const getMovies = async () => {
  const res = await axios.get(API);
  return res.data;
};

export default getMovies