var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = array;
  const myNewArray = [element, ...array];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myDestructiveArray = array;
  myDestructiveArray.unshift (element);
  return myDestructiveArray;
}

function accessElementInArray(array, index) {
  var thisArray = ["blah"];
  console.log(thisArray[0]);
}