
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env"
})

connectDB()










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