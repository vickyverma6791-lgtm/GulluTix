import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { movies } from '../assets/heroSection'

const MovieDetails = () => {
  const {id} = useParams()
  const movie = movies.find((m)=> m.id ===Number(id))
  const navigate = useNavigate()
  const dates = ["Today", "Tomorrow","Fri","Sat"]
  const[selectedDate,setSelectedDate] = useState("Today")

  if (!movie){
    return <div className='pt-28 text-white'>Movie not found</div>
  }
  return (
    <section className="relative min-h-screen pt-24 text-white">
      {/* background */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* content */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        {/* poster */}
        <div>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </div>

        {/* info */}
        <div>
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <div className='mt-6 flex flex-wrap  gap-3'>
            <span className='bg-white/10 rounded-full px-4 py-2'>
              ⭐ {movie.rating}
            </span>
            <span className='bg-white/10 px-4 py-2 rounded-full'>
             ⏱ {movie.runtime} min
            </span>
            <span className='rounded-full bg-white/10 px-4 py-2'>
              {movie.genres.join(" . ")}
            </span>
          </div>
          <p className="mt-4 text-gray-300">
            {movie.overview}
          </p>
          <div className='mt-8 space-y-3 text-gray-300'>
            <p>
              <span className='font-semibold text-white'>
                Release:
              </span>{" "}
              {movie.releaseDate}
            </p>
            <p>
              <span className='font-semibold text-white'>
                Language:
              </span>{" "}
              English/Hindi
            </p>
            <p>
              <span className='font-semibold text-white'>Format:
              </span>{" "}
              2D .INOX
            </p>

          </div>
          <div className='mt-8'>
            <h3 className='mb-4 text-lg font-semibold'>Selected Date</h3>
          </div>
          <div>
            {dates.map((date)=>(
              <button key={date}
                      onClick={()=>setSelectedDate(date)}
                      className={`rounded-full px-5 py-2 transition ${
                        selectedDate === date 
                        ? "bg-red-600 text-white"
                        : 'bg-white/10 hover:bg-white/20'
                      }`}
              >
                {date}
              </button>
            ))}
          </div>
          <button 
              onClick={()=>
                navigate(`/movies/${movie.id}/${selectedDate}`)}
          
            className='mt-8 rounded-full bg-red-600 px-8 py-3 font font-medium transition hover:bg-red-700'>
            Book Now
          </button>
        </div>
      </div>
</section>
  )
}

export default MovieDetails
