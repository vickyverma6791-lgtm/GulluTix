import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
    },

    overview: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
    },

    poster: {
      type: String,
      required: true,
    },

    backdrop: {
      type: String,
      required: true,
    },

    genres: {
      type: [String],
      required: true,
    },

    releaseDate: {
      type: String,
      required: true,
    },

    runtime: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    trending: {
      type: Boolean,
      default: false,
    },

    latest: {
      type: Boolean,
      default: false,
    },

    upcoming: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;