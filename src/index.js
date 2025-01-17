import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
  path: "./env"
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 , () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
  })

  app.on("ERROR",(error)=> {
    console.log("DATABASE IS NOT CONNECTED",error);
    throw error;
  })
})
.catch((error)=>{
  console.log("Error connecting to database", error)
})










/*
import express from "express"

const app = express()


(async() => {
  try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
    app.on("ERROR",(error)=> {
      console.log("DATABASE IS NOT CONNECTED",error);
      throw error;
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR: ", error)
    throw error
  }
})()*/