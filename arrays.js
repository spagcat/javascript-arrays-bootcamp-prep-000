var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = array;
  const myNewArray = [element, ...array];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = array;
  myArray.unshift (element);
  return myArray;
}

function accessElementInArray(array, index) {
  var thisArray = array;
  console.log(thisArray[index]);
}

//function destructivelyRemoveElementFromBeginningOfArray(array) {
//  var 
//}