// Book Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI Class: For UI tasks
class UI {
  static displayBooks() {
    let books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector(".collection");
    list.innerHTML += `<li class='book'>
    <p class='title'>${book.title}</p>
    <p class="author">${book.author}</p>
    <button class="remove-btn">Remove</button>
    </li>`;
    UI.deleteBook();
  }

  static deleteBook() {
    const removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        elem.parentNode.remove();
      });
    });
  }

  static clearField() {
    document.querySelector('.title-input').value = '';
    document.querySelector('.author-input').value = '';
  }
}

// Store Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book)
    localStorage.setItem('books', JSON.stringify('books'));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  //get values
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  // Instantiate a book
  const aNewBook = new Book(title, author);

  // Add book to UI
  UI.addBookToList(aNewBook);

  // Add book to store
  Store.addBooks(aNewBook);


  // Clear field
  UI.clearField();
});





// const collection = document.querySelector('.collection');
// const titleInput = document.querySelector('.title-input');
// const authorInput = document.querySelector('.author-input');
// const addBtn = document.querySelector('.add-btn');
// let books = [];

// function removefromDOM() {
//   const removeBtn = document.querySelectorAll('.remove-btn');
//   removeBtn.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//       elem.parentNode.remove();
//       books.splice(index, 1);
//       localStorage.setItem('books', JSON.stringify(books));
//     });
//   });
// }

// function addToDOM() {
//   let box = '';
//   let bookLength = books.length;
//   for (let i = 0; i < bookLength; i += 1) {
//     box += `<li class="book">
//       <p class="title">${books[i].title}</p>
//       <p class="author">${books[i].author}</p>
//       <button class="remove-btn">Remove</button>
//     </li>`;
//   }
//   collection.innerHTML = box;
//   removefromDOM();
// }

// addBtn.addEventListener('click', () => {
//   const bookObject = {
//     title: titleInput.value,
//     author: authorInput.value,
//   };
//   books.push(bookObject);
//   localStorage.setItem('books', JSON.stringify(books));
//   addToDOM();
// });

// window.addEventListener('load', () => {
//   if (localStorage.getItem('books')) {
//     books = JSON.parse(localStorage.getItem('books'));
//   }
//   addToDOM();
// });
