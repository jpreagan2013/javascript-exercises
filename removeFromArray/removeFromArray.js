const removeFromArray = function() {
    var returnArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
         //splice can add AND remove, depeding on the parameters, this goes to index of the specified value and removes it, but only if the value exists in the array
        if (returnArray.indexOf(arguments[i]) > -1) {
            returnArray.splice(returnArray.indexOf(arguments[i]), 1);
        }
    }
    return returnArray;
}

module.exports = removeFromArray
