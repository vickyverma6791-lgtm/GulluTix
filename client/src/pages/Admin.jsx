import React, { useEffect, useState } from "react";
import getMovies, { addMovie, deleteMovie } from "../services/movieService";

const Admin = () => {
  // ek object me pura form data
  const initialForm = {
  title: "",
  poster: "",
  backdrop: "",
  rating: "",
  genres: "",
  runtime: "",
  overview: "",
  year: "",
  releaseDate: "",
  featured: false,
  trending: false,
  latest: false,
  upcoming: false,
};
  const [form, setForm] = useState(initialForm);
  
  const[movies,setMovies] = useState([])

  useEffect(()=>{
    const fetchMovie = async()=>{
        const data = await getMovies()
        setMovies(data)
    }
    fetchMovie()
    
  },[])

  const handleChange = (e) => {
    setForm({
      ...form, // purana data copy

      // checkbox hua to checked lo
      // warna input ki value lo
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // refresh stop

    try {
      const payLoad = {
        ...form,
        genres: form.genres.split(","),
        rating: Number(form.rating),
        runtime: Number(form.runtime),
        year: Number(form.year),
      };

     const newMovie = await addMovie(payLoad);
     setMovies([
        newMovie,
        ...movies,
        ]);
      setForm(initialForm)
      
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
  await deleteMovie(id);

  setMovies(
    movies.filter(
      (movie) => movie._id !== id
    )
  );
};

  return (
    <section className="min-h-screen bg-dark pt-20 text-light">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold">
          Admin Panel
        </h1>

        <p className="mt-2 text-muted">
          Add new movie
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl"
        >
          <input
            placeholder="Movie Title"
            value={form.title}
            name="title"
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
          />

          <input
            placeholder="Poster URL"
            value={form.poster}
            name="poster"
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
          />

          <input
            placeholder="Backdrop URL"
            value={form.backdrop}
            name="backdrop"
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
          />

          <div className="grid gap-5 md:grid-cols-3">
            <input
              placeholder="Rating"
              value={form.rating}
              name="rating"
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />

            <input
              placeholder="Runtime"
              value={form.runtime}
              name="runtime"
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />

            <input
              placeholder="Year"
              value={form.year}
              name="year"
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />
            <input
            type="date"
            value={form.releaseDate}
            name="releaseDate"
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />
          </div>

          <input
            placeholder="Genres (Action,Drama)"
            value={form.genres}
            name="genres"
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Movie Overview"
            value={form.overview}
            name="overview"
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
              />
              Featured
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="trending"
                checked={form.trending}
                onChange={handleChange}
              />
              Trending
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="latest"
                checked={form.latest}
                onChange={handleChange}
              />
              Latest
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="upcoming"
                checked={form.upcoming}
                onChange={handleChange}
              />
              Upcoming
            </label>
          </div>

          <button className="w-full rounded-2xl bg-primary py-4 font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-secondary">
            Add Movie
          </button>
        </form>
        <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">
                Added Movies
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                {movies.map((movie) => (
                <div
                    key={movie._id}
                    className="rounded-3xl border border-white/10 bg-card/60 p-5"
                >
                    <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-56 w-full rounded-2xl object-cover"
                    />

                    <h3 className="mt-4 text-xl font-semibold">
                    {movie.title}
                    </h3>

                   <button
                        onClick={() => handleDelete(movie._id)}
                        className="mt-4 w-full bg-primary py-3 font-medium rounded-xl transition hover:bg-red-600"
                    >Delete</button>
                </div>
                ))}
            </div>
            </div>
      </div>
    </section>
  );
};

export default Admin;