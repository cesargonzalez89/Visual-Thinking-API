const StudentController = require("./../../lib/controllers/StudentController");

describe("Tests para StudentController", () => {
    test("Requerimiento 1: Obtener la cantidad de estudiantes", () => {
        const studentsService = StudentController.getAllStudents();
        expect(studentsService.length).toBe(51);
    });

    test("Requerimiento 2: Obtener los emails de todos los estudiantes que tengan certificación.", () => {
        const studentsService = StudentController.getMailStudentsCertificated();
        expect(studentsService.length).toBe(29);
    });

    test("Requerimiento 3: consultar todos los estudiantes que tengan credits mayor a 500.", () => {
        const studentsService = StudentController.getStudentsWithCredits();
        expect(studentsService.length).toBe(27);
    });

});