const fs = require('fs');

generateTeamPage = (teamName, manager, employeeList, internsList) => {
console.log(teamName, manager, employeeList, internsList);

let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="title">${teamName}</title>
</head>
<body>
    <section id="teamNameHeader">${teamName}</section>
    <section id="ManageDetails">${getMangerContent(manager)}</section>
        ${getEmployeesContent(employeeList)}
        ${getInternsContent(internsList)}
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
        return manager.getName();
}
getEmployeesContent = (employees) => {
        return employees[0].getRole();
}
getInternsContent = (interns) => {
    return interns[0].getRole();
}
module.exports = {generateTeamPage}

/*
Title: Center Team Name
First Row: Manager
separater with a heading Engineers
Second Row: Engineers
Separeatrt with heading Interns
Third Row: Interns
*/