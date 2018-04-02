var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = [1];
  const myNewArray = ["foo", ...myArray];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myDestructiveArray = array;
  myDestructiveArray.unshift ("foo");
  return myDestructiveArray;
}

function accessElementInArray(array, index) {
  var thisArray = ["blah"];
  console.log(thisArray[0]);
}