class StudentServices {
    static getAllStudents(students){
        return students;
    }

    static getMailStudentsCertificated(students){
        const studentsWithCertificate = students.filter((students) => students.haveCertification === true);
        const mailStudentsWithCertificate = studentsWithCertificate.map((students) => students.email);
        return mailStudentsWithCertificate;
    }
}

module.exports = StudentServices;
