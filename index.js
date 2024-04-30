const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

// class Svg{

//     constructor(){
//         this.textElement = '';
//         this.shapeElement = '';

//     }
//     render(){
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
//     }
//     setTextElement(text, color){
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
//     }
//     setShapeElement(shape){
//         this.shapeElement = shape.render();
//     }

// }

const questions = [

    {
        type: 'input',
        name: 'text',
        message: 'Text:Enter up to 3 characters for your logo:',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text Color:Enter a color keyword (or hex code)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Shape:Choose a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color:Enter a color keyword (or hex code)',
    },

];

inquirer.prompt(questions).then((answers) =>{
    const {text, textColor, shape, shapeColor} = answers;
    const shapeObj = new shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch(shape){
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
    }

    let x = 150, y = 120;
    if (shape =='Triangle'){
        y = 135;
    } else if (shape == 'Square'){
        y = 145;
    }

    const svg = `<svg xmls="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgElement}
    <text x="${x}" y="${y}" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`;
        
    fs.writeFile('logo.svg', svg, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    )
})

