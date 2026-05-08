import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import errorMiddleware from "./middleware/errorMiddleware.js"
import movieRoutes from "./routes/movieRoutes.js"
dotenv.config()
connectDB()

const app = express()


app.use(cors())
app.use(express.json())
app.use(errorMiddleware);

app.use("/api/movies",movieRoutes)
app.get("/",(req,res)=>{
    res.send("Gullutix api")
})

app.listen(5000,()=>{
    console.log('Server running at port 5000');
})