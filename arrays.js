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
  return [elementToAdd, ...arrayName];
}
function destructivelyAddElementToBeginningOfArray(arrayName, elementToAdd){
  return arrayName.unshift(elementToAdd);
}

function addElementToEndOfArray(arrayName, elementToAdd){
  return [arrayName, ...elementToAdd];
}
function destructivelyAddElementToEndOfArray(arrayName, elementToAdd){
  return arrayName.push(elementToAdd);
}