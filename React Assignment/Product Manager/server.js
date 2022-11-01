import express from 'express'
import productsRouter from './server/routes/products.routes.js'
import "./server/config/mongoose.config.js";
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/products", productsRouter)
app.use(rootRouter)


app.listen(8000, () => console.log("The server is all fired up on port 8000"));