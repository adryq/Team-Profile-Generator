const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/generatePage');


// const generateHTML = generatePage();

// fs.writeFile('./dist/index.html', generateHTML, err => {
//   if (err) throw err;

//   console.log('Page complete! Check out index.html to see the output!');
// });

const promptUser = () => {
    console.log(`
  =================
  Create a New Team
  =================
  `);
    return inquirer.prompt([
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
          message: "What is your manager's employee ID?",
          validate: eidInput => {
              if (eidInput){
                  return true;
              } else {
                  console.log("Please enter your manager's employee ID")
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your manager's email?",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter your manager's email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number?",
        validate: officeNumberInput => {
            if (officeNumberInput){
                return true;
            } else {
                console.log("Please enter your manager's office number")
                return false;
            }
        }
    }
     
      
    ]);
  };