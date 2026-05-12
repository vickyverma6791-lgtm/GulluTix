import Movie from "../models/Movie.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getMovie = asyncHandler(async(req,res)=>{
        const movies = await Movie.find()
        res.send(movies)
    }
)

export const createMovie = asyncHandler(async(req,res)=>{
    const movie = await Movie.create(req.body)
    res.status(201).json(movie)
})

export const deleteMovie = asyncHandler(async(req,res)=>{
    await Movie.findByIdAndDelete(req.params.id)
    res.json({message:"Movie deleted"})
})