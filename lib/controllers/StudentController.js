const StudentService = require("../services/StudentService");
const Reader = require("../utils/reader");

class StudentController {
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        const studentsService = StudentService.getAllStudents(students);
        return studentsService;
    }

    static getMailStudentsCertificated(){
        const students = this.getAllStudents();
        const mailStudentsWithCertificate = StudentService.getMailStudentsCertificated(students);
        return mailStudentsWithCertificate;
    }

    static getStudentsWithCredits(){
        const students = this.getAllStudents();
        const studentsWithCredits = StudentService.getStudentsWithCredits(students);
        return studentsWithCredits;
    }
}

module.exports = StudentController;