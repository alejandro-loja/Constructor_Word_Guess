var Word = require('./Word.js');
var colors = require('colors');
var inquirer = require('inquirer');
var chosenWord = '';
var chosenWordObj;
var counter = 8;

var randomWordArray = ['helper', 'money', 'pepper', 'albert'];

var getRandomWord = function () {
    chosenWord = randomWordArray[Math.floor((Math.random() * randomWordArray.length))];
    chosenWordObj = new Word(chosenWord);
    chosenWordObj.arrayOfLettersObj();
    console.log('');
    console.log(chosenWordObj + '');
    console.log('');
    summonInquirer();
}

var summonInquirer = function (x) {
    // if (x === 'done'){
    //     return console.log('DONE!')
    // }

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter a Letter to Guess',
            name: 'guess',
            validate: function (x) {
                if (x.length === 1) {
                    return true;
                }
                else {
                    console.log('\n** Choose only one letter **'.red);
                }
            }
        }
    ])
        .then(function (inquireResponse) {
            // console.log('random word is: ' + chosenWord);
            var input = inquireResponse.guess;
            console.log('You have entered: ' + input);
            chosenWordObj.isLetterInWord(input);
            var choseWordObj_String = (chosenWordObj + '');

            console.log('');
            console.log(choseWordObj_String);
            console.log('');
            if (choseWordObj_String.indexOf(input) === -1) {
                counter--;
                if(counter === 0){
                    console.log('\nYOU LOSE!..Good-bye...\n'.bold.red);
                    console.log('***************'.red);
                    process.exit();
                }
            }
            var triesLeft = 'You have ' + counter + ' tries left.\n';
            console.log(colors.yellow(triesLeft));
            var underscoreOrNot = choseWordObj_String.indexOf('_');
            if (underscoreOrNot === -1) {
                console.log('\nYou Won!\n'.green);
                console.log('** New Word **'.red);
                counter = 8;
                getRandomWord();
            } else {
                summonInquirer();
            }
        })
};

getRandomWord();



