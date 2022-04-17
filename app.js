const inquirer = require('inquirer');
const fs = require('fs');
const {Manager, Engineer, Intern} = require('./entities/employee')
//Sepearting questions to reuse based on role.
const teamNameQuestion =     {
        type: 'input',
        name: 'teamName',
        message:'Enter the teamName?',

    };
const nameQuestion =     {
        type: 'input',
        name: 'name',
        message:"Enter Name?",
    };
const managerNameQuestion =     {
    type: 'input',
    name: 'managerName',
    message:"Enter Manager name?",
};
const emailQuestion =     {
        type: 'input',
        name: 'emailAddress',
        message:"Enter email address?",
    };
const employeeIdQuestion =     {
        type: 'input',
        name: 'employeeId',
        message:"Enter employeeID ?",
    };
const officeNumberQuestion =    {
        type: 'input',
        name: 'officeNumber',
        message:"Enter office number?",
    };
const schoolNameQuestion =     {
        type: 'input',
        name: 'school',
        message:"Enter school Name?",
    };
const gitHubIdQuestion =     {
        type: 'input',
        name: 'gitHub',
        message:"Enter gitHub ID?",
    };
const addMoreEmployeesQuestion = {
    type: 'confirm',
    name: 'addMore',
    message: 'Do you want to add more team members?',
    default: false
};
const typeOfEmployeeQuestion = {
    type: 'list',
    name: 'selectionType',
    message: 'Which employee you want to add?',
    choices: ['Engineer', 'Intern'],
    default: 'Engineer'
};

//Function to add manager
addManager = async () => {
    let manager;
    await inquirer.prompt([managerNameQuestion, employeeIdQuestion, emailQuestion, officeNumberQuestion])
    .then((answers) => { 
        const {managerName, employeeId, emailAddress, officeNumber} = answers;
        manager =  new Manager(managerName, employeeId, emailAddress, officeNumber);
    } );
    return manager;

}
//Function to add Engineer
addEngineer = async () => {
    let engineer;
    await inquirer.prompt([nameQuestion, employeeIdQuestion, emailQuestion, gitHubIdQuestion])
                .then( (answers) => {
                    const {name,emailAddress,employeeId, gitHub  } = answers;
                    engineer =  new Engineer(name,emailAddress,employeeId, gitHub);
                }); 
    return engineer;
}

//Function to add Intern
addIntern = async () => {
    let intern;
    await inquirer.prompt([nameQuestion, employeeIdQuestion, emailQuestion, schoolNameQuestion])
    .then( (answers) => {
        const {name,emailAddress,employeeId, school  } = answers;
        intern = new Intern(name,emailAddress,employeeId, school);
    }); 
    return intern;  
}

//function to confirm addition of new employees
confirmNewEmployee =  async () => {
    let decision = false;
     await inquirer.prompt([addMoreEmployeesQuestion])
    .then( (answers) => { 
        const {addMore} = answers;
    
       decision =  addMore;
    }) ;
    console.log('we are sending : '+decision);
    return decision;
}

//function to return type of employees we are using
typeOfEmployee = async () => {
    let selection ;
    await inquirer.prompt([typeOfEmployeeQuestion])
    .then((answers) => {
        const {selectionType} = answers;
        selection =  selectionType;
    });
    console.log ('selection type :'+selection)
    return selection;
}
//function to get team name
getTeamName = async ()=> {
    let teamNameAnswer ;
    await inquirer.prompt([teamNameQuestion])
    .then( (answers) => { 
        const {teamName} = answers;
       teamNameAnswer = teamName;
    }) ;
    return teamNameAnswer;
}

//Initial function
async function  init(){
    let teamNameAnswer = await getTeamName();
    let manager  = await addManager();    
    let engineers = [];
    let interns = [];
    
    let wantToAddMore = await confirmNewEmployee();
    console.log('are we adding new employees : '+wantToAddMore);
    while(wantToAddMore ){
        let selectionType = await typeOfEmployee();
        console.log('we got : '+selectionType);
        switch(selectionType){
            case 'Engineer':
                 engineers.push(await addEngineer());         
                break;
            case 'Intern':
                interns.push(await addIntern());
                break;
        }
        wantToAddMore = await confirmNewEmployee();
    }

    console.log(teamNameAnswer,manager, engineers, interns);

 }

 init();