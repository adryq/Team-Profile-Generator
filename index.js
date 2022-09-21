const fs = require('fs');
const generatePage = require('./src/generatePage');


const generateHTML = generatePage();

fs.writeFile('./dist/index.html', generateHTML, err => {
  if (err) throw err;

  console.log('Page complete! Check out index.html to see the output!');
});