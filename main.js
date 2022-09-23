import Books from "./booksClass.js";

const collection = document.querySelector('.collection');
const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
let newBook = new Books();
let books = newBook;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  static addBooks() {
    let box = '';
    const bookLength = books.length;
    for (let i = 0; i < bookLength; i += 1) {
      box += `<li class="book">
      <div id="space">
      <p class="title">${books[i].title} by ${books[i].author}</p>
      <button class="remove-btn">Remove</button>
      </div>
      </li>`;
    }
    collection.innerHTML = box;
    this.removeBook();
    this.clearField();
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
    document.querySelector('.title-input').value = '';
    document.querySelector('.author-input').value = '';
  }
}

addBtn.addEventListener('click', () => {
  const titleValue = title.value;
  const authorValue = author.value;
  const bookObject = new Book(titleValue, authorValue);
  books.push(bookObject);
  Book.addBooks();
  localStorage.setItem('books', JSON.stringify(books));
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  Book.addBooks();
});
