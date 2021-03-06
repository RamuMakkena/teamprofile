class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
    setName(name){
        this.name = name;
    }
    setId(id){
        this.id = id;
    }
    setEmail(email){
        this.email = email;
    }
};


class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.role;
    }
    setOfficeNumber(officeNumber){
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name,id,email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return this.role;
    }
    setGitHub(gitHub){
        this.gitHub = gitHub;
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool(){
        return this.school;
    }
    setSchool(school){
        this.school = school;
    }
    getRole(){
        return this.role;
    }
}

module.exports = {Employee, Manager, Engineer, Intern}