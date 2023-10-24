// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the purpose/functionality of this project?",
        name: "description",
    },
    {
        type: "list",
        message: "Please select a license type:",
        name: "license",
        choices: ["Apache", "GNU", "MIT", "Mozilla", "Unlicense", "None"],
    },
    {
        type: "input",
        message: "What's the link to your GitHub profile?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What are the steps required to install this application?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use this application?",
        name: "usage",
    },
    {
        type: "input",
        message: "Are there any other contributors for this project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Is there any testing required for this application?",
        name: "testing",
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README file generated successfully.')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const readmeContent = generateMarkdown.generateMarkdown(data)
        const fileName = 'README.md'
        writeToFile(fileName, readmeContent)
    })
}

// Function call to initialize app
init();
