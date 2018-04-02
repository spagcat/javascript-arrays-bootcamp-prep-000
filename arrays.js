var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = array;
  var myNewArray = [element, ...array];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = array;
  myArray.unshift (element);
  return myArray;
}

function accessElementInArray(array, index) {
  var myArray = array;
  console.log(myArray[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var myArray = array;
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(array) {
  var myArray = array;
  myArray.slice(1);
  return myArray;
    
}