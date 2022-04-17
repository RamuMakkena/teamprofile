const {generateTeamPage, getCard, getMangerContent, getEmployeesContent, getInternsContent} = require('../generateTeamPage');
const {Manager, Engineer, Intern} = require('../entities/employee');
const fs = require('fs');
const manager = new Manager('ramu', '1', 'ramu@ramu.com', '1234567890');
const employee1 = new Engineer('employee1', '2', 'employee@employee.com', 'empgithub');
const employee2 = new Engineer('employee2', '3', 'employee2@employee.com', 'empgithub2');
const intern1 = new Intern('intern1', '4', 'intern@intern.com', 'intern1school');
const intern2 = new Intern('intern2', '5', 'intern2@intern.com', 'intern2school')
const employeeslist = [employee1, employee2];
const internsList = [intern1, intern2];


describe('get card tests', () => {
    it('for engineer object it shoudlr eturn employee card', () => {
        const employee1Card = ` <div class="card col-md-2 text-dark m-2 px-0" id="engineer">
        <div class="card-body bg-dark text-white col-sm-12 col-md-12 mx-0 px-0">
                <h5 class="card-title" id="name">${employee1.getName()}</h5>
                <h5 class="card-title" id="role">${employee1.getRole()}</h5>
                <div class="bg-light text-dark">
                <p class="card-text" id="ID">ID: ${employee1.getId()}</p>
                <p class="card-text" id="Email">Email: <a href="${employee1.getEmail()}" alt="mailto"> ${employee1.getEmail()}</a></p>
                <p class="card-text" id="GitHubID">GitHub: <a href="https://github.com/${employee1.getGitHub()}" alt="github account"> ${employee1.getGitHub()} </a></p>
                </div>
        </div>
        </div>`

        expect(employee1Card).toEqual(getCard(employee1));

    });
    it('for manager object it shoudlr eturn employee card', () => {
        const managerCard =  ` <div class="card col-md-2 text-dark m-2 px-0" id="engineer">
        <div class="card-body bg-dark text-white col-sm-12 col-md-12 mx-0 px-0">
                <h5 class="card-title" id="name">${manager.getName()}</h5>
                <h5 class="card-title" id="role">${manager.getRole()}</h5>
                <div class="bg-light text-dark">
                <p class="card-text" id="ID">ID: ${manager.getId()}</p>
                <p class="card-text" id="Email">Email: <a href="${manager.getEmail()}" alt="mailto"> ${manager.getEmail()} </a></p>
                <p class="card-text" id="OfficeNumber">OfficeNumber: ${manager.getOfficeNumber()}</p>
                </div>
        </div>
        </div>`

        expect(managerCard).toEqual(getCard(manager));

    });
    it('for intern object it shoudlr eturn employee card', () => {
        const intern1Card = ` <div class="card col-md-2 text-dark m-2 px-0" id="intern">
        <div class="card-body bg-dark text-white col-sm-12 col-md-12 mx-0 px-0">
                <h5 class="card-title" id="name">${intern1.getName()}</h5>
                <h5 class="card-title" id="role">${intern1.getRole()}</h5>
                <div class="bg-light text-dark">
                <p class="card-text" id="ID">ID: ${intern1.getId()}</p>
                <p class="card-text" id="Email">Email: <a href="${intern1.getEmail()}" alt="mailto"> ${intern1.getEmail()}</a></p>
                <p class="card-text" id="school">School: ${intern1.getSchool()}</p>
                </div>
        </div>
        </div>`

        expect(intern1Card).toEqual(getCard(intern1));

    });

});

describe('generateTeamPage test', () => {
    it('should generate teamPage', async () => {
       await generateTeamPage('sample', manager, employeeslist, internsList);
        // expect(getCard).toHaveBeenCalled();
        expect(new Promise(r=>fs.access('teamPageGenerated.html', fs.constants.F_OK, e => r(!e))))
        
    })

});