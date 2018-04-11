/*
let grilledCheeseIngredients  = [
  'bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'
];
let tomatoSauceIngredients = [
  'tomato', 'garlic', 'olive oil', 'basil', 'oregano'
];
*/
let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arrayName, elementToAdd){
 return arrayName.unshift(elementToAdd);
}
function destructivelyAddElementToBeginningOfArray(arrayName, elementToAdd){
  arrayName[0]
}