import express from 'express'
import playersRouter from './server/routes/players.routes.js'
import "./server/config/mongoose.config.js";
import cors from 'cors'

const app = express();
const port = 8000
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/players", playersRouter)
app.use(rootRouter)


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));