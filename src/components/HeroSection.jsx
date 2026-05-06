
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Clock3,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = ({ movies = [] }) => {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  if (!movies.length) return null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={900}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="h-screen"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-screen w-full">
              {/* background */}
              <img
                src={movie.backdrop}
                alt={movie.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* overlays */}
              <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

              {/* content */}
              <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center justify-between px-6 pt-24 md:px-10 lg:px-16">
                {/* LEFT */}
                <div className="max-w-2xl">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-red-400">
                    Now Showing
                  </p>

                  {/* logo */}
                  <img
                    src={movie.logo}
                    alt={movie.title}
                    className="mb-5 h-14 object-contain md:h-20"
                  />

                  {/* title */}
                  <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl">
                    {movie.title}
                  </h1>

                  {/* meta pills */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {movie.rating}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                      <Clock3 size={16} />
                      {movie.runtime} min
                    </span>

                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                      {movie.genres.join(" • ")}
                    </span>
                  </div>

                  {/* desc */}
                  <p className="mt-6 max-w-xl leading-8 text-gray-200">
                    {movie.overview}
                  </p>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="rounded-full bg-red-600 px-8 py-3 font-medium text-white transition hover:scale-105 hover:bg-red-700">
                      Book Now
                    </button>

                    <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 backdrop-blur-md transition hover:scale-105 hover:bg-white/20">
                      <Play size={18} fill="white" />
                      Trailer
                    </button>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="hidden w-[44%] justify-center lg:flex">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-[400px] rounded-[28px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,.55)] transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-xl transition hover:scale-110 hover:bg-white/20 md:flex"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-xl transition hover:scale-110 hover:bg-white/20 md:flex"
      >
        <ChevronRight />
      </button>

      {/* slider indicator */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`rounded-full transition-all duration-300 ${
              active === index
                ? "h-2 w-12 bg-red-500"
                : "h-2 w-6 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;

