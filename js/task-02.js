const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const cotegoriesEl = document.querySelector('#ingredients');
console.log(cotegoriesEl);
const ingredientsEl = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');  
  return listEl;
});
console.log(ingredientsEl);
cotegoriesEl.append(...ingredientsEl);
