const Engineer = require('../lib/engineer');

test('if created engineer object', () => {
   
    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    const github = 'adryq'
    
    const engineer = new Engineer(name, eid, email, github)

    expect(engineer.name).toEqual('Adry');
    expect(engineer.eid).toEqual('9');
    expect(engineer.email).toEqual('adryq95@gmail.com');
    expect(engineer.github).toEqual('adryq');
    
});

test('get name', () => {

    const engineer = new Engineer('Adry', '9', 'adryq95@gmail.com', 'adryq');

    expect(engineer.getName()).toEqual('Adry');

})

test('get engineer id', () => {

    const engineer = new Engineer('Adry', '9', 'adryq95@gmail.com', 'adryq');

    expect(engineer.getEid()).toEqual('9');

})

test('get email', () => {

    const engineer = new Engineer('Adry', '9', 'adryq95@gmail.com', 'adryq');

    expect(engineer.getEmail()).toEqual('adryq95@gmail.com');

})

test('get github ', () => {

    const engineer = new Engineer('Adry', '9', 'adryq95@gmail.com', 'adryq');

    expect(engineer.getGithub()).toEqual('adryq');

})

test('get role returning engineer', () => {

    const name = 'Adry'
    const eid = '9'
    const email = 'adryq95@gmail.com'
    const github = 'adryq'

    const engineer = new Engineer(name, eid, email, github)

    const Role = engineer.getRole();

    expect('Engineer').toEqual(Role)

})