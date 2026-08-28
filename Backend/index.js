import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { teacherRoute } from "./app/route/teacherdata.route.js";
dotenv.config();

let appRoute = express();

appRoute.use(cors({ 
  origin: [
    "http://localhost:4200", 
    "https://sample-angular-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

appRoute.use(express.json());

appRoute.use("/api/v1",teacherRoute)

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("DB Connect successfully");
    appRoute.listen(process.env.PORT,()=>{
        console.log("Application Running");
    })
})

export default appRoute;