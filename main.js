import Books from './booksClass.js';

const collection = document.querySelector('.collection');
const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
const newBook = new Books();
let { books } = newBook;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  static addBooks() {
    let box = '';
    const bookLength = books.length;
    for (let i = 0; i < bookLength; i += 1) {
      box += `<li class="book">
      <div id="space">
      <p class="title">${books[i].title} by ${books[i].author}</p>
      <button class="remove-btn" id="${i}">Remove</button>
      </div>
      </li>`;
    }
    collection.innerHTML = box;
    this.removeBook();
    this.clearField();
  }

  static removeBook() {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        elem.parentNode.parentNode.remove();
        const index = elem.id;
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        Book.addBooks();
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

const listPage = document.querySelector('.collection-section')
const formPage = document.querySelector('.form')
const contactPage = document.querySelector('.ContactPage')
const list = document.querySelector(".list-book-nav");
const addNav = document.querySelector(".add-book-nav");
const contactNav = document.querySelector(".contact-nav");
const date = document.querySelector(".date");

list.addEventListener('click', () => {
  listPage.style.display = 'block';
  formPage.style.display = 'none';
  contactPage.style.display = 'none';
});

addNav.addEventListener('click', () => {
  formPage.style.display = 'block';
  listPage.style.display = 'none';
  contactPage.style.display = 'none';
});

contactNav.addEventListener('click', () => {
  contactPage.style.display = 'block';
  listPage.style.display = 'none';
  formPage.style.display = 'none';
});
console.log(contactPage)
