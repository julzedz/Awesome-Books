const collection = document.querySelector('.collection');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn')
let books = [];

addBtn.addEventListener('click', () => {
  const bookObject = {
    title: titleInput.value,
    author: authorInput.value,
  }
  books.push(bookObject);
  localStorage.setItem('books', JSON.stringify(books));
  addToDOM()
})

function addToDOM() {
  let box = '';
  for(let i = 0; i< books.length; i += 1){
    box += `<li class="book">
      <p class="title">${books[i].title}</p>
      <p class="author">${books[i].author}</p>
      <button class="remove-btn">Remove</button>
    </li>`;
  }
  collection.innerHTML = box;
  removefromDOM();
}

