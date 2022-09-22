const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, eid, email, officeNumber){
        super (name, eid, email)
        this.officeNumber = officeNumber       
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;