// znajdź listę kategorii
const categoriesList = document.querySelector('#categories');

// znajdź wszystkie elementy li.item na liście
const categories = categoriesList.querySelectorAll('li.item');

// policz liczbę elementów na liście
const categoriesCount = categories.length;

// wyświetl liczbę kategorii w konsoli
console.log(`Liczba kategorii: ${categoriesCount}`);

// przejdź przez każdą kategorię i wyświetl jej nazwę i liczbę elementów
categories.forEach(category => {
  // znajdź nagłówek kategorii
  const categoryTitle = category.querySelector('h2').textContent;
  
  // znajdź listę elementów w kategorii
  const categoryItems = category.querySelectorAll('li');
  
  // policz liczbę elementów w kategorii
  const categoryItemCount = categoryItems.length;
  
  // wyświetl nazwę kategorii i liczbę elementów w konsoli
  console.log(`${categoryTitle}: ${categoryItemCount}`);
});