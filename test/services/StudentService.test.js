const StudentService = require("./../../lib/services/StudentService");

describe("Tests para SrudentService", () => {
    test("Requerimiento 1: Obtener la cantidad de estudiantes", () => {
        const students = [{name: "Warren"}];
        const studentsService = StudentService.getAllStudents(students);
        expect(v.length).toBe(1);
    });
});
