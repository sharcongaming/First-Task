import express   from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import { Login, Register, getCurrentUser, getNumber } from "./Controolers/User.Controllers.js"

// const router = express.Router();
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();


app.get("/",(req,res) => {
  res.send("working  here  ......")
})

app.post("/register", Register)
app.post("/login", Login)
app.get("get-Current-User", getCurrentUser)
app.get("get-number", getNumber )



mongoose.connect("mongodb+srv://crewcoding61:samiksha123@cluster0.obnufg3.mongodb.net/Login").then(() => {
    console.log("Connected to DB...")
  })
      .catch( (err) => {
        console.error(`Error connecting to the database:\n${err}`);
    })
  app.listen(8000, () => {
    console.log("Listening on port 8000")
  })


// mongoose.connect(process.env.Mongo_URL).then(() =>{
//   console.log("connected to DB..")
// })

// app.listen(8000, () =>{
//   console.log("Listening on port 8000")
// })
