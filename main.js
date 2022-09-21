const collection = document.querySelector('.collection');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
let books = [];

function removefromDOM() {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      elem.parentNode.remove();
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    });
  });
}

function addToDOM() {
  let box = '';
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

addBtn.addEventListener('click', () => {
  const bookObject = {
    title: titleInput.value,
    author: authorInput.value,
  };
  books.push(bookObject);
  localStorage.setItem('books', JSON.stringify(books));
  addToDOM();
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  addToDOM();
});
