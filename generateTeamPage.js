const fs = require('fs');
const validator = require('validator');
const {Manager, Engineer, Intern} = require('./entities/employee');

generateTeamPage = (teamName, manager, employeeList, internsList) => {
console.log(teamName, manager, employeeList, internsList);

let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <title class="title">${teamName}</title>
</head>
<body>
    <section id="teamNameHeader" class="bg-info align-content-center text-white ">${teamName}</section>
    <section id="teamDetails" class="d-flex align-content-center flex-wrap">${getMangerContent(manager)}
        ${getEmployeesContent(employeeList)}
        ${getInternsContent(internsList)}
        </section>
</body>
</html>`;

fs.writeFile('./teampageGenerated.html' , template, err => {
    if(err){
        console.log(err);
        return false;
    }
    console.log('team page generated');
});
}

getMangerContent = (manager) => {
 return getCard(manager);
 
}
getEmployeesContent = (employees) => {
    let employeeCards = [];
    employees.forEach((employee) => {
        let card = getCard(employee);
        employeeCards.push(card);
    } )
   return employeeCards.join('');

}
getInternsContent = (interns) => {
    let internCards = [];
    interns.forEach((intern) => {
        let card = getCard(intern);
        internCards.push(card);
    } )
   
return internCards.join('');
}

getCard = (employee) => {
    let card ;
    switch(employee.getRole()){
    case 'Manager':
        card =  ` <div class="card col-md-2 text-dark m-2 px-0" id="engineer">
        <div class="card-body bg-dark text-white col-sm-12 col-md-12 mx-0 px-0">
                <h5 class="card-title" id="name">${employee.getName()}</h5>
                <h5 class="card-title" id="role">${employee.getRole()}</h5>
                <div class="bg-light text-dark">
                <p class="card-text" id="ID">ID: ${employee.getId()}</p>
                <p class="card-text" id="Email">Email: <a href="${employee.getEmail()}" alt="mailto"> ${employee.getEmail()} </a></p>
                <p class="card-text" id="OfficeNumber">OfficeNumber: ${employee.getOfficeNumber()}</p>
                </div>
        </div>
        </div>`
        break;
    case  'Engineer':
        card = ` <div class="card col-md-2 text-dark m-2 px-0" id="engineer">
        <div class="card-body bg-dark text-white col-sm-12 col-md-12 mx-0 px-0">
                <h5 class="card-title" id="name">${employee.getName()}</h5>
                <h5 class="card-title" id="role">${employee.getRole()}</h5>
                <div class="bg-light text-dark">
                <p class="card-text" id="ID">ID: ${employee.getId()}</p>
                <p class="card-text" id="Email">Email: <a href="${employee.getEmail()}" alt="mailto"> ${employee.getEmail()}</a></p>
                <p class="card-text" id="GitHubID">GitHub: <a href="https://github.com/${employee.getGitHub()}" alt="github account"> ${employee.getGitHub()} </a></p>
                </div>
        </div>
        </div>`
        break;
    case 'Intern' :
      card =   ` <div class="card col-md-2 text-dark m-2 px-0" id="intern">
        <div class="card-body bg-dark text-white col-sm-12 col-md-12 mx-0 px-0">
                <h5 class="card-title" id="name">${employee.getName()}</h5>
                <h5 class="card-title" id="role">${employee.getRole()}</h5>
                <div class="bg-light text-dark">
                <p class="card-text" id="ID">ID: ${employee.getId()}</p>
                <p class="card-text" id="Email">Email: <a href="${employee.getEmail()}" alt="mailto"> ${employee.getEmail()}</a></p>
                <p class="card-text" id="school">School: ${employee.getSchool()}</p>
                </div>
        </div>
        </div>`

        break;}

        return card;
}
module.exports = {generateTeamPage, getCard, getMangerContent, getEmployeesContent, getInternsContent}