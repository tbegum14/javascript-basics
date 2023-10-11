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
  return strings.map((word)=>word.toUpperCase())
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(word=>word.split('').reverse().join(''))
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(num=>num%2===0)
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter(item=>array.indexOf(item)!=index)
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(word=>/^[aeiou]/i.test(word))
};

const removeSpaces = string => {
  // your code here
  return string.split(' ').join('')
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((a,b)=>a+b,0)
};

const sortByLastLetter = strings => {
  // your code here
  return ((strings.map(word=>word.split('').reverse().join(''))).sort()).map(word=>word.split('').reverse().join(''))  
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
