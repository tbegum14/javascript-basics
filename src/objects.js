const createPerson = (name, age) => {
  // your code here
  return {name, age}
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return object[property]? true: false;
};

const isOver65 = person => {
  // your code here
  return person.age>65? true:false;
};

const getAges = people => {
  // your code here
  const array=[]
  for (let i=0; i<people.length;i++){
    array.push(people[i].age)
  }
  return array
};

const findByName = (name, people) => {
  // your code here
for (let i=0;i<people.length;i++){
  if (people[i].name === name){
    return people[i]
  }
}
};

const findHondas = cars => {
  // your code here
  const array = []
  for (let i=0;i<cars.length;i++){
     if (cars[i].manufacturer==="Honda"){
      array.push(cars[i])
     }
  }
  return array
};

const averageAge = people => {
  // your code here
  const array=[]
  for (let i=0;i<people.length;i++){
    array.push(people[i].age)
  }
  return array.reduce((a,b)=>a+b, 0)/array.length
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    name,
    age,
    introduce(friend) {
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
