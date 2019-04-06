const ftoc = function() {
  //[°C] = ([°F] − 32) × ​5⁄9
  let input = arguments[0];
  let answer = (input - 32) * (5/9);
  return Math.round(answer*10)/10;
}

const ctof = function() {
  let input = arguments[0];
  let answer = input*(9/5)+32;
  return Math.round(answer*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
