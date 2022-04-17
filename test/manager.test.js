const {Manager} = require('../entities/employee')
describe('Manager Test', () => {
    it("Adding a manager", () => {
        const manager = new Manager('ramu', '1', 'ram@ram.com', '5136580599');
        expect(manager.getName()).toEqual("ramu");
        expect(manager.getId()).toEqual("1");
        expect(manager.getEmail()).toEqual("ram@ram.com");
        expect(manager.getOfficeNumber()).toEqual("5136580599");
        expect(manager.getRole()).toEqual("Manager");
    });
});