function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return a&&b? true:false;
};

function either(a, b) {
  // your code here
  return a||b? true:false;
};

function none(a, b) {
  // your code here
  return !a&&!b? true:false;
};

function one(a, b) {
  // your code here
  return (a&&!b || !a&b)? true:false;
};

function truthiness(a) {
  // your code here
  return a? true:false;
};

function isEqual(a, b) {
  // your code here
  return a===b? true:false;
};

function isGreaterThan(a, b) {
  // your code here
  return a>b? true:false;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a<=b? true:false;
};

function isOdd(a) {
  // your code here
  return a%2!=0? true:false;
};

function isEven(a) {
  // your code here
  return a%2===0? true:false;
};

function isSquare(a) {
  // your code here
  return Number.isInteger(Math.sqrt(a))? true:false;

};

function startsWith(char, string) {
  // your code here
  return string.charAt(0) === char? true:false;
};

function containsVowels(string) {
  // your code here
  return /[aeiou]/gi.test(string);
};

function isLowerCase(string) {
  // your code here
  return !/[ABDCDEFGHIJKLMNOPQRSTUVWXYZ]/g.test(string);

};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
