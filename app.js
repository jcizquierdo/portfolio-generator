// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(portfolioData);
// const profileDataArgs = process.argv.slice(2);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// const [name, github] = profileDataArgs;

const inquirer = require('inquirer');
console.log(inquirer);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));