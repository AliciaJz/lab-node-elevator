const Elevator = require('./elevator.js');
const Person = require('./person.js');

let myElevator = new Elevator();
const personOne = new Person ("Ana", 3, 5);
const personTwo = new Person ("Diego", 1, 7);
const personThree = new Person ("Yaya", 7, 2);
const personFour = new Person ("Domi", 2, 9);
const personFive = new Person ("Ita", 9, 0);

myElevator.call(personOne);
myElevator.call(personTwo);
myElevator.call(personThree);
myElevator.call(personFour);
myElevator.call(personFive);
console.log(myElevator.waitingList);
myElevator.start();