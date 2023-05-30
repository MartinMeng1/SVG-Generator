const inquirer = require("inquirer");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: "text",
    message: 'What is the text for the logo? (Enter up to three characters)',
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
  }
},
  {
    type: "input",
    name: "textColor",
    message: "What is the color of your SVG logo text? (Enter a color keyword or a hexadecimal number)",
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What is the shape of your SVG logo? (Choose from the following)',
    choices: ['triangle', 'circle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What is the color of your SVG shape?',
  },
];

function init() {
  inquirer.prompt(questions).then(function (answers) {
    let shape;
     switch (answers.shape) {
        case 'triangle':
          shape = new Triangle(answers.shapeColor);
        break;
      case 'circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.shapeColor);
        break;
      default:
        console.log('Invalid shape selection');
        return;
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
}

init();













