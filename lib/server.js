const StudentController = require("./controllers/StudentController");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getAllStudents();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const mails = StudentController.getMailStudentsCertificated();
    response.json(mails);
});

app.get("/v1/students/credits", (request, response) => {
    const students = StudentController.getStudentsWithCredits();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});