import Movie from "../models/Movie.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getMovie = asyncHandler(async(req,res)=>{
        const movies = await Movie.find()
        res.send(movies)
    }
)