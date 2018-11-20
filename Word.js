var Letter = require('./Letter.js');
console.log('Word.js. - Loaded');

function Word(word) {
    this.word = word.split("");
    this.wordObjArray = [];
    this.arrayOfLettersObj = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.wordObjArray.push(new Letter(this.word[i]));
        }
    }
    this.letterToWords = function () {
        var wholeWord = '';
        for (var i = 0; i < this.wordObjArray.length; i++) {
            var letterOrUnderScore = this.wordObjArray[i].returnOneLetter();
            // console.log(letterOrUnderScore)  
            wholeWord = wholeWord + letterOrUnderScore;          
        }
        return wholeWord;
    }
    this.isLetterInWord = function (character) {
        for (var i = 0; i < this.wordObjArray.length; i++) {
            var correctOrNot = this.wordObjArray[i].isLetter(character);
            // console.log(correctOrNot);
        }
    }
    this.printStats = function () {
        console.log(this.word);
        console.log(this.wordObjArray);
    }
}

Word.prototype.toString = function() {
    return this.letterToWords();
}

// var hi = new Word('hi');
// hi.arrayOfLettersObj();
// console.log(hi + '');
// hi.letterToWords();
// hi.isLetterInWord('i');
// hi.isLetterInWord('h');
// hi.letterToWords();

module.exports = Word