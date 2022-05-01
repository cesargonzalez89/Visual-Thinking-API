const Reader = require("./../../lib/utils/reader");

describe("Test para Reader", () => {
    test("Requerimiento 1: Calcular el numero de estudiantes", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        expect(students.length).toBe(51);
    });
});