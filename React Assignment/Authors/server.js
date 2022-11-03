import express from 'express'
import authorsRouter from './server/routes/authors.routes.js'
import "./server/config/mongoose.config.js";
import cors from 'cors'

const app = express();
const port = 8000
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/authors", authorsRouter)
app.use(rootRouter)


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));