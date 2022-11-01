import express from 'express'
import jokesRouter from './routes/jokes.routes.js';
import "./config/mongoose.config.js";

const app = express();



app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/jokes", jokesRouter)
app.use(rootRouter)


app.listen(8000, () => console.log("The server is all fired up on port 8000"));
