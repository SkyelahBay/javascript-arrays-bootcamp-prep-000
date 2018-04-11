/*
let grilledCheeseIngredients  = [
  'bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'
];
let tomatoSauceIngredients = [
  'tomato', 'garlic', 'olive oil', 'basil', 'oregano'
];
*/
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(arrayName, elementToAdd){
  let newArray = [elementToAdd, ... arrayName];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(arrayName, elementToAdd){
    arrayName.unshift(elementToAdd);
    return arrayName;
}

function addElementToEndOfArray(arrayName, elementToAdd){
  let newArray = [arrayName, ... elementToAdd];
  return newArray;
}
function destructivelyAddElementToEndOfArray(arrayName, elementToAdd){
   arrayName.push(elementToAdd);
   return arrayName;
}

function accessElementInArray(arrayName, index){
  return arrayName[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arrayName){
   arrayName.shift();
   return arrayName;
}