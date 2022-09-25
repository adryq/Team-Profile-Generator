const managerSection = (manager) => {
  return `
    <div class="card">
    <div class="card-header">
      <h1>${manager.name}</h1>
      <p>Manager</p>
    </div>
    <div class="card-body">
    <p>Employee ID:${manager.eid}</p>
    <p>Email:${manager.email}</p>
    <p>Office Number:${manager.officeNumber}</p>
    </div>
  
  `
}

const engineerSection = (engineer) => {
  return `
    <div class="card">
    <div class="card-header">
      <h1>${engineer.name}</h1>
      <p>Engineer</p>
    </div>
    <div class="card-body">
    <p>Employee ID:${engineer.eid}</p>
    <p>Email:${engineer.email}</p>
    <p>GitHub:${engineer.github}</p>
    </div>
  
  `;
}

const internSection = (intern) => {
  return `
    <div class="card">
    <div class="card-header">
      <h1>${intern.name}</h1>
      <p>Intern</p>
    </div>
    <div class="card-body">
    <p>Employee ID:${intern.eid}</p>
    <p>Email:${intern.email}</p>
    <p>School:${intern.school}</p>
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
    </head>
    <body>
    <h1 class="team">My Team</h1>
    <section class="section">
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
