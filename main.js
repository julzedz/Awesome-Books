const form = document.querySelector('form');
const collection = document.querySelector('.collection');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
let books = [];

//create a function for li content
// function bookInput({title, author}) {
//   return `<li class="book">
//       <p class="title">${title}</p>
//       <p class="author">${author}</p>
//       <button class="remove-btn">Remove</button>
//     </li>
//     <hr>`;
// }
