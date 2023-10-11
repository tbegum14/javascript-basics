const getNthElement = (index, array) => {
  // your code here
  while (index>=array.length){
    index = index - array.length
  }
  return array[index];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString()
};

const csvStringToArray = string => {
  // your code here
  return string.split(',')
};

const addToArray = (element, array) => {
  // your code here
  array.push(element)
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element)
 

};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1)

};

const numbersToStrings = numbers => {
  // your code here
  return numbers.join().split(',')
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
