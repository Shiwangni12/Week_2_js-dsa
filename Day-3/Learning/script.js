console.log(" (DOM) ");
console.log(document);
const parentElement = document.querySelector('.parent');
const header = document.getElementById('header');
console.log("Header Element:", header);

// Select by Class Name
const items = document.getElementsByClassName('item');
console.log("Items:", items);

// Select by Tag Name
const paragraphs = document.getElementsByTagName('p');
console.log("Paragraphs:", paragraphs);

// Query Selector (first matching element)
const firstItem = document.querySelector('.item');
console.log("First Item:", firstItem);
const newElement = document.createElement('div');
newElement.textContent = "New Element";
newElement.classList.add('new-class');

const elementToRemove = document.querySelector('.remove-me');
if (elementToRemove) {
  elementToRemove.remove();
}
