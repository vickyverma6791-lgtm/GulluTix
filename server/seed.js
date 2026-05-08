import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";
import movies from "./data/movies.js";

dotenv.config();
await connectDB();

const seedData = async () => {
  await Movie.deleteMany();
  await Movie.insertMany(movies);

  console.log("Movies Seeded");
  process.exit();
};

seedData();