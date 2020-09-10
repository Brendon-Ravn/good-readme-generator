const fs = require("fs");
const path = require('path')
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
     type: "input",
     name: "project",
     message:"What is the name of your project?"
    },
    {
     type: "input",
     name: "description",
     message:"Write a short description of your project"
    },
    {
     type: "input",
     name: "url",
     message:"What is the project URL?"
    },
    {
     type: "input",
     name: "username",
     message:"What is your GitHub username?"
    },
    {
     type: "input",
     name: "email",
     message:"What is your email?"
    },
    {
     type: "checkbox",
     name: "license",
     message:"What licensing was used?",
     choices: ["APACHE", "GPL", "MIT", "None"]
    },
    {
     type: "input",
     name: "install",
     message:"What dependencies need to be installed?"
    },
    {
     type: "input",
     name: "test",
     message:"What command needs to be used for testing?"
    },
    {
     type: "input",
     name: "repo",
     message:"What does the user need to know about using the repo?"
    },
    {
     type: "input",
     name: "contribute",
     message:"How can the user contribute to the repo?"
    },
];

function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(path.join(process.cwd(), fileName), data, err=> {
        if (err) throw err;
        console.log("Saved")
    });
};

function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile("ReadMe.MD", generateMarkdown(data))
    })
}

init();