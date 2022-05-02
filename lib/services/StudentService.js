class StudentServices {
    static getAllStudents(students){
        return students;
    }

    static getMailStudentsCertificated(students){
        const studentsWithCertificate = students.filter((students) => students.haveCertification === true);
        const mailStudentsWithCertificate = studentsWithCertificate.map((students) => students.email);
        return mailStudentsWithCertificate;
    }

    static getStudentsWithCredits(students){
        const studentsWithCredits = students.filter((students) => students.credits > 500);
        return studentsWithCredits;
    }
}

module.exports = StudentServices;
