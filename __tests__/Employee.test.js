const Employee = require('../lib/employee');

test('if created employee object', () => {
   
    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    
    const employee = new Employee(name, eid, email)

    expect(employee.name).toEqual('Adry');
    expect(employee.eid).toEqual('9');
    expect(employee.email).toEqual('adryq95@gmail.com');
});

test('get name', () => {

    const employee = new Employee('Adry', '9', 'adryq95@gmail.com');

    expect(employee.getName()).toEqual('Adry');

})

test('get employee id', () => {

    const employee = new Employee('Adry', '9', 'adryq95@gmail.com');

    expect(employee.getEid()).toEqual('9');

})

test('get email', () => {

    const employee = new Employee('Adry', '9', 'adryq95@gmail.com');

    expect(employee.getEmail()).toEqual('adryq95@gmail.com');

})

test('get role returning Employee', () => {

    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'

    const employee = new Employee(name, eid, email)

    const Role = employee.getRole();

    expect('Employee').toEqual(Role)

})





