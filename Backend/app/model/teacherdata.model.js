import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        teacherId: {
            type: Number,
            required: true,
            unique: true
        },
        teacherName: {
            type: String,
            required: true
        },
        degreeHold: {
            type: String,
            required: true
        },
        specializationSubject: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        versionKey: false
    }
)

const teacherDataModel = mongoose.model("teacherOfficialData", teacherSchema);

export { teacherDataModel };