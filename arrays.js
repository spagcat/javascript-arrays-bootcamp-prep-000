var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = [1];
  const myNewArray = ["foo", ...myArray];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myDestructiveArray = [1];
  myDestructiveArray.unshift ("foo");
  return myDestructiveArray;
}