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

// Top-level Mongoose connection for Serverless
mongoose.connect(process.env.DBURL)
  .then(() => console.log("DB Connect successfully"))
  .catch((err) => console.error("DB Connection Error:", err));

appRoute.use("/api/v1", teacherRoute);

// Only listen on a port when running locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  appRoute.listen(PORT, () => {
    console.log(`Application Running on port ${PORT}`);
  });
}

export default appRoute;