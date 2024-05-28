import express  from "express"
import dotenv from "dotenv"
import cors from 'cors'
import morgan from "morgan"
import mongoose from "mongoose"
import { Login, Register, getCurrentUser, getNumber } from "./controllers/User.Controllers.js"
// const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))
dotenv.config();


app.get("/",(req,res) => {
  res.send("working  ......")
})

app.post("/register", Register)
app.post("/login", Login)
app.get("get-Current-User", getCurrentUser)
app.get("get-number", getNumber )



// const url = `mongodb+srv://sharcongaming:lonavla%40game@cluster0.vikvlva.mongodb.net/data`;


mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.listen(8000, () =>{
    console.log("Listening on port 8000")
})