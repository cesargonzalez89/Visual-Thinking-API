const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/reader");
describe("Tests para StudentService", () => {
    test("Requerimiento 1: Obtener la cantidad de estudiantes", () => {
        const students = [{name: "Warren"}];
        const studentsService = StudentService.getAllStudents(students);
        expect(studentsService.length).toBe(1);
    });

    test("Requerimiento 2: Obtener los emails de todos los estudiantes que tengan certificación.", () => {
        const students = [{name: "Warren", email: "Todd@visualpartnership.xyz", haveCertification: true}, {name: "Lucinda", email: "Sexton@visualpartnership.xyz",haveCertification: true}, {name: "Phillips", email: "Camacho@visualpartnership.xyz", haveCertification: false}];
        const studentsService = StudentService.getMailStudentsCertificated(students);
        expect(studentsService.length).toBe(2);
    });

    test("Requerimiento 3: Obtener los emails de todos los estudiantes que tengan certificación.", () => {
        const students = [{name: "Warren", email: "Todd@visualpartnership.xyz", haveCertification: true}, {name: "Lucinda", email: "Sexton@visualpartnership.xyz",haveCertification: true}, {name: "Phillips", email: "Camacho@visualpartnership.xyz", haveCertification: false}];
        const studentsService = StudentService.getMailStudentsCertificated(students);
        expect(studentsService).toStrictEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz"]);
    });

    test("Requerimiento 4: consultar todos los estudiantes que tengan credits mayor a 500.", () => {
        const students = Reader.readJsonFile("visualpartners.test.json");
        const studentsService = StudentService.getStudentsWithCredits(students);
        expect(studentsService.length).toStrictEqual(3);
    });

});