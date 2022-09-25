const managerSection = (manager) => {
  return `
  <div class="bg-red-100">
    <div class="card-header text-center text-lg font-bold">
      <h1>${manager.name}</h1>
      <p>Manager</p>
    </div>
    <div class="card-body pl-3">
    <p>Employee ID:${manager.eid}</p>
    <p class="email"> Email: <a href= "mailto: ${manager.email}"> ${manager.email}</a></p>
    <p>Office Number:${manager.officeNumber}</p>
    </div>
    </div>
  `
}

const engineerSection = (engineer) => {
  return `
  <div class="bg-red-100">
    <div class="card-header text-center text-lg font-bold">
      <h1>${engineer.name}</h1>
      <p>Engineer</p>
    </div>
    <div class="card-body pl-3">
    <p>Employee ID:${engineer.eid}</p>
    <p class="email"> Email: <a href= "mailto: ${engineer.email}"> ${engineer.email}</a></p>
    <p class="github"> GitHub: <a href= "https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    </div>
  `;
}

const internSection = (intern) => {
  return `
    <div class="bg-red-100">
    <div class="card-header text-center text-lg font-bold">
      <h1>${intern.name}</h1>
      <p>Intern</p>
    </div>
    <div class="card-body pl-3">
    <p>Employee ID:${intern.eid}</p>
    <p class="email"> Email: <a href= "mailto: ${intern.email}"> ${intern.email}</a></p>
    <p>School:${intern.school}</p>
    </div>
    </div>
  `;
}


const generateHTML = (employeeGroup) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="./index.css">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Team Profile</title>
    </head>
    <body>
    <h1 class="team">My Team</h1>
    <section class="grid grid-cols-3 gap-4 p-3 dropshadow-lg">
  ${employeeGroup}
    </section>
    </body>
    </html>
    `;

}




module.exports = generatePage = (data) => {
  
  let employeeCards = [];
  
  for (let i=0; i < data.length; i++){
    
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager'){
      const managerCard = managerSection(employee);
      employeeCards.push(managerCard);
    }
    if (role === 'Engineer'){
      const engineerCard = engineerSection(employee);
      employeeCards.push(engineerCard);
    }
    if (role === 'Intern'){
      const internCard = internSection(employee);
      employeeCards.push(internCard);
    }
    
  }

  const employeeGroup = employeeCards.join('');

  const HTMLpage = generateHTML(employeeGroup);
  return HTMLpage;
}
