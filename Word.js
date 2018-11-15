var Letter = require('./Letter.js');
console.log('Word.js. - Loaded');

function Word(word) {
    this.word = word.split("");
    this.wordObjArray = [];
    this.arrayOfLettersObj = this.word.forEach(function (oneLetter){
        // this.wordObjArray.push("oneLetter");
    });
    this.letterToWords = function () {
        var createdWord = this.word.join(" ");
        return createdWord;
    }
    this.isLetterInWord = function (character) {

    }
    this.printStats = function () {
        console.log(this.word);
        console.log(this.wordObjArray);
    }
}

var hi = new Word('Banana');
hi.printStats();
console.log(hi.letterToWords());