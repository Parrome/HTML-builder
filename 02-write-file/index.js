const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.writeFile(filePath, '', err => {
    if (err) {
              throw err
    }

    rl.question(`Hi, write your text `, (userInput)=>{

        fs.appendFile(filePath, `${userInput} `, err => {
            if (err) {
            throw err
            }
            writeText();
        });
    });
});

const writeText = function () { rl.question(``, (userInput2)=>{
    if (userInput2 == 'exit') { 
        console.log('Bye bye !!!!');
        // return;
        process.exit();
        // throw 'Bye bye';

    }

    fs.appendFile(filePath, `${userInput2} `, err => {
        if (err) {
        throw err
        }
    });
    writeText();
});}
