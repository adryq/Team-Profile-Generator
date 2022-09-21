class Employee {
    constructor(name, eid, email){
        this.name = name;
        this.eid = eid;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId(){
        return this.eid
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return `Employee`
    }
}