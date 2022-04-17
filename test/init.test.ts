const {Manager, Engineer, Intern} = require('../entities/employee')

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
describe('Engineer Test', () => {
    it("Adding a manager", () => {
        const engineer = new Engineer('ramu', '1', 'ram@ram.com', 'rammak');
        expect(engineer.getName()).toEqual("ramu");
        expect(engineer.getId()).toEqual("1");
        expect(engineer.getEmail()).toEqual("ram@ram.com");
        expect(engineer.getGitHub()).toEqual("rammak");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});
describe('Manager Test', () => {
    it("Adding a manager", () => {
        const intern = new Intern('ramu', '1', 'ram@ram.com', 'UTAustin');
        expect(intern.getName()).toEqual("ramu");
        expect(intern.getId()).toEqual("1");
        expect(intern.getEmail()).toEqual("ram@ram.com");
        expect(intern.getSchool()).toEqual("UTAustin");
        expect(intern.getRole()).toEqual("Intern");
    });
});