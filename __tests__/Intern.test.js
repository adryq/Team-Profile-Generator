const Intern = require('../lib/intern');


test('if created intern object', () => {
   
    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    const school = 'Columbia'
    
    const intern = new Intern(name, eid, email, school)

    expect(intern.name).toEqual('Adry');
    expect(intern.eid).toEqual('9');
    expect(intern.email).toEqual('adryq95@gmail.com');
    expect(intern.school).toEqual('Columbia');
    
});

test('get name', () => {

    const intern = new Intern('Adry', '9', 'adryq95@gmail.com', 'Columbia');

    expect(intern.getName()).toEqual('Adry');

})

test('get intern id', () => {

    const intern = new Intern('Adry', '9', 'adryq95@gmail.com', 'Columbia');

    expect(intern.getEid()).toEqual('9');

})

test('get email', () => {

    const intern = new Intern('Adry', '9', 'adryq95@gmail.com', 'Columbia');

    expect(intern.getEmail()).toEqual('adryq95@gmail.com');

})

test('get school ', () => {

    const intern = new Intern('Adry', '9', 'adryq95@gmail.com', 'Columbia');

    expect(intern.getSchool()).toEqual('Columbia');

})

test('get role returning intern', () => {

    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    const school = 'Columbia'

    const intern = new Intern(name, eid, email, school)

    const Role = intern.getRole();

    expect('Intern').toEqual(Role)

})