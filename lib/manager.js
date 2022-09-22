const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, eid, email, officeNumber){
        super (name, eid, email)
        this.officeNumber = officeNumber       
    }
   
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager;