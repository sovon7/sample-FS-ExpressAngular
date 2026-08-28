import { teacherDataModel } from "../model/teacherdata.model.js";

let addTeacherData = async (req, res) => {
    let { tName, degree, subject, age, email } = req.body;

    // creating teacher id 
    const schoolUniqueId = 312;
    let teacherIdGenerate;
    let lastIdTeacher = await teacherDataModel.findOne().sort({ teacherId: "desc"});
    if(lastIdTeacher){
        teacherIdGenerate = lastIdTeacher.teacherId + 1;
    } else {
        teacherIdGenerate = `${schoolUniqueId}001`;
    }
    

    let tData = {
        teacherId: teacherIdGenerate,
        teacherName: tName,
        degreeHold: degree,
        specializationSubject: subject,
        age: age,
        email: email
    };

    teacherDataModel.create(tData).then(() => {
        res.send({ status: 1, message: "Teacher Data Added Successfully" });
    }).catch((err) => {
        res.send({ status: 0, message: "Error:- "+err.message });
    })

}

let getTeacherList = async (req, res) => {
    const teacherList = await teacherDataModel.find();
    let response = {
        status: 1,
        response: teacherList
    }
    res.send(response);
}

let updateTeacherData = async (req, res) => {
    let teacherDetailsId = req.params.id;
    let { tName, degree, subject, age, email } = req.body;
    let teacherDataUpdate = {
        teacherName: tName,
        degreeHold: degree,
        specializationSubject: subject,
        age: age,
        email: email
    };

    let updateRes = await teacherDataModel.updateOne(
        { teacherId: teacherDetailsId },
        { $set: teacherDataUpdate }
    )

    if (updateRes.matchedCount === 0) {

        res.send({
            status: 0,
            response: "Teacher data not present"
        });

    } else if (updateRes.modifiedCount > 0) {
        res.send({
            status: 1,
            response: "Teacher data updated successfully",
        })
    } else {
        res.send({
            status: 0,
            response: "Nothing to update...already same data present",
        })
    }

}

let deleteTeacherEntry = async (req, res) => {
    let teacherDetailsId = req.params.id;
    if (teacherDetailsId) {
        let deleteRes = await teacherDataModel.deleteOne({ teacherId: teacherDetailsId });
        if (deleteRes.deletedCount > 0) {
            res.send({
                status: 1,
                response: "Teacher data deleted successfully"
            })
        } else {
            res.send({
                staus: 0,
                response: "Teacher data not available"
            })
        }
    }
}

export { addTeacherData, getTeacherList, updateTeacherData, deleteTeacherEntry };