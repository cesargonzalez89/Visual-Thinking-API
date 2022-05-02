const StudentService = require("./../../lib/services/StudentService");

describe("Tests para StudentService", () => {
    test("Requerimiento 1: Obtener la cantidad de estudiantes", () => {
        const students = [{name: "Warren"}];
        const studentsService = StudentService.getAllStudents(students);
        expect(studentsService.length).toBe(1);
    });
});
