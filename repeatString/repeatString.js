const repeatString = function(word, count) {
    var returnWord = '';
    var tempWord = '';
    if (count < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < count; i++) {
            returnWord = tempWord.concat(word);
            tempWord = returnWord;
        }
        return returnWord;
    }
    
    
}

module.exports = repeatString