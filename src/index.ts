import express from "express";
import dotenv from "dotenv"
import user from "./routes/user.routes"
import bodyParser from "body-parser";
dotenv.config()
const app = express();
app.use(bodyParser.json())
app.use('/api', user)
app.listen(process.env.PORT ,() => {
	console.log(`server start`)
})