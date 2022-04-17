const {Employee} = require('../entities/employee')
describe('Employee Test', () => {
    it("Adding an Employee", () => {
        const engineer = new Employee('ramu', '1', 'ram@ram.com');
        expect(engineer.getName()).toEqual("ramu");
        expect(engineer.getId()).toEqual("1");
        expect(engineer.getEmail()).toEqual("ram@ram.com");
        expect(engineer.getRole()).toEqual("Employee");
    });
});