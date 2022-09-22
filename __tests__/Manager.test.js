const Manager = require('../lib/manager');

test('if created Manager object', () => {
   
    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    const officeNumber = '1119'
    
    const manager = new Manager(name, eid, email, officeNumber)

    expect(manager.name).toEqual('Adry');
    expect(manager.eid).toEqual('9');
    expect(manager.email).toEqual('adryq95@gmail.com');
    expect(manager.officeNumber).toEqual('1119');
    
});

test('get name', () => {

    const manager = new Manager('Adry', '9', 'adryq95@gmail.com', '1119');

    expect(manager.getName()).toEqual('Adry');

})

test('get manager id', () => {

    const manager = new Manager('Adry', '9', 'adryq95@gmail.com', '1119');

    expect(manager.getEid()).toEqual('9');

})

test('get email', () => {

    const manager = new Manager('Adry', '9', 'adryq95@gmail.com', '1119');

    expect(manager.getEmail()).toEqual('adryq95@gmail.com');

})

test('get office number', () => {

    const manager = new Manager('Adry', '9', 'adryq95@gmail.com', '1119');

    expect(manager.getOfficeNumber()).toEqual('1119');

})

test('get role returning manager', () => {

    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    const officeNumber = '1119'

    const manager = new Manager(name, eid, email, officeNumber)

    const Role = manager.getRole();

    expect('Manager').toEqual(Role)

})