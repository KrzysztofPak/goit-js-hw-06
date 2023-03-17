const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// znajdź listę ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// utwórz element <li> dla każdego elementu w tablicy ingredients i dodaj go do listy
ingredients.forEach(ingredient => {
  // utwórz nowy element <li>
  const li = document.createElement('li');
  
  // dodaj zawartość tekstową do elementu <li>
  li.textContent = ingredient;
  
  // dodaj klasę 'item' do elementu <li>
  li.classList.add('item');
  
  // dodaj element <li> do listy ul#ingredients
  ingredientsList.appendChild(li);
});