const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('li.item');

const categoriesCount = categories.length;

console.log(`Liczba kategorii: ${categoriesCount}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  
  const categoryItems = category.querySelectorAll('li');
  
  const categoryItemCount = categoryItems.length;
  
  console.log(`${categoryTitle}: ${categoryItemCount}`);
});