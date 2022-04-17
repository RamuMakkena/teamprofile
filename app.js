const inquirer = require('inquirer');
const validator = require('validator');
const {Manager, Engineer, Intern} = require('./entities/employee');
const { generateTeamPage } = require('./generateTeamPage');

//Sepearting questions to reuse based on role.
const teamNameQuestion =     {
        type: 'input',
        name: 'teamName',
        message:'Enter the teamName?',
        validate: teamNameInput => {
            if(!validator.isEmpty(teamNameInput)){
                return true;
            } else{
                console.log('Please enter a valid team name: ');
                return false;
            }
        }
    };
const nameQuestion =     {
        type: 'input',
        name: 'name',
        message:"Enter Name?",
        validate: nameInput => {
            if(!validator.isEmpty(nameInput)){
                return true;
            } else{
                console.log('Please enter a valid name: ');
                return false;
            }
        }
    };
const managerNameQuestion =     {
    type: 'input',
    name: 'managerName',
    message:"Enter Manager name?",
    validate: nameInput => {
        if(!validator.isEmpty(nameInput)){
            return true;
        } else{
            console.log('Please enter a valid name: ');
            return false;
        }
    }
};
const emailQuestion =     {
        type: 'input',
        name: 'emailAddress',
        message:"Enter email address?",
        validate: emailInput => {
            if(!validator.isEmpty(emailInput) && validator.isEmail(emailInput)){
                return true;
            } else{
                console.log('Please enter a valid email: ');
                return false;
            }
        }
    };
const employeeIdQuestion =     {
        type: 'input',
        name: 'employeeId',
        message:"Enter employeeID ?",
        validate: employeeIDInput => {
            if(!validator.isEmpty(employeeIDInput)){
                return true;
            } else{
                console.log('Please enter a valid employeeID: ');
                return false;
            }
        }
    };
const officeNumberQuestion =    {
        type: 'input',
        name: 'officeNumber',
        message:"Enter office number(Numeric without spaces)?",
        validate: officeNumberInput => {
            if(!validator.isEmpty(officeNumberInput) && validator.isNumeric(officeNumberInput)){
                return true;
            } else{
                console.log('Please enter a valid numeric office number for manager with out spaces: ');
                return false;
            }
        }
    };
const schoolNameQuestion =     {
        type: 'input',
        name: 'school',
        message:"Enter school Name?",
        validate: schoolNameInput => {
            if(!validator.isEmpty(schoolNameInput)){
                return true;
            } else{
                console.log('Please enter a valid school name for Intern: ');
                return false;
            }
        }
    };
const gitHubIdQuestion =     {
        type: 'input',
        name: 'gitHub',
        message:"Enter gitHub ID?",
        validate: gitHubIDInput => {
            if(!validator.isEmpty(gitHubIDInput)){
                return true;
            } else{
                console.log('Please enter a valid github ID for engineer: ');
                return false;
            }
        }
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
    while(wantToAddMore ){
        let selectionType = await typeOfEmployee();
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

    //Calling genateTeamPage
    generateTeamPage(teamNameAnswer,manager, engineers, interns);

 }

 init();