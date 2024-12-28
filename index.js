// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description',
    },
    {
        type: 'input',
        name: 'intallation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What steps are required in order for your project to function?',
    },
    {
        type: 'input',
        name: 'feature',
        message: 'What are the features of your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for your application',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'motive',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'reasoning',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'learnings',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'unique',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'licenseLink',
        message: 'Input your license link',
    },
    {
        type: 'input',
        name: 'licenseBadge',
        message: 'Input your license Badge',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then((answers) => {
        data = generateMarkdown(answers);

        fs.writeFile(fileName, data, (err) => 
            err ? console.log(err) : console.log('README.md was successfully created')    
        );
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md')
}

// Function call to initialize app
init();
