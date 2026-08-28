import express from "express";
import { addTeacherData, deleteTeacherEntry, getTeacherList, updateTeacherData } from "../controller/teacherdata.controller.js";

let teacherRoute = express.Router();

teacherRoute.post("/add-teacher", addTeacherData); //http://localhost:3000/api/v1/add-teacher
teacherRoute.get("/list-teacher", getTeacherList); //http://localhost:3000/api/v1/list-teacher
teacherRoute.put("/update-teacher/:id",updateTeacherData); //http://localhost:3000/api/v1/update-teacher/:id
teacherRoute.delete("/delete-teacher/:id", deleteTeacherEntry); //http://localhost:3000/api/v1/delete-teacher/:id

export { teacherRoute };