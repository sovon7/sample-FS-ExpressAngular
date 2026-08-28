import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { teacherRoute } from "./app/route/teacherdata.route.js";

dotenv.config();

const appRoute = express();

appRoute.use(cors({ 
  origin: [
    "http://localhost:4200", 
    "https://sample-angular-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

appRoute.use(express.json());

// Database connection helper for serverless environment
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(process.env.DBURL);
    isConnected = db.connections[0].readyState === 1;
    console.log("DB Connected successfully");
  } catch (err) {
    console.error("DB Connection Error:", err);
    throw err;
  }
};

// Middleware to ensure DB connection per request
appRoute.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ message: "Database Connection Failed", error: error.message });
  }
});

appRoute.use("/api/v1", teacherRoute);

// For local development running via `node index.js`
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  appRoute.listen(PORT, () => {
    console.log(`Application Running on port ${PORT}`);
  });
}

export default appRoute;