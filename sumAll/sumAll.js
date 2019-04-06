const sumAll = function() {
    if (arguments[0] < 0 || arguments[1] < 0) {
        return "ERROR";
    }
    else if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
        let count = 0;
        let startNumber = 0;
        let endNumber = 0;
        if (arguments[0] > arguments[1]) {
            startNumber = arguments[1];
            endNumber = arguments[0];
        } else {
            endNumber = arguments[1];
            startNumber = arguments[0];
        }
        for (let i = startNumber; i <= endNumber; i++) {
            count += i;
        }
        return count;
    }  else {
        return "ERROR";
    }
    
}

module.exports = sumAll
