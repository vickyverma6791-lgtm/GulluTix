import express from "express"
import { createMovie, deleteMovie, getMovie } from "../controllers/movieController.js"

const router = express.Router()

router.route("/").get(getMovie)
                 .post(createMovie)
router.delete("/:id",deleteMovie)
export default router