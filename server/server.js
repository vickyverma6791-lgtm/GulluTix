import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import errorMiddleware from "./middleware/errorMiddleware.js"
import movieRoutes from "./routes/movieRoutes.js"
import userRouter from "./routes/userRouter.js"
dotenv.config()
connectDB()

const app = express()


app.use(cors())
app.use(express.json())
app.use(errorMiddleware);

app.use("/api/movies",movieRoutes)
app.use("/api/users",userRouter)

app.listen(5000,()=>{
    console.log('Server running at port 5000');
})