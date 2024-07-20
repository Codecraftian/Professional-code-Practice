import mongoose from "mongoose";
import {db_name} from "../constant.js"

const connectDB = async () =>{
  try {
    const connectIntants =  await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
    console.log(`MongoDB connected: ${connectIntants.connection.host}`)

  } catch (error) {
    console.log("database is not connected properly their are some error", error);
    process.exit(1)
  }
}

export default connectDB