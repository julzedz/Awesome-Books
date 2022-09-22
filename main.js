const collection = document.querySelector('.collection');
const title = document.querySelector('.title-input').value;
const author = document.querySelector('.author-input').value;
const addBtn = document.querySelector('.add-btn');
let books = JSON.parse(localStorage.getItem("books")) || [];





addBtn.addEventListener('click', () => {
  const bookObject = new Book (title, author)
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
    books.push(this)
  }

  static removeBook()
}

function addToDOM() {
  let box = "";
  let bookLength = books.length;
  for (let i = 0; i < bookLength; i += 1) {
    box += `<li class="book">
      <p class="title">${books[i].title}</p>
      <p class="author">${books[i].author}</p>
      <button class="remove-btn">Remove</button>
    </li>`;
  }
  collection.innerHTML = box;
  removefromDOM();
}

function removefromDOM() {
  const removeBtn = document.querySelectorAll(".remove-btn");
  removeBtn.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      elem.parentNode.remove();
      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
    });
  });
}