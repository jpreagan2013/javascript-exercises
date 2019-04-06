const reverseString = function(stringToReverse) {
    var returnString = "";
    for(let i = stringToReverse.length; i > 0; i--) {
        var res = stringToReverse.charAt(i-1);
        var returnString = returnString.concat(res);
    }
    return returnString;
}

module.exports = reverseString
