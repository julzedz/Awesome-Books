const collection = document.querySelector('.collection');
const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
let books = JSON.parse(localStorage.getItem('books')) || [];

addBtn.addEventListener('click', () => {
  const titleValue = title.value;
  const authorValue = author.value;
  const bookObject = new Book(titleValue, authorValue);
  books.push(bookObject);
  addToDOM();
  localStorage.setItem('books', JSON.stringify(books));
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  addToDOM();
});

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBooks() {
    books.push(this);
  }

  static removeBook() {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((elem, index) => {
      elem.addEventListener('click', () => {
        elem.parentNode.remove();
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        
      });
    });
  }

  static clearField() {
    document.querySelector(".title-input").value = "";
    document.querySelector(".author-input").value = "";
  }
}

function addToDOM() {
  let box = '';
  let bookLength = books.length;
  for (let i = 0; i < bookLength; i += 1) {
    box += `<li class="book">
      <p class="title">${books[i].title} by</p>
      <p class="author">${books[i].author}</p>
      <button class="remove-btn">Remove</button>
    </li>`;
  }
  collection.innerHTML = box;
  Book.removeBook();
  Book.clearField();
}