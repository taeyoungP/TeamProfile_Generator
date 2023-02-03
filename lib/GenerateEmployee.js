const inquirer = require('inquirer');
const fs = require('fs');
const generatehtml = require('./generateHtml')

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

validateEmail = function(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

isNum = function(val){
    let isnum = /^\d+$/.test(val);
    return isnum;
}

class GenerateEmployee {
    constructor() {
        this.managers = []; // collections of managers, engineers, interns
        this.engineers = [];
        this.interns = [];
    }
    //INIT and MANAGER INFO
    generateManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter Manager's name: ",
                    validate: function (input){
                        if(input.length < 1){
                            console.log("Please input name: ");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter Manager's id: ",
                    validate: function(input){
                        if(input.length < 1){
                            console.log("Please input id: ");
                            return false;
                        } else if(!isNum(input)){
                            console.log("Please input correct id! ");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter Manager's email: ",
                    validate: function(email){
                        if((validateEmail(email))){
                            return true;
                        }
                        console.log("Please input valid email address");
                        return false;
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter Manager's office number: ",
                    validate: function(input){
                        if(input.length < 1){
                            console.log("Please input office number: ");
                            return false;
                        } else if(!isNum(input)){
                            console.log("Please input correct office number! ");
                            return false;
                        }
                        return true;
                    }
                },
            ])
            .then((data) => {
                const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                //console.log(`${data.name} + ${data.id} + ${data.email} + ${data.officeNumber}`);
                this.managers.push(manager);
                console.log(`Manager: ${data.name} has been added!`)
                this.addEmployee();
            });
    }
    //Inquirer for engineer profile and add to employees
    addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter Engineer's name: ",
                    validate: function (input){
                        if(input.length < 1){
                            console.log("Please input name: ");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter Engineer's id: ",
                    validate: function(input){
                        if(input.length < 1){
                            console.log("Please input id: ");
                            return false;
                        } else if(!isNum(input)){
                            console.log("Please input correct id! ");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter Engineer's email: ",
                    validate: function(email){
                        if((validateEmail(email))){
                            return true;
                        }
                        console.log("Please input valid email address");
                        return false;
                    }
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter Engineer's GitHub username: ",
                    validate: function(input){
                        if(input.length < 1){
                            console.log("Please input GitHub username: ");
                            return false;
                        }
                        return true;
                    }
                },
            ])
            .then(data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                this.engineers.push(engineer);
                console.log(`Engineer: ${data.name} has been added!`)
                this.addEmployee();
            });
    }
    //Inquirer for intern profile and add to employees
    addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter Intern's name: ",
                    validate: function (input){
                        if(input.length < 1){
                            console.log("Please input name: ");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter Intern's id: ",
                    validate: function(input){
                        if(input.length < 1){
                            console.log("Please input id: ");
                            return false;
                        } else if(!isNum(input)){
                            console.log("Please input correct id! ");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter Intern's email: ",
                    validate: function(email){
                        if((validateEmail(email))){
                            return true;
                        }
                        console.log("Please input valid email address");
                        return false;
                    }
                },
                {
                    type: "input",
                    name: "school",
                    message: "Please enter Intern's School Name: ",
                    validate: function(input){
                        if(input.length < 1){
                            console.log("Please input School Name: ");
                            return false;
                        }
                        return true;
                    }
                },
            ])
            .then(data => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                this.interns.push(intern);
                console.log(`Intern: ${data.name} has been added!`)
                this.addEmployee();
            });
    }

    //Finish up the questions and create html file based on data from this.managers, engineers, interns;
    finish() {
        const fileName = `myTeam.html`;

        const html = generatehtml.generateHtml(this.managers, this.engineers, this.interns);

        fs.writeFile(fileName, html, (error) =>
          error ? console.log(error) : console.log('Thank you! Your team profile has been generated!')
        );
        
        console.log('finished');
    }

    addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'Who would you like to add?',
                    choices: ['Engineer', 'Intern', 'Exit'],
                },
            ])
            .then(data => {
                if(data.choice === 'Engineer'){
                    this.addEngineer();
                    //
                }
                else if(data.choice === 'Intern'){
                    this.addIntern();
                    //
                }
                else if(data.choice === 'Exit'){
                    this.finish();
                }
            });
    }

    init(){
        this.generateManager(); //Initalize app starting from generating team manager

    }

    generate() {
        console.log("Generate Start: ");
        this.init();
    }

}

module.exports = GenerateEmployee;