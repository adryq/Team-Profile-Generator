const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, eid, email, school){
        super (name, eid, email, school)
        this.school = school       
    }
   
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;