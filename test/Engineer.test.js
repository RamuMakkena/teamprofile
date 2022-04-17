const {Engineer} = require('../entities/employee')
describe('Engineer Test', () => {
    it("Adding an Engineer", () => {
        const engineer = new Engineer('ramu', '1', 'ram@ram.com', 'rammak');
        expect(engineer.getName()).toEqual("ramu");
        expect(engineer.getId()).toEqual("1");
        expect(engineer.getEmail()).toEqual("ram@ram.com");
        expect(engineer.getGitHub()).toEqual("rammak");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});