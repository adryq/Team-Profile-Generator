const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generatePage = require('./src/generatePage');

const team = [];

const createTeam = async () => {
    console.log(`
    =================
    Create a New Team
    =================
    `);
    
    return await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: " What is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter manager's name");
                return false;
            }
        }
      },
      {
          type: 'input',
          name: 'eid',
          message: "What is the manager's employee ID?",
          validate: eidInput => {
              if (eidInput){
                  return true;
              } else {
                  console.log("Please enter the manager's employee ID")
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter the manager's email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: officeNumberInput => {
            if (officeNumberInput){
                return true;
            } else {
                console.log("Please enter the manager's office number")
                return false;
            }
        }
    }   
    ])
    .then( input => {
        const {name, eid, email, officeNumber} = input;
        const manager = new Manager(name, eid, email, officeNumber);
        team.push(manager);
        // console.log(manager);
        promptMember()
        .then(team => {
            return generatePage(team);
        })
        .then(pageString => {
            const pageOutput = fs.writeFile('./dist/index.html', pageString, err => {
                if (err) throw err;
                console.log('html created')
            })
            return pageOutput;
        })
        .catch( err => {
            console.log(err)
        })
    }

    )
  };

  const promptMember = async  () => {
      console.log(`
        =================
        Add a New Member
        =================
     ` )
     return inquirer.prompt([
         {
             type: 'list',
             name:'role',
             message: "Who would you like to add to the team?",
             choices: ['Engineer', 'Intern']
         },
         {
             type: 'input',
             name: 'name',
             message: "What is the employee's name?",
             validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's name");
                    return false;
                }
             }
         },
         {
            type: 'input',
            name: 'eid',
            message: "What is the employee's ID number?",
            validate: eidInput => {
                if (eidInput){
                    return true;
                } else {
                    console.log("Please enter the employee ID number")
                    return false;
                }
            }
        },
         {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log("Please enter the employee's email")
                    return false;
                }
          } 
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log("Please enter the engineer's Github")
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput){
                    return true;
                } else {
                    console.log("Please enter the intern's school")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMember',
            message: "Would you like to add another member to the team?",
            default: 'true'
        }    

     ])
     .then(input => {
         if (input.role === 'Engineer'){
             const {name, eid, email, github} = input;
             const engineer = new Engineer(name, eid, email, github);
             team.push(engineer)
         }
         if (input.role === 'Intern'){
            const {name, eid, email, school} = input;
            const intern = new Intern(name, eid, email, school);
            team.push(intern)
        }
        if (input.addMember){
            return promptMember(team);
        }
        if (!input.addMember){
            return team;
        }
    
    }
     )
  }

createTeam()

 
