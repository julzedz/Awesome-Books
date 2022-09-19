let collection = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
  },
  {
    title: 'Purple Hibiscus',
    author: 'Chimamanda Adichie',
  }
]

const collectionList = document.querySelector('.collection');
let allContent = '';
for (let i = 0; i < collection.length; i += 1) {
  allContent += `
    <li class="book">
      <p class="title">${collection[i].title}</p>
      <p class="author">${collection[i].author}</p>
      <button class="remove-btn">Remove</button>
    </li>
    <hr>`;
}
collectionList.innerHTML = allContent;

