const {Intern} = require('../entities/employee')
describe('Intern Test', () => {
    it("Adding an Intern", () => {
        const intern = new Intern('ramu', '1', 'ram@ram.com', 'UTAustin');
        expect(intern.getName()).toEqual("ramu");
        expect(intern.getId()).toEqual("1");
        expect(intern.getEmail()).toEqual("ram@ram.com");
        expect(intern.getSchool()).toEqual("UTAustin");
        expect(intern.getRole()).toEqual("Intern");
    });
});