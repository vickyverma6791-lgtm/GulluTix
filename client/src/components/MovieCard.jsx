import { Star, Clock3, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [liked,setLiked] = useState(false)
  return (
    
    <Link
      to={`/movies/${movie._id}`}
      className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-card/60 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(16,185,129,.18)]">
      
      {/* image */}
      <div className="relative h-[340px] overflow-hidden ">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent" />
        
        {/* rating */}
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full border border-white/10 bg-card/70 px-3 py-1.5 text-sm backdrop-blur-xl">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span>{movie.rating}</span>
        </div>
        <button
          onClick={()=> setLiked(!liked)}
          className="absolute right-4  top-4 z-20 rounded-full bg-black/50 p-2">
        <Heart size ={18} 
          className={ liked ? "fill-red-500 text-red-500"
                            : "text-light" 
          }
        />
        </button>

        {/* button */}
        <button className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 translate-y-16 rounded-full bg-primary shadow-lg shadow-primary/20 hover:bg-secondary py-3 font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Book Now
        </button>
      </div>

      {/* content */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-light">
          {movie.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-sm text-muted">
          {movie.genres.join(" • ")}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
          <Clock3 size={14} />
          {movie.runtime} min
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;