const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, eid, email, github){
        super (name, eid, email, github)
        this.github = github       
    }
   
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;