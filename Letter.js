console.log('Letter.js. - Loaded')

function Letter(oneLetter){
    this.oneLetter = oneLetter;
    this.guessedOrNot = false;
    this.returnOneLetter = function (){
        if (this.guessedOrNot){
            return (" " + this.oneLetter + " ");
        }
        else {
            return " _ ";
        }
    };
    this.isLetter = function (guess) {
        if (guess === this.oneLetter){
            this.guessedOrNot = true;
            // return "correct!";
        }
        else {
            // return "Wrong Letter.";
        }
    }
}

// Testing

// var letterR = new Letter("r");
// console.log(letterR.returnOneLetter());
// console.log(letterR.isLetter("R"));
// console.log(letterR.returnOneLetter());
// console.log(letterR.isLetter("r"));
// console.log(letterR.returnOneLetter());

module.exports = Letter;